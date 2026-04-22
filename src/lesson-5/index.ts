import { printEdjeList, adjMatrixToEdgeList, topologicalSort } from "./solution";

const adjMatrix1: (0 | 1)[][] = [[0, 1, 1, 0], [1, 0, 1, 1], [1, 1, 0, 0], [0, 0, 0, 0]];
const adjMatrix2: (0 | 1)[][] = [
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
    [0, 0, 0, 0],
];

console.log(printEdjeList(adjMatrixToEdgeList(adjMatrix1)));
console.log(topologicalSort(adjMatrix2))