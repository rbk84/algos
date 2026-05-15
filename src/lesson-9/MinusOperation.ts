import { BinaryOperator, Initiable } from "./types";
import ApplicationBuilder from "./ApplicationBuilder";

class MinusOperation implements BinaryOperator<number>, Initiable {
    public apply(x: number, y: number): number {
        return x - y;
    }

    public init(applicationBuilder: ApplicationBuilder): void {}

    public toString(): string {
        return "-";
    }
}

export default MinusOperation;