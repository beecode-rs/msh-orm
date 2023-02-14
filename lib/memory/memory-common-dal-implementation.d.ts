import { CommonDalImplementable, EntityType, OrmFindManyOptions, OrmFindOneOptions } from '../dal/common-dal-implementable';
import { OrmFilterOption, OrmFilterOptions } from '../dal/filter';
import { OrmPagingOptions } from '../dal/pagination';
export declare abstract class MemoryCommonDalImplementation<Entity extends EntityType> implements CommonDalImplementable<Entity> {
    protected static _dbMemory: {
        [key: string]: any[];
    };
    protected readonly _entityName: string;
    protected readonly _fixedProperties?: OrmFilterOption;
    protected _predefinedMock?: any;
    protected readonly _dbMockFileLocation: string;
    get EntityName(): string;
    protected get _Repo(): Entity[];
    protected _generateUniqueId(): any;
    protected constructor(params: {
        entityName: string;
        fixedProperties?: OrmFilterOption;
        predefinedMock?: any;
        dbMockFileLocation: string;
    });
    protected _findWhere(params: Partial<OrmFilterOptions & OrmPagingOptions>): Entity[];
    protected _findOneWhere(entity: Partial<Entity>): {
        index: number;
        entity: Entity;
    };
    findOne(params: OrmFindOneOptions): Promise<Entity>;
    findOneById(id: string): Promise<Entity>;
    findMany(params?: OrmFindManyOptions): Promise<Entity[]>;
    addBulk(entities: Partial<Entity>[]): Promise<Entity[]>;
    editBulk(entities: Partial<Entity>[]): Promise<Entity[]>;
    protected _edit(entity: Partial<Entity>): Entity;
    removeBulk(entities: Entity[]): Promise<void>;
    protected _removeEntity(entity: Partial<Entity>): void;
    removeByIds(ids: string[]): Promise<void>;
}
//# sourceMappingURL=memory-common-dal-implementation.d.ts.map