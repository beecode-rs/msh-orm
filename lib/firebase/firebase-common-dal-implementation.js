"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirebaseCommonDalImplementation = void 0;
const firestore_1 = require("firebase/firestore");
class FirebaseCommonDalImplementation {
    constructor(params) {
        const { entityName, repoFn } = params;
        this._entityName = entityName;
        this._repoFn = repoFn;
    }
    get EntityName() {
        return this._entityName;
    }
    get _Repo() {
        return this._repoFn(this._entityName);
    }
    _snapshotToArray(snapshot) {
        return snapshot.docs.map((doc) => (Object.assign(Object.assign({}, doc.data()), { id: doc.id })));
    }
    editBulk(_entities) {
        throw new Error('not implemented');
    }
    async findMany(_options) {
        const result = await (0, firestore_1.getDocs)(this._Repo);
        // const { where } = options ?? {}
        return this._snapshotToArray(result);
    }
    findOne(_options) {
        throw new Error('not implemented');
    }
    findOneById(_id, _options) {
        throw new Error('not implemented');
    }
    removeBulk(_entity) {
        throw new Error('not implemented');
    }
    removeByIds(_ids) {
        throw new Error('not implemented');
    }
    addBulk(_entities) {
        throw new Error('not implemented');
    }
}
exports.FirebaseCommonDalImplementation = FirebaseCommonDalImplementation;
//# sourceMappingURL=firebase-common-dal-implementation.js.map