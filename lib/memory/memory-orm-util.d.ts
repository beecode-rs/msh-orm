import { OrmFilterOption } from '../dal/filter';
export declare const memoryOrmUtil: {
    uniqueArray: <Entity>(arrays: Entity[][]) => Entity[];
    notInArrays: <Entity_1>(originalArray: Entity_1[], notInArrays: Entity_1[][]) => Entity_1[];
    valueIsObject: (value: any) => boolean;
    valueIsArray: (value: any) => boolean;
    valueIsDate: (value: any) => boolean;
    simplifyObject: (value: any) => any;
    /**
     * is object but not array or date
     * @param {OrmFilterOption} filter
     * @returns {boolean}
     */
    isFilterOptionAnyObject: (filter: OrmFilterOption) => boolean;
};
//# sourceMappingURL=memory-orm-util.d.ts.map