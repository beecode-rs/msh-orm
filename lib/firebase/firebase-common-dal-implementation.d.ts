import { CommonDalImplementable, EntityType, OrmFindManyOptions, OrmFindOneByIdOptions, OrmFindOneOptions } from '../dal/common-dal-implementable';
import { CollectionReference, DocumentData, QuerySnapshot } from 'firebase/firestore';
export declare abstract class FirebaseCommonDalImplementation<Entity extends EntityType> implements CommonDalImplementable<Entity> {
    protected readonly _entityName: string;
    protected readonly _repoFn: (entityName: string) => CollectionReference;
    get EntityName(): string;
    protected get _Repo(): CollectionReference;
    protected _snapshotToArray(snapshot: QuerySnapshot): DocumentData[];
    protected constructor(params: {
        entityName: string;
        repoFn: (entityName: string) => CollectionReference;
    });
    editBulk(_entities: Partial<Entity>[]): Promise<Entity[]>;
    findMany(_options?: OrmFindManyOptions): Promise<Entity[]>;
    findOne(_options?: OrmFindOneOptions): Promise<Entity>;
    findOneById(_id: string, _options?: OrmFindOneByIdOptions): Promise<Entity>;
    removeBulk(_entity: Partial<Entity>[]): Promise<void>;
    removeByIds(_ids: string[]): Promise<void>;
    addBulk(_entities: Partial<Entity>[]): Promise<Entity[]>;
}
//# sourceMappingURL=firebase-common-dal-implementation.d.ts.map