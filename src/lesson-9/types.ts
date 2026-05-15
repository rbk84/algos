import ApplicationBuilder from "./ApplicationBuilder";

export interface BinaryOperator<T> {
    apply(a: T, b: T): T;
}

export interface Initiable {
    init(applicationBuilder: ApplicationBuilder): void;
}