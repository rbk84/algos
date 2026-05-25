import { IList } from "./types";

class Magic {
    public static test(list: IList) {
        list.add(6);
        list.add(7);
        list.remove();
        list.add(10);
    }
}

export default Magic;