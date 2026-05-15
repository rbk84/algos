import DataReader from "./DataReader";
import Printer from "./Printer";
import { BinaryOperator, Initiable } from "./types";
import ApplicationBuilder from "./ApplicationBuilder";
import PlusOperation from "./PlusOperation";
import MinusOperation from "./MinusOperation";

class OperationMaker implements Initiable {
    private dataReader!: DataReader;
    private printer!: Printer;
    private operations!: Map<string, (x: number, y: number) => number>;

    public make(): void {
        const model = this.dataReader.get();
        model.res = this.operations.get(model.op)?.(model.x, model.y) ?? 0;
        this.printer.accept(model);
    }

    public init(applicationBuilder: ApplicationBuilder): void {
        this.dataReader = applicationBuilder.getByType<DataReader>(DataReader)[0];
        this.printer = applicationBuilder.getByType<Printer>(Printer)[0];
        this.operations = new Map<string, (x: number, y: number) => number>(
            applicationBuilder.getByType<BinaryOperator<number>>(PlusOperation).concat(applicationBuilder.getByType<BinaryOperator<number>>(MinusOperation))
                .map(op => [op.toString(), op.apply.bind(op)])
        );
    }
}

export default OperationMaker;