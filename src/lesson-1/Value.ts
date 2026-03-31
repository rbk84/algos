class Value {
    constructor(public speed: number, public loss: number) {}

    toString(): string {
        return `[${this.speed}, ${this.loss}]`;
    }
}

export default Value;