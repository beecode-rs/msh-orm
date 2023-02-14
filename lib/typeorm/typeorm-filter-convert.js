"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeormFilterConvert = void 0;
const convert_service_1 = require("./convert-strategy/convert-service");
const typeorm_orm_util_1 = require("./typeorm-orm-util");
const _self = {
    convert: (params) => {
        const { key, filter } = params;
        if (!filter)
            return;
        const arrayConverted = _self._convertChildrenIfArray(filter);
        const objectConverted = _self._convertChildrenIfObject(arrayConverted);
        if (!key)
            return objectConverted;
        const strategy = convert_service_1.convertService.getConvertStrategyFromKey({ key });
        if (strategy)
            return strategy.convert({ filter: objectConverted });
        return { [key]: objectConverted };
    },
    _convertChildrenIfArray: (filter) => {
        if (!typeorm_orm_util_1.typeormOrmUtil.valueIsArray(filter))
            return filter;
        return filter.map((f) => _self.convert({ filter: f }));
    },
    _convertChildrenIfObject: (filter) => {
        if (!typeorm_orm_util_1.typeormOrmUtil.isFilterOptionAnyObject(filter))
            return filter;
        const convertedEntries = Object.entries(filter).map(([k, v]) => _self.convert({ key: k, filter: v }));
        if (convertedEntries.length === 1)
            return convertedEntries[0];
        return convertedEntries.reduce((agg, cur) => (Object.assign(Object.assign({}, agg), cur)), {});
    },
};
exports.typeormFilterConvert = _self;
//# sourceMappingURL=typeorm-filter-convert.js.map