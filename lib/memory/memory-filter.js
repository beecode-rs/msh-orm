"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memoryFilter = void 0;
const memory_eq_strategy_1 = require("./comparison-strategy/memory-eq-strategy");
const memory_and_strategy_1 = require("./logical-strategy/memory-and-strategy");
exports.memoryFilter = {
    filter: (params) => {
        const { data, filter = {} } = params;
        return new memory_and_strategy_1.MemoryAndStrategy({ filter, comparisonStrategy: new memory_eq_strategy_1.MemoryEqStrategy() }).filter({
            data,
        });
    },
};
//# sourceMappingURL=memory-filter.js.map