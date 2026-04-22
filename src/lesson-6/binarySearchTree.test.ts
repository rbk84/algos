import BinarySearchTree from './BinarySearchTree';

describe('BinarySearchTree', () => {
    test('The search method must return the correct values if the key is found', () => {
        const bst = new BinarySearchTree<number, string>();
        bst.insert(10, "десять");
        bst.insert(5, "пять");
        bst.insert(15, "пятнадцать");

        expect(bst.search(5)).toBe("пять");
    });

    test('The search method should return null if the key is not found', () => {
        const bst = new BinarySearchTree<number, string>();
        bst.insert(10, "десять");
        bst.insert(5, "пять");
        bst.insert(15, "пятнадцать");

        expect(bst.search(7)).toBe(null);
    });

    test('The insert method should overwrite the existing value if such a key already exists', () => {
        const bst = new BinarySearchTree<number, string>();
        bst.insert(10, "десять");
        bst.insert(5, "пять");
        bst.insert(15, "пятнадцать");
        bst.insert(5, "пять-обновлено");

        expect(bst.search(5)).toBe("пять-обновлено");
    });

    test('The delete method should delete a key and return the value that was in the deleted key', () => {
        const bst = new BinarySearchTree<number, string>();
        bst.insert(10, "десять");
        bst.insert(5, "пять");
        bst.insert(15, "пятнадцать");

        expect(bst.delete(5)).toBe("пять");
        expect(bst.search(5)).toBe(null);
    });

    test('The delete method should return null if the key is not found', () => {
        const bst = new BinarySearchTree<number, string>();
        bst.insert(10, "десять");
        bst.insert(5, "пять");
        bst.insert(15, "пятнадцать");

        expect(bst.delete(7)).toBe(null);
    });
});