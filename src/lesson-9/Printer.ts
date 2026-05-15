import Model from "./Model";
import ApplicationBuilder from "./ApplicationBuilder";

class Printer {
    public accept(model: Model): void {
        console.log(`${model.x} ${model.op} ${model.y} = ${model.res}`);
    }

    public init(applicationBuilder: ApplicationBuilder): void {}
}

export default Printer;