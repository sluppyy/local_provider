"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Provider = void 0;
class Provider {
    constructor(byDefault) {
        this.byDefault = byDefault;
        this._stack = [];
    }
    provide(value, block) {
        this._stack.push(value);
        const result = block();
        this._stack.pop();
        return result;
    }
    get() {
        var _a;
        return (_a = this._stack[this._stack.length - 1]) !== null && _a !== void 0 ? _a : this.byDefault;
    }
    getAll() {
        return [...this._stack];
    }
}
exports.Provider = Provider;
//# sourceMappingURL=index.js.map