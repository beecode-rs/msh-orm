import { OrmFilterOption } from '../dal/filter';
export declare const typeormOrmUtil: {
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
//# sourceMappingURL=typeorm-orm-util.d.ts.map