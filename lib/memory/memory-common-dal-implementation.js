"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryCommonDalImplementation = void 0;
const msh_node_error_1 = require("@beecode/msh-node-error");
const object_util_1 = require("@beecode/msh-node-util/lib/object-util");
const string_util_1 = require("@beecode/msh-node-util/lib/string-util");
class MemoryCommonDalImplementation {
    constructor(params) {
        const { dbMockFileLocation, predefinedMock = {}, entityName, fixedProperties } = params;
        this._entityName = entityName;
        this._fixedProperties = fixedProperties;
        this._dbMockFileLocation = dbMockFileLocation;
        this._predefinedMock = predefinedMock;
    }
    get EntityName() {
        return this._entityName;
    }
    get _Repo() {
        var _a;
        if (MemoryCommonDalImplementation._dbMemory[this.EntityName])
            return MemoryCommonDalImplementation._dbMemory[this.EntityName];
        MemoryCommonDalImplementation._dbMemory[this.EntityName] =
            (_a = this._predefinedMock[this.EntityName]) !== null && _a !== void 0 ? _a : require(`${this._dbMockFileLocation}/${this.EntityName}-data.json`); // eslint-disable-line
        return MemoryCommonDalImplementation._dbMemory[this.EntityName];
    }
    _generateUniqueId() {
        return string_util_1.stringUtil.uuid();
    }
    _slicePaging(data, pagination) {
        if (!pagination)
            return data;
        const { page, pageSize } = pagination;
        return data.slice((page - 1) * pageSize, page * pageSize);
    }
    _findWhere(params) {
        const { filter, pagination } = params;
        const findObj = Object.assign(Object.assign({}, filter), this._fixedProperties);
        const result = this._Repo.filter((e) => object_util_1.objectUtil.deepEqual(object_util_1.objectUtil.pick(e, findObj), findObj));
        if (!result)
            throw msh_node_error_1.error.client.notFound(`${this.EntityName} not found`);
        return this._slicePaging(result, pagination);
    }
    _findOneWhere(entity) {
        const obj = Object.assign(Object.assign(Object.assign({}, entity), this._fixedProperties), { id: entity.id });
        const ix = this._Repo.findIndex((e) => object_util_1.objectUtil.deepEqual(object_util_1.objectUtil.pick(e, obj), obj));
        if (ix < 0)
            throw msh_node_error_1.error.server.internalServerError(`Unable to edit ${this.EntityName}`);
        return { index: ix, entity: this._Repo[ix] };
    }
    async findOne(params) {
        const { filter } = params;
        // TODO need to implement relations
        const findObj = Object.assign(Object.assign({}, filter), this._fixedProperties);
        const result = this._findWhere({ filter: findObj, pagination: { page: 1, pageSize: 1 } })[0];
        if (!result)
            throw msh_node_error_1.error.client.notFound(`${this.EntityName} not found`);
        return result;
    }
    async findOneById(id) {
        const findObj = Object.assign({ id }, this._fixedProperties);
        const result = this._findWhere({ filter: findObj, pagination: { page: 1, pageSize: 1 } })[0];
        if (!result)
            throw msh_node_error_1.error.client.notFound(`${this.EntityName} not found`);
        return result;
    }
    async findMany(params) {
        const { filter, pagination } = params !== null && params !== void 0 ? params : {};
        // TODO need to implement relations and order
        const findObj = Object.assign(Object.assign({}, filter), this._fixedProperties);
        return this._findWhere({ filter: findObj, pagination });
    }
    async addBulk(entities) {
        const cleanEntitiesWithFixedProps = entities.map((entity) => {
            return Object.assign(Object.assign(Object.assign({}, entity), this._fixedProperties), { id: this._generateUniqueId() });
        });
        this._Repo.push(...cleanEntitiesWithFixedProps);
        return cleanEntitiesWithFixedProps;
    }
    async editBulk(entities) {
        if (entities.find((entity) => !entity.id || entity.id.trim() === '')) {
            throw msh_node_error_1.error.server.internalServerError(`Id is mandatory for ${this.EntityName} for edit action`);
        }
        return entities.map((entity) => this._edit(entity));
    }
    _edit(entity) {
        const { index, entity: entityData } = this._findOneWhere(entity);
        const editedEntity = Object.assign(Object.assign(Object.assign({}, entityData), entity), this._fixedProperties);
        this._Repo[index] = editedEntity;
        return editedEntity;
    }
    async removeBulk(entities) {
        if (entities.find((entity) => !entity.id || entity.id.trim() === '')) {
            throw msh_node_error_1.error.server.internalServerError(`Id is mandatory for ${this.EntityName} for remove action`);
        }
        entities.forEach((entity) => {
            this._removeEntity(entity);
        });
    }
    _removeEntity(entity) {
        const { index } = this._findOneWhere(entity);
        this._Repo.splice(index, 1);
    }
    async removeByIds(ids) {
        const objs = ids.map((id) => (Object.assign({ id }, this._fixedProperties)));
        return this.removeBulk(objs);
    }
}
exports.MemoryCommonDalImplementation = MemoryCommonDalImplementation;
MemoryCommonDalImplementation._dbMemory = {};
//# sourceMappingURL=memory-common-dal-implementation.js.map