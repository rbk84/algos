import {PointConverter} from "./converters";
import Db from "./Db";
import {Point} from "./Point";

const rawDatabase = [
    "123.45",
    "10,50",
    "Привет, мир!"
];

describe('Db', () => {
    test('should correctly query the zero element as a number and as a string', () => {
        const db = new Db(rawDatabase);
        const numValue = db.get(0, Number);
        const strValue = db.get(0, String);

        expect(numValue).toBe(123.45)
        expect(strValue).toBe("123.45")
    });

    test('should correctly query the null element as an object of type Point', () => {
        const db = new Db(rawDatabase);
        db.addConverter('Point', new PointConverter());
        const pointValue = db.get(1, Point);

        expect(pointValue).toEqual({ x: 10, y: 50 })
    });
});