"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryNeqStrategy = void 0;
const filter_1 = require("../../dal/filter");
const memory_orm_util_1 = require("../memory-orm-util");
const memory_eq_strategy_1 = require("./memory-eq-strategy");
class MemoryNeqStrategy {
    filter(params) {
        const { data, keys, filter } = params;
        const equalResult = new memory_eq_strategy_1.MemoryEqStrategy().filter({ data, keys, filter });
        return memory_orm_util_1.memoryOrmUtil.notInArrays(data, [equalResult]);
    }
    isOperationAllowed(key) {
        if ([
            filter_1.OrmComparisonOperator.GREATER_THEN,
            filter_1.OrmComparisonOperator.GREATER_THEN_EQUAL,
            filter_1.OrmComparisonOperator.LESS_THEN,
            filter_1.OrmComparisonOperator.LESS_THEN_EQUAL,
            filter_1.OrmComparisonOperator.BETWEEN,
            filter_1.OrmComparisonOperator.IN,
        ]
            .map((a) => `${a}`)
            .includes(key))
            throw Error(`Operation [${key}] not allowed in NOT_EQUAL operation`);
    }
}
exports.MemoryNeqStrategy = MemoryNeqStrategy;
//# sourceMappingURL=memory-neq-strategy.js.map