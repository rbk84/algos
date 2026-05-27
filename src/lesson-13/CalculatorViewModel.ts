import { eventBus } from "./EventBus";

class CalculatorViewModel {
    private outputText: string = '0';

    constructor() {
        eventBus.on('MODEL_UPDATED', (result: number) => {
            this.outputText = `Результат: ${result}`;
            eventBus.emit('VIEW_MODEL_UPDATED', this.outputText);
        });
    }

    public performOperation(op1: number, op2: number, operation: string) {
        eventBus.emit('CALCULATE', { op1, op2, operation });
    }
}

export default CalculatorViewModel