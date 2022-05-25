import { CommonDalImplementable, EntityType, OrmFindManyOptions, OrmFindOneByIdOptions, OrmFindOneOptions, StringKeyObject } from '../dal/common-dal-implementable';
import { FilterOption } from '../dal/filter';
import { Pagination } from '../dal/pagination';
import { ObjectLiteral, ObjectType, Repository } from 'typeorm';
import { FindConditions } from 'typeorm/find-options/FindConditions';
export declare enum OrderType {
    ASC = "ASC",
    DESC = "DESC"
}
export declare type OrderBy = {
    [k: string]: OrderType;
};
export declare abstract class TypeormCommonDalImplementation<Entity extends EntityType> implements CommonDalImplementable<Entity> {
    protected readonly _entity: ObjectType<Entity>;
    protected readonly _fixedProperties?: any;
    protected readonly _repoFn: (entity: ObjectType<Entity>) => Repository<Entity>;
    protected readonly _fixedRelations: string[];
    protected readonly _isIdAutogenerated: boolean;
    get EntityName(): string;
    protected get _Repo(): Repository<Entity>;
    protected constructor(params: {
        entity: ObjectType<Entity>;
        fixedProperties?: FindConditions<Entity> | ObjectLiteral;
        repoFn: (entity: ObjectType<Entity>) => Repository<Entity>;
        fixedRelations?: string[];
        isIdAutogenerated?: boolean;
    });
    protected static _orderAdapter(sortByList?: string[]): OrderBy;
    protected _filterToWhereArray(filter: FilterOption): StringKeyObject[];
    protected _paginationToWherePagination(pagination?: Pagination): {
        take: number;
        skip: number;
    } | undefined;
    findOne(params: OrmFindOneOptions): Promise<Entity>;
    findOneById(id: string, options?: OrmFindOneByIdOptions): Promise<Entity>;
    findMany(params?: OrmFindManyOptions): Promise<Entity[]>;
    addBulk(entities: Partial<Entity>[]): Promise<Entity[]>;
    editBulk(entities: Partial<Entity>[]): Promise<Entity[]>;
    removeBulk(entities: Entity[]): Promise<void>;
    removeByIds(ids: string[]): Promise<void>;
}
//# sourceMappingURL=typeorm-common-dal-implementation.d.ts.map