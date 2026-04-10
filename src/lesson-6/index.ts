import BinarySearchTree from "./BinarySearchTree";


const bst = new BinarySearchTree<number, string>();
bst.insert(10, "десять");
bst.insert(5, "пять");
bst.insert(15, "пятнадцать");
bst.insert(5, "пять-обновлено");

console.log(bst.search(5));
console.log(bst.delete(10));
console.log(bst.search(10));