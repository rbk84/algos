import { IConverter } from "./types";
import { Point } from "./Point";

// Конвертер для типа Number
export class NumberConverter implements IConverter<number> {
    public convert(value: string): number {
        const result = Number(value);
        if (isNaN(result)) throw new Error(`Невозможно конвертировать "${value}" в число`);

        return result;
    }
}

// Конвертер для типа String
export class StringConverter implements IConverter<string> {
    public convert(value: string): string {
        return value;
    }
}

// Конвертер для сложного объекта, например, Point
export class PointConverter implements IConverter<Point> {
    public convert(value: string): Point {
        // Ожидаем формат строки "x,y", например "10,20"
        const parts = value.split(',');
        if (parts.length !== 2) {
            throw new Error(`Невозможно конвертировать "${value}" в Point`);
        }

        return new Point(Number(parts[0]), Number(parts[1]));
    }
}