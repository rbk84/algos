import { IList } from "./types";

class ArrayListWrapper implements IList {
    private list: IList;
    private countAdd: number = 0;

    constructor(list: IList) {
        this.list = list;
    }

    public add(value: number): void {
        this.countAdd++;
        this.list.add(value);
    }

    public remove(): void {
        this.list.remove();
    }

    public getNumberOfAdd(): number {
        return this.countAdd;
    }
}

export default ArrayListWrapper;