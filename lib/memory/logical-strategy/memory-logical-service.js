"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memoryLogicalService = void 0;
const filter_1 = require("../../dal/filter");
const memory_and_strategy_1 = require("./memory-and-strategy");
const memory_not_strategy_1 = require("./memory-not-strategy");
const memory_or_strategy_1 = require("./memory-or-strategy");
const _self = {
    getLogicalStrategyFromKey: (params) => {
        const { key, filter, comparisonStrategy, parentKeys } = params;
        switch (key) {
            case filter_1.OrmLogicalOperator.OR:
                return new memory_or_strategy_1.MemoryOrStrategy({ filter, comparisonStrategy, parentKeys });
            case filter_1.OrmLogicalOperator.AND:
                return new memory_and_strategy_1.MemoryAndStrategy({ filter, comparisonStrategy, parentKeys });
            case filter_1.OrmLogicalOperator.NOT:
                return new memory_not_strategy_1.MemoryNotStrategy({ filter, comparisonStrategy, parentKeys });
        }
        //
        // if (_self.isFilterOptionAnyObject(filter)) {
        //   const keys = [...parentKeys]
        //   if (!ORM_FILTER_OPERATIONS.map((a) => `${a}`).includes(key)) keys.push(key)
        //   return new MemoryAndStrategy({ filter, comparisonStrategy, parentKeys: keys })
        // }
        return undefined;
    },
};
exports.memoryLogicalService = _self;
//# sourceMappingURL=memory-logical-service.js.map