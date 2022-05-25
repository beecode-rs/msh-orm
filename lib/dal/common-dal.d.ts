import { CommonDalImplementable, EntityType, OrmFindManyOptions, OrmFindOneByIdOptions, OrmFindOneOptions } from './common-dal-implementable';
export declare abstract class CommonDal<Entity extends EntityType, Model> {
    protected _dal: CommonDalImplementable<Entity>;
    protected abstract _entityToModels(...entities: Entity[]): Model[];
    protected abstract _modelToEntities(...models: Partial<Model>[]): Partial<Entity>[];
    protected constructor(dal: CommonDalImplementable<Entity>);
    findOne(params?: OrmFindOneOptions): Promise<Model>;
    findOneById(id: string, options?: OrmFindOneByIdOptions): Promise<Model>;
    findMany(options?: OrmFindManyOptions): Promise<Model[]>;
    add(model: Partial<Model>): Promise<Model>;
    addBulk(models: Partial<Model>[]): Promise<Model[]>;
    edit(model: Partial<Model>): Promise<Model>;
    editBulk(models: Partial<Model>[]): Promise<Model[]>;
    remove(model: Partial<Model>): Promise<void>;
    removeBulk(models: Partial<Model>[]): Promise<void>;
    removeById(id: string): Promise<void>;
    removeByIds(ids: string[]): Promise<void>;
}
//# sourceMappingURL=common-dal.d.ts.map