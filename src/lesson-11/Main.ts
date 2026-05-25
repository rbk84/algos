import ArrayList from "./ArrayList";
import ArrayListWrapper from "./ArrayListWrapper";
import Magic from "./Magic";


class Main {
    public static main() {
        const arrList = new ArrayList([1, 2, 3]);
        const arrListWrapper = new ArrayListWrapper(arrList);
        Magic.test(arrListWrapper);
        console.log(arrListWrapper.getNumberOfAdd());
    }
}

export default Main;