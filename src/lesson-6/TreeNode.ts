// Узел дерева
class TreeNode<K, V> {
    key: K;
    value: V;
    left: TreeNode<K, V> | null = null;
    right: TreeNode<K, V> | null = null;

    constructor(key: K, value: V) {
        this.key = key;
        this.value = value;
    }
}

export default TreeNode;