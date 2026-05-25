class MaskingParser {
    // Метод для маскирования строки
    public mask(input: string): string {
        // Маскируем логин
        input = this.maskLogin(input);
        // Маскируем ФИО
        input = this.maskFullName(input);
        // Маскируем электронную почту
        input = this.maskEmail(input);
        // Маскируем номер карты
        input = this.maskCardNumber(input);

        return input;
    }

    // Метод для маскирования логина
    private maskLogin(input: string): string {
        const loginRegex = /login=([^\s]+)/g;

        return input.replace(loginRegex, (_, login) => {
            if (login.length <= 7) {
                return `login=${login[0]}${'*'.repeat(login.length - 1)}`;
            } else {
                return `login=${login[0]}${login[1]}***${login[login.length - 1]}`;
            }
        });
    }

    // Метод для маскирования ФИО
    private maskFullName(input: string): string {
        const nameRegex = /name=([А-ЯЁ][а-яё]+)\s+([А-ЯЁ][а-яё]+)(?:\s+([А-ЯЁ][а-яё]+))?/g;

        return input.replace(nameRegex, (_, lastName, firstName, patronymic) => {
            let maskedPatronymic = '';
            const maskedLastName = lastName.length <= 7
                ? `${lastName[0]}${'*'.repeat(lastName.length - 1)}`
                : `${lastName[0]}${lastName[1]}***${lastName[lastName.length - 1]}`;

            if (patronymic) {
                maskedPatronymic = patronymic.length <= 7
                    ? ` ${patronymic[0]}${'*'.repeat(patronymic.length - 1)}`
                    : ` ${patronymic[0]}${patronymic[1]}***${patronymic[patronymic.length - 1]}`;
            }

            return `name=${maskedLastName} ${firstName}${maskedPatronymic}`;
        });
    }

    // Метод для маскирования электронной почты
    private maskEmail(input: string): string {
        const emailRegex = /email=([^\s@]+)@([^\s]+)/g;

        return input.replace(emailRegex, (_, user, domain) => {
            return `email=${user[0]}***${'@' + domain}`;
        });
    }

    // Метод для маскирования номера карты
    private maskCardNumber(input: string): string {
        const cardRegex = /card=(\d{4}\s\d{4}\s\d{4}\s\d{4})/g;

        return input.replace(cardRegex, (_, cardNumber) => {
            return `card=${cardNumber.slice(0, 7)}** **** ${cardNumber.slice(-4)}`;
        });
    }
}

export default MaskingParser;