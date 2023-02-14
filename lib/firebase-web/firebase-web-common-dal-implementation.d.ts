import { CommonDalImplementable, EntityType, OrmFindManyOptions, OrmFindOneByIdOptions, OrmFindOneOptions } from '../dal/common-dal-implementable';
import { CollectionReference, DocumentData, Firestore, QuerySnapshot } from 'firebase/firestore';
export declare abstract class FirebaseWebCommonDalImplementation<Entity extends EntityType> implements CommonDalImplementable<Entity> {
    protected readonly _entityName: string;
    protected readonly _db: Firestore;
    protected constructor(params: {
        db: Firestore;
        entityName: string;
    });
    get EntityName(): string;
    protected get _Repo(): CollectionReference;
    protected _snapshotToArray(snapshot: QuerySnapshot): DocumentData[];
    editBulk(_entities: Partial<Entity>[]): Promise<Entity[]>;
    findMany(_options?: OrmFindManyOptions): Promise<Entity[]>;
    findOne(_options?: OrmFindOneOptions): Promise<Entity>;
    findOneById(_id: string, _options?: OrmFindOneByIdOptions): Promise<Entity>;
    removeBulk(_entity: Partial<Entity>[]): Promise<void>;
    removeByIds(_ids: string[]): Promise<void>;
    addBulk(_entities: Partial<Entity>[]): Promise<Entity[]>;
}
//# sourceMappingURL=firebase-web-common-dal-implementation.d.ts.map