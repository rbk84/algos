import QuickSort from './QuickSort';

describe('QuickSort.sortIterative', () => {
    test('should return a correctly sorted array', () => {
        const arr: number[] = [5, 3, 7, 6, 2, 9, 1, 0, 8, 4];
        const res = new QuickSort().sortIterative(arr);

        expect(res).toEqual([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
});