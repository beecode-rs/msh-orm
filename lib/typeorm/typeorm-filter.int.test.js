"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const filter_1 = require("../dal/filter");
const typeorm_filter_1 = require("./typeorm-filter");
const typeorm_1 = require("typeorm");
xdescribe('TypeormFilter', () => {
    describe('filter', () => {
        it('should not filter data', () => {
            const result = typeorm_filter_1.typeormFilter.filter();
            expect(result).toEqual({});
        });
        describe('equal', () => {
            it('should filter data by id', () => {
                const result = typeorm_filter_1.typeormFilter.filter({ filter: { id: 3 } });
                expect(result).toEqual({ id: 3 });
            });
            it('should filter data by test string', () => {
                const result = typeorm_filter_1.typeormFilter.filter({ filter: { test: 'test4' } });
                expect(result).toEqual({ test: 'test4' });
            });
            it('should not return any item if filtering non existing row', () => {
                const result = typeorm_filter_1.typeormFilter.filter({ filter: { test: 'does-not-exist' } });
                expect(result).toEqual({ test: 'does-not-exist' });
            });
            it('should filter nested property', () => {
                const result = typeorm_filter_1.typeormFilter.filter({ filter: { meta: { a: 1 } } });
                expect(result).toEqual({ meta: { a: 1 } });
            });
            it('should filter date property', () => {
                const result = typeorm_filter_1.typeormFilter.filter({ filter: { date: new Date('2022-01-12 12:13') } });
                expect(result).toEqual({ date: new Date('2022-01-12 12:13') });
            });
        });
        describe('in', () => {
            it('should filter data with in', () => {
                const result = typeorm_filter_1.typeormFilter.filter({ filter: { id: (0, filter_1.In)(3, 4) } });
                expect(result).toEqual({ id: (0, typeorm_1.In)([3, 4]) });
            });
            it('should filter data with in and or', () => {
                const result = typeorm_filter_1.typeormFilter.filter({ filter: (0, filter_1.Or)({ id: (0, filter_1.In)(3, 4) }, { meta: { a: (0, filter_1.In)(4, 5) } }) });
                expect(result).toEqual([{ id: (0, typeorm_1.In)([3, 4]) }, { meta: { a: (0, typeorm_1.In)([4, 5]) } }]);
            });
            it('should filter data with in nested', () => {
                const result = typeorm_filter_1.typeormFilter.filter({ filter: { meta: { a: (0, filter_1.In)(4, 5) } } });
                expect(result).toEqual({ meta: { a: (0, typeorm_1.In)([4, 5]) } });
            });
        });
        describe('not', () => {
            it('should filter data by not equal id', () => {
                const result = typeorm_filter_1.typeormFilter.filter({ filter: (0, filter_1.Not)({ id: 3 }) });
                expect(result).toEqual((0, typeorm_1.Not)({ id: 3 }));
            });
            it('should filter data by not in', () => {
                const result = typeorm_filter_1.typeormFilter.filter({ filter: (0, filter_1.Not)({ id: (0, filter_1.In)(3, 4) }) });
                expect(result).toEqual((0, typeorm_1.Not)({ id: (0, typeorm_1.In)([3, 4]) }));
            });
            it('should filter data by not equal id with or reversed', () => {
                const result = typeorm_filter_1.typeormFilter.filter({ filter: (0, filter_1.Or)((0, filter_1.Not)({ id: 3 }), (0, filter_1.Not)({ id: 4 })) });
                expect(result).toEqual([(0, typeorm_1.Not)({ id: 3 }), (0, typeorm_1.Not)({ id: 4 })]);
            });
        });
        describe('not equal', () => {
            it('should filter data by not equal id', () => {
                const result = typeorm_filter_1.typeormFilter.filter({ filter: (0, filter_1.NotEqual)({ id: 3 }) });
                expect(result).toEqual((0, typeorm_1.Not)({ id: 3 }));
            });
            it('should filter data by not equal id with or reversed', () => {
                const result = typeorm_filter_1.typeormFilter.filter({ filter: (0, filter_1.Or)((0, filter_1.NotEqual)({ id: 3 }), (0, filter_1.NotEqual)({ id: 4 })) });
                expect(result).toEqual([(0, typeorm_1.Not)({ id: 3 }), (0, typeorm_1.Not)({ id: 4 })]);
            });
        });
        describe('greater then', () => {
            it('should filter greater then id', () => {
                const result = typeorm_filter_1.typeormFilter.filter({ filter: (0, filter_1.GreaterThen)({ id: 3 }) });
                expect(result).toEqual((0, typeorm_1.MoreThan)({ id: 3 }));
            });
            it('should filter greater then meta.a', () => {
                const result = typeorm_filter_1.typeormFilter.filter({ filter: (0, filter_1.GreaterThen)({ meta: { a: 3 } }) });
                expect(result).toEqual((0, typeorm_1.MoreThan)({ meta: { a: 3 } }));
            });
        });
        describe('greater then or equal', () => {
            it('should filter greater then or equal id', () => {
                const result = typeorm_filter_1.typeormFilter.filter({ filter: (0, filter_1.GreaterThenEqual)({ id: 3 }) });
                expect(result).toEqual((0, typeorm_1.MoreThanOrEqual)({ id: 3 }));
            });
            it('should filter greater then or equal meta.a', () => {
                const result = typeorm_filter_1.typeormFilter.filter({ filter: (0, filter_1.GreaterThenEqual)({ meta: { a: 3 } }) });
                expect(result).toEqual((0, typeorm_1.MoreThanOrEqual)({ meta: { a: 3 } }));
            });
        });
        describe('Less then or equal', () => {
            it('should filter Less then id', () => {
                const result = typeorm_filter_1.typeormFilter.filter({ filter: (0, filter_1.LessThen)({ id: 3 }) });
                expect(result).toEqual((0, typeorm_1.LessThan)({ id: 3 }));
            });
            it('should filter Less then meta.a', () => {
                const result = typeorm_filter_1.typeormFilter.filter({ filter: (0, filter_1.LessThen)({ meta: { a: 3 } }) });
                expect(result).toEqual((0, typeorm_1.LessThan)({ meta: { a: 3 } }));
            });
        });
        describe('Less then or equal', () => {
            it('should filter Less then or equal id', () => {
                const result = typeorm_filter_1.typeormFilter.filter({ filter: (0, filter_1.LessThenEqual)({ id: 3 }) });
                expect(result).toEqual((0, typeorm_1.LessThanOrEqual)({ id: 3 }));
            });
            it('should filter Less then or equal meta.a', () => {
                const result = typeorm_filter_1.typeormFilter.filter({ filter: (0, filter_1.LessThenEqual)({ meta: { a: 3 } }) });
                expect(result).toEqual((0, typeorm_1.LessThanOrEqual)({ meta: { a: 3 } }));
            });
        });
        describe('or', () => {
            it('should filter data by id and or operator', () => {
                const result = typeorm_filter_1.typeormFilter.filter({ filter: (0, filter_1.Or)({ id: 3 }, { id: 4 }) });
                expect(result).toEqual([{ id: 3 }, { id: 4 }]);
            });
            it('should filter data by different props and or operator', () => {
                const result = typeorm_filter_1.typeormFilter.filter({ filter: (0, filter_1.Or)({ id: 3 }, { test: 'test6' }) });
                expect(result).toEqual([{ id: 3 }, { test: 'test6' }]);
            });
            it('should filter data by different nested props and or operator', () => {
                const result = typeorm_filter_1.typeormFilter.filter({ filter: (0, filter_1.Or)({ meta: { a: 1 } }, { meta: { b: 22 } }) });
                expect(result).toEqual([{ meta: { a: 1 } }, { meta: { b: 22 } }]);
            });
            it('should filter data by different nested props and or operator and non existing row', () => {
                const result = typeorm_filter_1.typeormFilter.filter({
                    filter: (0, filter_1.Or)({ meta: { a: 1 } }, { meta: { b: 22 } }, { meta: { P: 'does-not-exist' } }),
                });
                expect(result).toEqual([{ meta: { a: 1 } }, { meta: { b: 22 } }, { meta: { P: 'does-not-exist' } }]);
            });
        });
        describe('between', () => {
            it('should filter data between two ids', () => {
                const result = typeorm_filter_1.typeormFilter.filter({ filter: { id: (0, filter_1.Between)(1, 4) } });
                expect(result).toEqual({ id: (0, typeorm_1.Between)(1, 4) });
            });
            it('should filter data between two nested props', () => {
                const result = typeorm_filter_1.typeormFilter.filter({ filter: { meta: { a: (0, filter_1.Between)(1, 4) } } });
                expect(result).toEqual({ meta: { a: (0, typeorm_1.Between)(1, 4) } });
            });
        });
    });
});
//# sourceMappingURL=typeorm-filter.int.test.js.map