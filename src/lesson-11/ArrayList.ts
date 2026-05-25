import { IList } from "./types";

class ArrayList implements IList {
    private arr: number[] = [];

    constructor(arr: number[] = []) {
        this.arr = arr;
    }

    public add(value: number): void {
        this.arr.push(value);
    }

    public remove(): void {
        this.arr.pop();
    }
}

export default ArrayList;