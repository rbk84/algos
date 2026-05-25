export interface IConverter<T> {
    convert(value: string): T;
}