import Db from "./Db";
import { Point } from "./Point";

const db = new Db([
    "123.45",
    "10,50",
    "Привет, мир!"
]);

const numValue = db.get(0, Number);
const strValue = db.get(0, String);
const pointValue = db.get(1, Point);