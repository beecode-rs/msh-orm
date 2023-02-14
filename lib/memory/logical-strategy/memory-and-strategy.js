"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryAndStrategy = void 0;
const filter_1 = require("../../dal/filter");
const memory_comparison_service_1 = require("../comparison-strategy/memory-comparison-service");
const memory_orm_util_1 = require("../memory-orm-util");
const memory_logical_service_1 = require("./memory-logical-service");
const object_util_1 = require("@beecode/msh-node-util/lib/object-util");
class MemoryAndStrategy {
    constructor(params) {
        const { filter, parentKeys = [], comparisonStrategy } = params;
        this._filter = filter;
        this._parentKeys = parentKeys;
        this._comparisonStrategy = comparisonStrategy;
    }
    /**
     * Filter data by each key, every next key gets filtered data from previus key
     * @returns {Entity[]}
     * @param params
     */
    filter(params) {
        const { data, keys = [] } = params;
        return Object.entries(this._filter).reduce((filteredResult, [keyOperation, valFilter]) => {
            return this._filterIndividualStatement({ keyOperation, valFilter, data: filteredResult, keys });
        }, object_util_1.objectUtil.deepClone(data));
    }
    _filterIndividualStatement(params) {
        const { keyOperation, valFilter, data, keys } = params;
        this._comparisonStrategy.isOperationAllowed(keyOperation);
        const comparisonStrategy = memory_comparison_service_1.memoryComparisonService.getComparisonStrategyFromKey({
            key: keyOperation,
        });
        const newComparisonStrategy = comparisonStrategy !== null && comparisonStrategy !== void 0 ? comparisonStrategy : this._comparisonStrategy;
        const logicStrategy = memory_logical_service_1.memoryLogicalService.getLogicalStrategyFromKey({
            filter: valFilter,
            parentKeys: this._parentKeys,
            key: keyOperation,
            comparisonStrategy: newComparisonStrategy,
        });
        if (logicStrategy)
            return logicStrategy.filter({ data });
        const compareKeys = [...this._parentKeys, ...keys];
        if (!filter_1.ORM_FILTER_OPERATIONS.map((a) => `${a}`).includes(keyOperation))
            compareKeys.push(keyOperation);
        if (memory_orm_util_1.memoryOrmUtil.isFilterOptionAnyObject(valFilter)) {
            return new MemoryAndStrategy({
                filter: valFilter,
                comparisonStrategy: newComparisonStrategy,
                parentKeys: compareKeys,
            }).filter({
                data,
            });
        }
        return newComparisonStrategy.filter({ data, keys: compareKeys, filter: valFilter });
    }
}
exports.MemoryAndStrategy = MemoryAndStrategy;
//# sourceMappingURL=memory-and-strategy.js.map