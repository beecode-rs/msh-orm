import {
  CommonDalImplementable,
  EntityType,
  OrmFindManyOptions,
  OrmFindOneByIdOptions,
  OrmFindOneOptions,
} from '../dal/common-dal-implementable'
import { CollectionReference, DocumentData, QuerySnapshot, getDocs } from 'firebase/firestore'

export abstract class FirebaseCommonDalImplementation<Entity extends EntityType> implements CommonDalImplementable<Entity> {
  protected readonly _entityName: string
  protected readonly _repoFn: (entityName: string) => CollectionReference

  public get EntityName(): string {
    return this._entityName
  }

  protected get _Repo(): CollectionReference {
    return this._repoFn(this._entityName)
  }

  protected _snapshotToArray(snapshot: QuerySnapshot): DocumentData[] {
    return snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
  }

  protected constructor(params: { entityName: string; repoFn: (entityName: string) => CollectionReference }) {
    const { entityName, repoFn } = params
    this._entityName = entityName
    this._repoFn = repoFn
  }

  public editBulk(_entities: Partial<Entity>[]): Promise<Entity[]> {
    throw new Error('not implemented')
  }

  public async findMany(_options?: OrmFindManyOptions): Promise<Entity[]> {
    const result = await getDocs(this._Repo)
    // const { where } = options ?? {}

    return this._snapshotToArray(result) as Entity[]
  }

  public findOne(_options?: OrmFindOneOptions): Promise<Entity> {
    throw new Error('not implemented')
  }

  public findOneById(_id: string, _options?: OrmFindOneByIdOptions): Promise<Entity> {
    throw new Error('not implemented')
  }

  public removeBulk(_entity: Partial<Entity>[]): Promise<void> {
    throw new Error('not implemented')
  }

  public removeByIds(_ids: string[]): Promise<void> {
    throw new Error('not implemented')
  }

  public addBulk(_entities: Partial<Entity>[]): Promise<Entity[]> {
    throw new Error('not implemented')
  }
}
