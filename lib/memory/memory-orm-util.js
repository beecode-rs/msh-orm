"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memoryOrmUtil = void 0;
const object_util_1 = require("@beecode/msh-node-util/lib/object-util");
const _self = {
    uniqueArray: (arrays) => {
        return Object.values(arrays.reduce((result, arr) => {
            return arr.reduce((acc, cur) => {
                return Object.assign(Object.assign({}, acc), { [JSON.stringify(cur)]: cur });
            }, result);
        }, {}));
    },
    notInArrays: (originalArray, notInArrays) => {
        return originalArray.filter((o) => {
            return !notInArrays.some((arr) => {
                return arr.some((a) => object_util_1.objectUtil.deepEqual(a, o));
            });
        });
    },
    valueIsObject: (value) => {
        return typeof value === 'object';
    },
    valueIsArray: (value) => {
        return Array.isArray(value);
    },
    valueIsDate: (value) => {
        return value instanceof Date;
    },
    simplifyObject: (value) => {
        if (_self.valueIsDate(value))
            return value.getTime();
        if (_self.valueIsObject(value))
            return JSON.stringify(value);
        return value;
    },
    /**
     * is object but not array or date
     * @param {OrmFilterOption} filter
     * @returns {boolean}
     */
    isFilterOptionAnyObject: (filter) => {
        return _self.valueIsObject(filter) && !_self.valueIsArray(filter) && !_self.valueIsDate(filter);
    },
};
exports.memoryOrmUtil = _self;
//# sourceMappingURL=memory-orm-util.js.map