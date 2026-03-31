import NodeEl from "./NodeEl";

class Edge {
    constructor(public target: NodeEl, public speed: number, public loss: number) {}

    toString(): string {
        return `${this.target.name}(${this.speed}, ${Math.round(this.loss * 100)}%)`;
    }
}

export default Edge;