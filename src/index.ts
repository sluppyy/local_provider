export class Provider<T> {
  private _stack: T[] = []

  constructor(
    private readonly byDefault: T
  ) {}

  provide<R>(value: T, block: () => R): R {
    this._stack.push(value)
    const result = block()
    this._stack.pop()
    
    return result
  }

  get(): T {
    return this._stack[this._stack.length - 1] ?? this.byDefault
  }
}