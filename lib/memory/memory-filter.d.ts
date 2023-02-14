import { EntityType } from '../dal/common-dal-implementable';
import { OrmFilterOption } from '../dal/filter';
export declare const memoryFilter: {
    filter: <Entity extends EntityType<any>>(params: {
        data: Entity[];
        filter?: OrmFilterOption | undefined;
    }) => Entity[];
};
//# sourceMappingURL=memory-filter.d.ts.map