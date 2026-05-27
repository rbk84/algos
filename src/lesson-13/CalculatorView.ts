import { eventBus } from "./EventBus";

class CalculatorView {
    constructor() {
        eventBus.on('VIEW_MODEL_UPDATED', (displayValue: string) => {
            this.render(displayValue);
        });
    }

    public render(output: string) {
        console.log(`[Отображение на экране]: ${output}`);
    }
}

export default CalculatorView;