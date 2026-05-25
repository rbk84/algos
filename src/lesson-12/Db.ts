import { IConverter } from "./types";
import { NumberConverter, StringConverter } from "./converters";

type ClassType<T> = { new (...args: any[]): T } | { name: string };

class Db {
    private readonly data: string[];
    private converters: Map<string, IConverter<any>> = new Map();

    constructor(records: string[]) {
        this.data = records;
        this.addConverter('String', new StringConverter());
        this.addConverter('Number', new NumberConverter());
    }

    public addConverter<T>(className: string, converter: IConverter<T>) {
        this.converters.set(className, converter);
    }

    public get<T>(index: number, typeClass: ClassType<T>): T {
        if (index < 0 || index >= this.data.length) {
            throw new Error(`Запись с индексом ${index} не найдена в базе данных.`);
        }

        const rawValue = this.data[index];
        const typeName = (typeClass as any).name;
        const converter = this.converters.get(typeName);

        if (!converter) {
            throw new Error(`Конвертер для типа ${typeName} не зарегистрирован.`);
        }

        return converter.convert(rawValue);
    }
}

export default Db;