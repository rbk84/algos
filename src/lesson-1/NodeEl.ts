import Edge from "./Edge";

class NodeEl {
    friends: Edge[] = [];

    constructor(public name: string) {}

    connect(other: NodeEl, speed: number, loss: number): void {
        this.friends.push(new Edge(other, speed, loss));
        other.friends.push(new Edge(this, speed, loss));
    }

    show(): void {
        console.log(`${this.name} ->`);
        this.friends.forEach((friend) => {
            console.log(`${friend} | `)
        });
        console.log();
    }
}

export default NodeEl;