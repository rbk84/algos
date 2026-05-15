import { Initiable } from "./types";

class ApplicationBuilder {
    private objects: any[] = [];

    public add(object: Initiable): void {
        object.init(this);
        this.objects.push(object);
    }

    public getByType<T>(type: new (...args: any[]) => T): T[] {
        return this.objects.filter((x) => this.classEquals(type, x.constructor)).map(x => x as T);
    }

    private classEquals(need: Function, have: Function): boolean {
        if (need === have) return true;
        return need.prototype.isPrototypeOf(have.prototype);
    }

    public getObjects(): any[] {
        return this.objects;
    }
}

export  default ApplicationBuilder;