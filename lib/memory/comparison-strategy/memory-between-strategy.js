"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryBetweenStrategy = void 0;
const filter_1 = require("../../dal/filter");
const memory_orm_util_1 = require("../memory-orm-util");
const lodash_get_1 = __importDefault(require("lodash.get"));
class MemoryBetweenStrategy {
    filter(params) {
        const { data, keys, filter: [from, to], } = params;
        const simpleFrom = memory_orm_util_1.memoryOrmUtil.simplifyObject(from);
        const simpleTo = memory_orm_util_1.memoryOrmUtil.simplifyObject(to);
        return data.filter((d) => {
            const simpleFilter = memory_orm_util_1.memoryOrmUtil.simplifyObject((0, lodash_get_1.default)(d, keys.join('.')));
            const passedFromCheck = simpleFrom <= simpleFilter;
            const passedToCheck = simpleFilter <= simpleTo;
            return passedFromCheck && passedToCheck;
        });
    }
    isOperationAllowed(key) {
        if ([
            filter_1.OrmComparisonOperator.GREATER_THEN,
            filter_1.OrmComparisonOperator.GREATER_THEN_EQUAL,
            filter_1.OrmComparisonOperator.LESS_THEN,
            filter_1.OrmComparisonOperator.LESS_THEN_EQUAL,
            filter_1.OrmComparisonOperator.IN,
        ]
            .map((a) => `${a}`)
            .includes(key))
            throw Error(`Operation [${key}] not allowed in BETWEEN operation`);
    }
}
exports.MemoryBetweenStrategy = MemoryBetweenStrategy;
//# sourceMappingURL=memory-between-strategy.js.map