import { eventBus } from "./EventBus";

class CalculatorModel {
    private state = {
        operand1: 0,
        operand2: 0,
        operation: '',
        result: 0
    };

    constructor() {
        eventBus.on('CALCULATE', ({ op1, op2, operation }) => {
            this.setOperands(op1, op2);
            this.compute(operation)
        });
    }

    public setOperands(op1: number, op2: number) {
        this.state.operand1 = op1;
        this.state.operand2 = op2;
    }

    private compute(operation: string) {
        switch (operation) {
            case '+':
                this.state.result = this.state.operand1 + this.state.operand2;
                break;
            case '-':
                this.state.result = this.state.operand1 - this.state.operand2;
                break;
            case '*':
                this.state.result = this.state.operand1 * this.state.operand2;
                break;
            case '/':
                this.state.result = this.state.operand2 !== 0 ? this.state.operand1 / this.state.operand2 : NaN;
                break;
            default:
                this.state.result = 0;
        }

        eventBus.emit('MODEL_UPDATED', this.state.result);
    }
}

export default CalculatorModel