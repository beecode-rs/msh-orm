"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryOrStrategy = void 0;
const memory_orm_util_1 = require("../memory-orm-util");
const memory_and_strategy_1 = require("./memory-and-strategy");
class MemoryOrStrategy {
    constructor(params) {
        const { filter, comparisonStrategy, parentKeys = [] } = params;
        this._filter = filter;
        this._parentKeys = parentKeys;
        this._comparisonStrategy = comparisonStrategy;
    }
    filter(params) {
        var _a;
        const { data, keys = [] } = params;
        if (!Array.isArray(this._filter))
            throw Error('Filter must by an array'); // TODO update error message
        const results = this._filter.map((filter) => {
            const result = new memory_and_strategy_1.MemoryAndStrategy({
                filter,
                parentKeys: this._parentKeys,
                comparisonStrategy: this._comparisonStrategy,
            }).filter({ data, keys });
            return result;
        });
        if (results.length > 1)
            return memory_orm_util_1.memoryOrmUtil.uniqueArray(results);
        return (_a = results[0]) !== null && _a !== void 0 ? _a : [];
    }
}
exports.MemoryOrStrategy = MemoryOrStrategy;
//# sourceMappingURL=memory-or-strategy.js.map