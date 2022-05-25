"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonDal = void 0;
class CommonDal {
    constructor(dal) {
        this._dal = dal;
    }
    async findOne(params) {
        const result = await this._dal.findOne(params);
        return this._entityToModels(result)[0];
    }
    async findOneById(id, options) {
        const result = await this._dal.findOneById(id, options);
        return this._entityToModels(result)[0];
    }
    async findMany(options) {
        const results = await this._dal.findMany(options);
        return this._entityToModels(...results);
    }
    async add(model) {
        const entities = this._modelToEntities(model);
        const result = (await this._dal.addBulk(entities))[0];
        return this._entityToModels(result)[0];
    }
    async addBulk(models) {
        const entities = this._modelToEntities(...models);
        const results = await this._dal.addBulk(entities);
        return this._entityToModels(...results);
    }
    async edit(model) {
        const entities = this._modelToEntities(model);
        const result = (await this._dal.editBulk(entities))[0];
        return this._entityToModels(result)[0];
    }
    async editBulk(models) {
        const entities = this._modelToEntities(...models);
        const results = await this._dal.editBulk(entities);
        return this._entityToModels(...results);
    }
    async remove(model) {
        const entities = this._modelToEntities(model);
        return this._dal.removeBulk(entities);
    }
    async removeBulk(models) {
        const entities = this._modelToEntities(...models);
        return this._dal.removeBulk(entities);
    }
    async removeById(id) {
        return this._dal.removeByIds([id]);
    }
    async removeByIds(ids) {
        return this._dal.removeByIds(ids);
    }
}
exports.CommonDal = CommonDal;
//# sourceMappingURL=common-dal.js.map