import { CommonDalImplementable, EntityType, OrmFindManyOptions, OrmFindOneOptions } from '../dal/common-dal-implementable'
import { OrmFilterOption, OrmFilterOptions } from '../dal/filter'
import { OrmPagingOptions } from '../dal/pagination'
import { memoryPagination } from './memory-pagination'
import { error } from '@beecode/msh-node-error'
import { objectUtil } from '@beecode/msh-node-util/lib/object-util'
import { stringUtil } from '@beecode/msh-node-util/lib/string-util'

export abstract class MemoryCommonDalImplementation<Entity extends EntityType> implements CommonDalImplementable<Entity> {
  protected static _dbMemory: { [key: string]: any[] } = {}

  protected readonly _entityName: string
  protected readonly _fixedProperties?: OrmFilterOption
  protected _predefinedMock?: any
  protected readonly _dbMockFileLocation

  public get EntityName(): string {
    return this._entityName
  }

  protected get _Repo(): Entity[] {
    if (MemoryCommonDalImplementation._dbMemory[this.EntityName]) return MemoryCommonDalImplementation._dbMemory[this.EntityName]
    MemoryCommonDalImplementation._dbMemory[this.EntityName] =
      this._predefinedMock[this.EntityName] ?? (require(`${this._dbMockFileLocation}/${this.EntityName}-data.json`) as Entity[]) // eslint-disable-line
    return MemoryCommonDalImplementation._dbMemory[this.EntityName]
  }

  protected _generateUniqueId(): any {
    return stringUtil.uuid()
  }

  protected constructor(params: {
    entityName: string
    fixedProperties?: OrmFilterOption
    predefinedMock?: any
    dbMockFileLocation: string
  }) {
    const { dbMockFileLocation, predefinedMock = {}, entityName, fixedProperties } = params
    this._entityName = entityName
    this._fixedProperties = fixedProperties
    this._dbMockFileLocation = dbMockFileLocation
    this._predefinedMock = predefinedMock
  }

  protected _findWhere(params: Partial<OrmFilterOptions & OrmPagingOptions>): Entity[] {
    const { filter, pagination } = params
    const findObj = { ...filter, ...this._fixedProperties }
    const result = this._Repo.filter((e: any) => objectUtil.deepEqual(objectUtil.pick(e, findObj), findObj))
    if (!result) throw error.client.notFound(`${this.EntityName} not found`)
    return memoryPagination.paginate<Entity>(result, pagination)
  }

  protected _findOneWhere(entity: Partial<Entity>): { index: number; entity: Entity } {
    const obj = { ...entity, ...this._fixedProperties, id: entity.id }
    const ix = this._Repo.findIndex((e: any) => objectUtil.deepEqual(objectUtil.pick(e, obj), obj))
    if (ix < 0) throw error.server.internalServerError(`Unable to edit ${this.EntityName}`)
    return { index: ix, entity: this._Repo[ix] }
  }

  public async findOne(params: OrmFindOneOptions): Promise<Entity> {
    const { filter } = params
    // TODO need to implement relations
    const findObj = { ...filter, ...this._fixedProperties }
    const result = this._findWhere({ filter: findObj, pagination: { page: 1, pageSize: 1 } })[0]
    if (!result) throw error.client.notFound(`${this.EntityName} not found`)
    return result
  }

  public async findOneById(id: string): Promise<Entity> {
    const findObj = { id, ...this._fixedProperties }
    const result = this._findWhere({ filter: findObj, pagination: { page: 1, pageSize: 1 } })[0]
    if (!result) throw error.client.notFound(`${this.EntityName} not found`)
    return result
  }

  public async findMany(params?: OrmFindManyOptions): Promise<Entity[]> {
    const { filter, pagination } = params ?? {}
    // TODO need to implement relations and order
    const findObj = { ...filter, ...this._fixedProperties }
    return this._findWhere({ filter: findObj, pagination })
  }

  public async addBulk(entities: Partial<Entity>[]): Promise<Entity[]> {
    const cleanEntitiesWithFixedProps = entities.map((entity) => {
      return { ...entity, ...this._fixedProperties, id: this._generateUniqueId() }
    }) as Entity[]

    this._Repo.push(...cleanEntitiesWithFixedProps)
    return cleanEntitiesWithFixedProps
  }

  public async editBulk(entities: Partial<Entity>[]): Promise<Entity[]> {
    if (entities.find((entity) => !entity.id || entity.id.trim() === '')) {
      throw error.server.internalServerError(`Id is mandatory for ${this.EntityName} for edit action`)
    }
    return entities.map((entity) => this._edit(entity))
  }

  protected _edit(entity: Partial<Entity>): Entity {
    const { index, entity: entityData } = this._findOneWhere(entity)
    const editedEntity = { ...entityData, ...entity, ...this._fixedProperties }
    this._Repo[index] = editedEntity
    return editedEntity
  }

  public async removeBulk(entities: Entity[]): Promise<void> {
    if (entities.find((entity) => !entity.id || entity.id.trim() === '')) {
      throw error.server.internalServerError(`Id is mandatory for ${this.EntityName} for remove action`)
    }
    entities.forEach((entity) => {
      this._removeEntity(entity)
    })
  }

  protected _removeEntity(entity: Partial<Entity>): void {
    const { index } = this._findOneWhere(entity)
    this._Repo.splice(index, 1)
  }

  public async removeByIds(ids: string[]): Promise<void> {
    const objs = ids.map((id) => ({ id, ...this._fixedProperties })) as Entity[]
    return this.removeBulk(objs)
  }
}
