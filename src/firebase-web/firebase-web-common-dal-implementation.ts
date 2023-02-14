import {
  CommonDalImplementable,
  EntityType,
  OrmFindManyOptions,
  OrmFindOneByIdOptions,
  OrmFindOneOptions,
} from '../dal/common-dal-implementable'
import { CollectionReference, DocumentData, Firestore, QuerySnapshot, collection, getDocs } from 'firebase/firestore'

export abstract class FirebaseWebCommonDalImplementation<Entity extends EntityType> implements CommonDalImplementable<Entity> {
  protected readonly _entityName: string
  protected readonly _db: Firestore

  protected constructor(params: { db: Firestore; entityName: string }) {
    const { entityName, db } = params
    this._entityName = entityName
    this._db = db
  }

  public get EntityName(): string {
    return this._entityName
  }

  protected get _Repo(): CollectionReference {
    return collection(this._db, this.EntityName)
  }

  protected _snapshotToArray(snapshot: QuerySnapshot): DocumentData[] {
    return snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
  }

  public editBulk(_entities: Partial<Entity>[]): Promise<Entity[]> {
    throw new Error('not implemented')
  }

  public async findMany(_options?: OrmFindManyOptions): Promise<Entity[]> {
    const col = this._Repo
    const result = await getDocs(col)
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
