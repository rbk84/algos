export const printEdjeList = (arr: number[][]): void => {
    let row = '';
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            const end = j === arr[i].length - 1 ? '\n' : ',';
            row +=`${arr[i][j]}${end}`
        }
    }
    console.log('[\n' + row + ']');
}

export const adjMatrixToEdgeList = (matrix: (0 | 1)[][]): number[][] => {
    let result: number[][] = [];

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 1) {
                result.push([i,j])
            }
        }
    }

    return result;
}

export function topologicalSort(matrix: (0 | 1)[][]): number[] {
    const numVertices = matrix.length;
    const visited = new Array(numVertices).fill(false);
    const stack: number[] = [];

    // Функция DFS
    function dfs(v: number) {
        visited[v] = true;

        for (let neighbor = 0; neighbor < numVertices; neighbor++) {
            // Если есть ребро и сосед не посещен
            if (matrix[v][neighbor] === 1 && !visited[neighbor]) {
                dfs(neighbor);
            }
        }
        // После посещения всех соседей, добавляем вершину в стек
        stack.push(v);
    }

    // Запускаем DFS для каждой вершины
    for (let i = 0; i < numVertices; i++) {
        if (!visited[i]) {
            dfs(i);
        }
    }

    // Результат - перевернутый стек
    return stack.reverse();
}