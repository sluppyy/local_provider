export declare class Provider<T> {
    private readonly byDefault;
    private _stack;
    constructor(byDefault: T);
    provide<R>(value: T, block: () => R): R;
    get(): T;
    getAll(): T[];
}
