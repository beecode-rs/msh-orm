import { EntityType } from '../dal/common-dal-implementable';
import { Pagination } from '../dal/pagination';
export declare const memoryPagination: {
    paginate: <Entity extends EntityType<any>>(data: Entity[], pagination?: Pagination | undefined) => Entity[];
};
//# sourceMappingURL=memory-pagination.d.ts.map