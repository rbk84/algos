import NodeEl from "./NodeEl";

class Main {
    showScheme(): void {
        console.log("На массивах");
        console.log("Пропускная способность:");

        const print = (arr: number[][]): void => {
            for (let i = 0; i < 6; i++) {
                let row = '';
                for (let j = 0; j < 6; j++) {
                    let start = j === 0 ? '[' : '';
                    let end = j === 5 ? ']' : '';
                    row +=`${start}${arr[i][j] ?? '-'}${end || ', '}`
                }
                console.log(row);
            }
        }

        const [speed, loss] = this.matrixNet();

        print(speed);
        console.log();
        console.log("Процент потерь:");
        print(loss);
        console.log();

        console.log("На узлах");
        this.print(this.nodeNet());
    }

    matrixNet(): number[][][] {
        const getArray = () => Array.from({ length: 6 }, () => Array(6).fill(null));

        const speed: number[][] = getArray();
        const loss: number[][] = getArray();

        const add = (pairIndex: [number, number], data: [number, number]): void => {
            const [rowIndex, colIndex] = pairIndex;
            const [speedData, lossData] = data;

            speed[rowIndex][colIndex] = speedData;
            speed[colIndex][rowIndex] = speedData;
            loss[rowIndex][colIndex] = lossData;
            loss[colIndex][rowIndex] = lossData;
        };

        add([0, 1], [1500, 90]);
        add([0, 2], [2000, 10]);
        add([0, 3], [1000, 50]);
        add([1, 5], [1500, 60]);
        add([2, 4], [900, 5]);
        add([2, 5], [500, 20]);
        add([3, 4], [2500, 1]);
        add([4, 5], [300, 85]);

        return [speed, loss];
    }

    nodeNet(): NodeEl {
        const A = new NodeEl("A");
        const B = new NodeEl("B");
        const C = new NodeEl("C");
        const D = new NodeEl("D");
        const E = new NodeEl("E");
        const F = new NodeEl("F");

        A.connect(B, 1500, 0.9);
        A.connect(C, 2000, 0.1);
        A.connect(D, 1000, 0.5);
        B.connect(F, 1500, 0.6);
        C.connect(E, 900, 0.05);
        C.connect(F, 500, 0.2);
        D.connect(E, 2500, 0.01);
        E.connect(F, 300, 0.85);

        return A;
    }

    print(node: NodeEl): void {
        const visited = new Set<NodeEl>();
        this.dfs(node, visited);
    }

    private dfs(node: NodeEl | null, visited: Set<NodeEl>): void {
        if (node === null || visited.has(node)) {
            return;
        }
        visited.add(node);
        node.show();
        for (const edge of node.friends) {
            this.dfs(edge.target, visited);
        }
    }
}

export default Main;