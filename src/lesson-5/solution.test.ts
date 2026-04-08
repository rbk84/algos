import { topologicalSort, adjMatrixToEdgeList } from './solution';

describe('solution', () => {
    describe('adjMatrixToEdgeList', () => {
        test('should return correct array with lists of edges', () => {
            const adjMatrix: (0 | 1)[][] = [[0, 1, 1, 0], [1, 0, 1, 1], [1, 1, 0, 0], [0, 0, 0, 0]];
            const res = adjMatrixToEdgeList(adjMatrix);

            expect(res).toEqual([[0,1], [0,2], [1,0], [1,2], [1,3], [2,0], [2,1]]);
        });
    });

    describe('topologicalSort', () => {
        test('should return correct array with node numbers', () => {
            const adjMatrix: (0 | 1)[][] = [
                [0, 1, 0, 0],
                [0, 0, 1, 0],
                [0, 0, 0, 1],
                [0, 0, 0, 0],
            ];
            const res = topologicalSort(adjMatrix);

            expect(res).toEqual([0, 1, 2, 3]);
        });
    });
});