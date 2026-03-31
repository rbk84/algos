import Solution from './Solution';

interface Result {
    min: number;
    max: number;
}

describe('Solution.findMinMaxCompact', () => {
    test('should return correct min and max for array', () => {
        const arr: number[] = [1, 2, 3, 4, 5];
        const res: Result | null = Solution.findMinMaxCompact(arr);

        expect(res?.min).toBe(1);
        expect(res?.max).toBe(5);
    });
});