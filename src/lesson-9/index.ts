import DataReader from "./DataReader";
import Printer from "./Printer";
import PlusOperation from "./PlusOperation";
import MinusOperation from "./MinusOperation";
import OperationMaker from "./OperationMaker";
import ApplicationBuilder from "./ApplicationBuilder";

let builder = new ApplicationBuilder();
builder.add(new PlusOperation());
builder.add(new MinusOperation());
builder.add(new Printer());
builder.add(new DataReader());
builder.add(new OperationMaker());

const maker = builder.getByType(OperationMaker)[0];

while (true){
    maker.make();
}