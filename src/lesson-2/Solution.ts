interface Result {
    min: number;
    max: number;
}

class Solution {
    public static findMinMaxCompact(arr: number[]): Result | null {
        if (arr.length === 0) {
            return null;
        }

        let min, max, i;

        if (arr.length % 2 === 0) {
            min = Math.min(arr[0], arr[1]);
            max = Math.max(arr[0], arr[1]);
            i = 2;
        } else {
            min = arr[0];
            max = arr[0];
            i = 1;
        }

        for (; i < arr.length - 1; i += 2) {
            const a = arr[i];
            const b = arr[i + 1];

            if (a < b) {
                if (a < min) min = a;
                if (b > max) max = b;
            } else {
                if (b < min) min = b;
                if (a > max) max = a;
            }
        }

        return { min, max };
    }
}

export default Solution;