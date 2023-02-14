"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryNotStrategy = void 0;
const memory_eq_strategy_1 = require("../comparison-strategy/memory-eq-strategy");
const memory_orm_util_1 = require("../memory-orm-util");
const memory_and_strategy_1 = require("./memory-and-strategy");
class MemoryNotStrategy {
    constructor(params) {
        const { filter, parentKeys = [], comparisonStrategy } = params;
        this._filter = filter;
        this._parentKeys = parentKeys;
        this._comparisonStrategy = comparisonStrategy;
    }
    filter(params) {
        const { keys, data } = params;
        const equalResult = new memory_and_strategy_1.MemoryAndStrategy({
            filter: this._filter,
            parentKeys: keys,
            comparisonStrategy: new memory_eq_strategy_1.MemoryEqStrategy(),
        }).filter({ data });
        return memory_orm_util_1.memoryOrmUtil.notInArrays(data, [equalResult]);
    }
}
exports.MemoryNotStrategy = MemoryNotStrategy;
//# sourceMappingURL=memory-not-strategy.js.map