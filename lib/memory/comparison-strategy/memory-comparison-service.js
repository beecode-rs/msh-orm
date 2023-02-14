"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memoryComparisonService = void 0;
const filter_1 = require("../../dal/filter");
const memory_between_strategy_1 = require("./memory-between-strategy");
const memory_gt_strategy_1 = require("./memory-gt-strategy");
const memory_gte_strategy_1 = require("./memory-gte-strategy");
const memory_in_strategy_1 = require("./memory-in-strategy");
const memory_lt_strategy_1 = require("./memory-lt-strategy");
const memory_lte_strategy_1 = require("./memory-lte-strategy");
const memory_neq_strategy_1 = require("./memory-neq-strategy");
exports.memoryComparisonService = {
    getComparisonStrategyFromKey: (params) => {
        const { key } = params;
        switch (key) {
            case filter_1.OrmComparisonOperator.GREATER_THEN:
                return new memory_gt_strategy_1.MemoryGtStrategy();
            case filter_1.OrmComparisonOperator.GREATER_THEN_EQUAL:
                return new memory_gte_strategy_1.MemoryGteStrategy();
            case filter_1.OrmComparisonOperator.LESS_THEN:
                return new memory_lt_strategy_1.MemoryLtStrategy();
            case filter_1.OrmComparisonOperator.LESS_THEN_EQUAL:
                return new memory_lte_strategy_1.MemoryLteStrategy();
            case filter_1.OrmComparisonOperator.BETWEEN:
                return new memory_between_strategy_1.MemoryBetweenStrategy();
            case filter_1.OrmComparisonOperator.IN:
                return new memory_in_strategy_1.MemoryInStrategy();
            case filter_1.OrmComparisonOperator.NOT_EQUAL:
                return new memory_neq_strategy_1.MemoryNeqStrategy();
        }
        return;
    },
};
//# sourceMappingURL=memory-comparison-service.js.map