import TreeNode from "./TreeNode";

// Бинарное дерево поиска
class BinarySearchTree<K, V> {
    private root: TreeNode<K, V> | null = null;

    search(key: K): V | null {
        let current = this.root;

        // Проходим по дереву до тех пор, пока не найдем нужный узел или не дойдем до конца дерева (current станет null)
        while (current) {
            // Если ключ найден, то возвращается значение
            if (key === current.key) return current.value;
            // Иначе продолжаем поиск
            current = key < current.key ? current.left : current.right;
        }

        // Если ключ не найден, то возвращается null
        return null;
    }

    insert(key: K, value: V): void {
        const newNode = new TreeNode(key, value);

        // Если дерево пустое, то новый узел становится корнем дерева
        if (!this.root) {
            this.root = newNode;
            return;
        }

        let current = this.root;

        // Проходим по дереву до тех пор, пока не найдем место для нового узла
        // Если ключ уже существует, то перезаписываем значение узла с этим ключом
        // Если ключ меньше текущего ключа, то идем влево, иначе - вправо
        // Если дочерний узел отсутствует, то новый узел становится его потомком
        // Процесс повторяется до тех пор, пока не будет найдено место для нового узла или не будет найден узел с таким же ключом (в этом случае перезаписывается значение)
        while (true) {
            if (key === current.key) {
                current.value = value;
            }

            if (key < current.key) {
                if (!current.left) {
                    current.left = newNode;
                    return;
                }

                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return;
                }

                current = current.right;
            }
        }
    }

    delete(key: K): V | null {
        // Поиск значения по ключу перед удалением для возврата удаленного значения
        const removedValue = this.search(key);

        // Если узел с заданным ключом найден, он удаляется из дерева
        if (removedValue !== null) {
            this.root = this.deleteNode(this.root, key);
        }

        // Возвращается удаленное значение или null, если такого ключа нет в дереве
        return removedValue;
    }

    private deleteNode(node: TreeNode<K, V> | null, key: K): TreeNode<K, V> | null {
        // Если узел не найден, возвращаем null
        if (!node) return null;

        // Если ключ меньше текущего, идем в левое поддерево
        if (key < node.key) {
            node.left = this.deleteNode(node.left, key);
            // Если ключ больше текущего, идем в правое поддерево
        } else if (key > node.key) {
            node.right = this.deleteNode(node.right, key);
        } else {
            // Иначе ключ равен текущему, начинаем процесс удаления узла
            // Если у узла нет одного из потомков, заменяем его на другой потомок
            if (!node.left) return node.right;
            if (!node.right) return node.left;

            // Если у узла есть оба потомка, ищем минимальный элемент в правом поддереве,
            // заменяем значение текущего узла на найденный минимальный элемент,
            // и рекурсивно удаляем этот минимальный элемент из правого поддерева
            node.key = this.minNode(node.right).key;
            node.value = this.minNode(node.right).value;
            node.right = this.deleteNode(node.right, node.key);
        }
        return node;
    }

    private minNode(node: TreeNode<K, V>): TreeNode<K, V> {
        // Ищем минимальный узел в поддереве, начиная с заданного узла
        while (node.left) node = node.left;
        return node;
    }
}

export default BinarySearchTree;