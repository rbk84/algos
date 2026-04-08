class QuickSort {
    public sortIterative(arr: number[]): number[] {
        if (arr.length <= 1) return arr;

        // Стек для хранения пар границ [левая, правая]
        let stack: [number, number][] = [];
        stack.push([0, arr.length - 1]);

        while (stack.length > 0) {
            // Получаем текущие границы
            let [left, right]: [number, number] = stack.pop()!;

            if (left >= right) continue;

            // Логика выбора опорного элемента и перестановки элементов
            let pivot = arr[Math.floor((left + right) / 2)];
            let i = left;
            let j = right;

            while (i <= j) {
                while (arr[i] < pivot) i++;
                while (arr[j] > pivot) j--;

                if (i <= j) {
                    [arr[i], arr[j]] = [arr[j], arr[i]]; // Обмен
                    i++;
                    j--;
                }
            }

            // Добавляем границы подмассивов в стек
            if (left < j) stack.push([left, j]);
            if (i < right) stack.push([i, right]);
        }

        return arr;
    }
}

export default QuickSort;