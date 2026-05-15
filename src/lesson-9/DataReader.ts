import Model from "./Model";
import { Initiable } from "./types";
import ApplicationBuilder from "./ApplicationBuilder";

class DataReader implements Initiable {
    public get(): Model {
        let model = new Model();
        const sc = require('readline-sync');

        model.op = sc.question('Enter operation: ');
        model.x = sc.questionInt('Enter first number: ');
        model.y = sc.questionInt('Enter second number: ');

        return model;
    }

    public init(applicationBuilder: ApplicationBuilder): void {}
}

export default DataReader;