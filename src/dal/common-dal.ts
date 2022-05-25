import {
  CommonDalImplementable,
  EntityType,
  OrmFindManyOptions,
  OrmFindOneByIdOptions,
  OrmFindOneOptions,
} from './common-dal-implementable'

export abstract class CommonDal<Entity extends EntityType, Model> {
  protected _dal: CommonDalImplementable<Entity>

  protected abstract _entityToModels(...entities: Entity[]): Model[]
  protected abstract _modelToEntities(...models: Partial<Model>[]): Partial<Entity>[]

  protected constructor(dal: CommonDalImplementable<Entity>) {
    this._dal = dal
  }

  public async findOne(params?: OrmFindOneOptions): Promise<Model> {
    const result = await this._dal.findOne(params)
    return this._entityToModels(result)[0]
  }

  public async findOneById(id: string, options?: OrmFindOneByIdOptions): Promise<Model> {
    const result = await this._dal.findOneById(id, options)
    return this._entityToModels(result)[0]
  }

  public async findMany(options?: OrmFindManyOptions): Promise<Model[]> {
    const results = await this._dal.findMany(options)
    return this._entityToModels(...results)
  }

  public async add(model: Partial<Model>): Promise<Model> {
    const entities = this._modelToEntities(model)
    const result = (await this._dal.addBulk(entities))[0]
    return this._entityToModels(result)[0]
  }

  public async addBulk(models: Partial<Model>[]): Promise<Model[]> {
    const entities = this._modelToEntities(...models)
    const results = await this._dal.addBulk(entities)
    return this._entityToModels(...results)
  }

  public async edit(model: Partial<Model>): Promise<Model> {
    const entities = this._modelToEntities(model)
    const result = (await this._dal.editBulk(entities))[0]
    return this._entityToModels(result)[0]
  }

  public async editBulk(models: Partial<Model>[]): Promise<Model[]> {
    const entities = this._modelToEntities(...models)
    const results = await this._dal.editBulk(entities)
    return this._entityToModels(...results)
  }

  public async remove(model: Partial<Model>): Promise<void> {
    const entities = this._modelToEntities(model)
    return this._dal.removeBulk(entities)
  }
  public async removeBulk(models: Partial<Model>[]): Promise<void> {
    const entities = this._modelToEntities(...models)
    return this._dal.removeBulk(entities)
  }

  public async removeById(id: string): Promise<void> {
    return this._dal.removeByIds([id])
  }

  public async removeByIds(ids: string[]): Promise<void> {
    return this._dal.removeByIds(ids)
  }
}
