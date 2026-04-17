export const findAllLCS = (str1: string, str2: string): string[] => {
    const str1Length = str1.length;
    const str2Length = str2.length;

    // cоздание таблицы DP для длин LCS
    const dp: number[][] = Array.from({ length: str1Length + 1 }, () => Array(str2Length + 1).fill(0));
    // заполнение таблицы DP
    for (let i = 1; i <= str1Length; i++) {
        for (let j = 1; j <= str2Length; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    // рекурсивная функция для поиска всех путей (backtracking)
    const result = new Set<string>();

    const backtrack = (i: number, j: number, currentLCS: string) => {
        if (i === 0 || j === 0) {
            result.add(currentLCS.split('').reverse().join(''));
            return;
        }

        if (str1[i - 1] === str2[j - 1]) {
            backtrack(i - 1, j - 1, currentLCS + str1[i - 1]);
        } else {
            if (dp[i - 1][j] > dp[i][j - 1]) {
                backtrack(i - 1, j, currentLCS);
            } else if (dp[i][j - 1] > dp[i - 1][j]) {
                backtrack(i, j - 1, currentLCS);
            } else {
                // Если значения равны, идем в оба направления
                backtrack(i - 1, j, currentLCS);
                backtrack(i, j - 1, currentLCS);
            }
        }
    }

    // запуск бэктрекинга с конца
    backtrack(str1Length, str2Length, "");

    return Array.from(result);
}