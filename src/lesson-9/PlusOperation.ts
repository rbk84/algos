import { BinaryOperator } from "./types";
import ApplicationBuilder from "./ApplicationBuilder";

class PlusOperation implements BinaryOperator<number> {
    public apply(x: number, y: number): number {
        return x + y;
    }

    public init(applicationBuilder: ApplicationBuilder): void {}

    public toString(): string {
        return "+";
    }
}

export default PlusOperation