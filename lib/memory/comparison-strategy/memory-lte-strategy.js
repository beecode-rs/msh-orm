"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryLteStrategy = void 0;
const filter_1 = require("../../dal/filter");
const memory_orm_util_1 = require("../memory-orm-util");
const lodash_get_1 = __importDefault(require("lodash.get"));
class MemoryLteStrategy {
    filter(params) {
        const { keys, data, filter } = params;
        return data.filter((d) => {
            const a = memory_orm_util_1.memoryOrmUtil.simplifyObject((0, lodash_get_1.default)(d, keys.join('.')));
            const b = memory_orm_util_1.memoryOrmUtil.simplifyObject(filter);
            return a <= b;
        });
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
            throw Error(`Operation [${key}] not allowed in GREATER_THEN operation`);
    }
}
exports.MemoryLteStrategy = MemoryLteStrategy;
//# sourceMappingURL=memory-lte-strategy.js.map