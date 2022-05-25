import { OrmFilterOptions } from './filter'
import { OrmPagingOptions } from './pagination'
import { OrmRelationsOptions } from './relations'
import { OrmSortOptions } from './sort'

export type EntityType<ID = any> = {
  id: ID
  [key: string]: any
}
export type StringKeyObject<T = any> = { [k: string]: T }

export type OrmFindOneOptions = Partial<OrmRelationsOptions> & OrmFilterOptions
export type OrmFindOneByIdOptions = Partial<OrmRelationsOptions>
export type OrmFindManyOptions = Partial<OrmFilterOptions & OrmSortOptions & OrmPagingOptions & OrmRelationsOptions>

export interface CommonDalImplementable<Entity extends EntityType> {
  findOne(options?: OrmFindOneOptions): Promise<Entity>
  findOneById(id: string, options?: OrmFindOneByIdOptions): Promise<Entity>
  findMany(options?: OrmFindManyOptions): Promise<Entity[]>

  addBulk(entities: Partial<Entity>[]): Promise<Entity[]>
  editBulk(entities: Partial<Entity>[]): Promise<Entity[]>
  removeBulk(entity: Partial<Entity>[]): Promise<void>
  removeByIds(ids: string[]): Promise<void>
}
