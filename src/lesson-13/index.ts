import CalculatorModel from "./CalculatorModel";
import CalculatorViewModel from "./CalculatorViewModel";
import CalculatorView from "./CalculatorView";

const model = new CalculatorModel();
const viewModel = new CalculatorViewModel();
const view = new CalculatorView();

viewModel.performOperation(20, 10, '+');
viewModel.performOperation(15, 5, '/');