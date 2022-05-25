import { OrmFilterOptions } from './filter';
import { OrmPagingOptions } from './pagination';
import { OrmRelationsOptions } from './relations';
import { OrmSortOptions } from './sort';
export declare type EntityType<ID = any> = {
    id: ID;
    [key: string]: any;
};
export declare type StringKeyObject<T = any> = {
    [k: string]: T;
};
export declare type OrmFindOneOptions = Partial<OrmRelationsOptions> & OrmFilterOptions;
export declare type OrmFindOneByIdOptions = Partial<OrmRelationsOptions>;
export declare type OrmFindManyOptions = Partial<OrmFilterOptions & OrmSortOptions & OrmPagingOptions & OrmRelationsOptions>;
export interface CommonDalImplementable<Entity extends EntityType> {
    findOne(options?: OrmFindOneOptions): Promise<Entity>;
    findOneById(id: string, options?: OrmFindOneByIdOptions): Promise<Entity>;
    findMany(options?: OrmFindManyOptions): Promise<Entity[]>;
    addBulk(entities: Partial<Entity>[]): Promise<Entity[]>;
    editBulk(entities: Partial<Entity>[]): Promise<Entity[]>;
    removeBulk(entity: Partial<Entity>[]): Promise<void>;
    removeByIds(ids: string[]): Promise<void>;
}
//# sourceMappingURL=common-dal-implementable.d.ts.map