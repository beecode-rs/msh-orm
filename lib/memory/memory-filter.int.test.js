"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const filter_1 = require("../dal/filter");
const memory_filter_1 = require("./memory-filter");
xdescribe('MemoryFilter', () => {
    const data = [
        { id: 1, test: 'test1', date: new Date('2022-01-12 12:13'), meta: { a: 1, b: 21 } },
        { id: 2, test: 'test2', date: new Date('2022-02-12 12:13'), meta: { a: 2, b: 22 } },
        { id: 3, test: 'test3', date: new Date('2022-03-12 12:13'), meta: { a: 3, b: 23 } },
        { id: 4, test: 'test4', date: new Date('2022-04-12 12:13'), meta: { a: 4, b: 24 } },
        { id: 5, test: 'test5', date: new Date('2022-05-12 12:13'), meta: { a: 5, b: 25, c: 1 } },
        { id: 6, test: 'test6', date: new Date('2022-06-12 12:13'), meta: { a: 6, b: 26 } },
    ];
    describe('filter', () => {
        it('should not filter data', () => {
            const result = memory_filter_1.memoryFilter.filter({ data });
            expect(result).toEqual(data);
        });
        describe('equal', () => {
            it('should filter data by id', () => {
                const result = memory_filter_1.memoryFilter.filter({ data, filter: { id: 3 } });
                expect(result).toEqual([data[2]]);
            });
            it('should filter data by test string', () => {
                const result = memory_filter_1.memoryFilter.filter({ data, filter: { test: 'test4' } });
                expect(result).toEqual([data[3]]);
            });
            it('should not return any item if filtering non existing row', () => {
                const result = memory_filter_1.memoryFilter.filter({ data, filter: { test: 'does-not-exist' } });
                expect(result).toEqual([]);
            });
            it('should filter nested property', () => {
                const result = memory_filter_1.memoryFilter.filter({ data, filter: { meta: { a: 1 } } });
                expect(result).toEqual([data[0]]);
            });
            it('should filter date property', () => {
                const result = memory_filter_1.memoryFilter.filter({ data, filter: { date: new Date('2022-01-12 12:13') } });
                expect(result).toEqual([data[0]]);
            });
        });
        describe('in', () => {
            it('should filter data with in', () => {
                const result = memory_filter_1.memoryFilter.filter({ data, filter: { id: (0, filter_1.In)(3, 4) } });
                expect(result).toEqual([data[2], data[3]]);
            });
            it('should filter data with in and or', () => {
                const result = memory_filter_1.memoryFilter.filter({ data, filter: (0, filter_1.Or)({ id: (0, filter_1.In)(3, 4) }, { meta: { a: (0, filter_1.In)(4, 5) } }) });
                expect(result).toEqual([data[2], data[3], data[4]]);
            });
            it('should filter data with in nested', () => {
                const result = memory_filter_1.memoryFilter.filter({ data, filter: { meta: { a: (0, filter_1.In)(4, 5) } } });
                expect(result).toEqual([data[3], data[4]]);
            });
        });
        describe('not', () => {
            it('should filter data by not equal id', () => {
                const result = memory_filter_1.memoryFilter.filter({ data, filter: (0, filter_1.Not)({ id: 3 }) });
                expect(result).toEqual([data[0], data[1], data[3], data[4], data[5]]);
            });
            it('should filter data by not in', () => {
                const result = memory_filter_1.memoryFilter.filter({ data, filter: (0, filter_1.Not)({ id: (0, filter_1.In)(3, 4) }) });
                expect(result).toEqual([data[0], data[1], data[4], data[5]]);
            });
            it('should filter data by not equal id with or reversed', () => {
                const result = memory_filter_1.memoryFilter.filter({ data, filter: (0, filter_1.Or)((0, filter_1.Not)({ id: 3 }), (0, filter_1.Not)({ id: 4 })) });
                expect(result).toEqual([data[0], data[1], data[3], data[4], data[5], data[2]]); // TODO check if we can keep the order here
            });
        });
        describe('not equal', () => {
            it('should filter data by not equal id', () => {
                const result = memory_filter_1.memoryFilter.filter({ data, filter: (0, filter_1.NotEqual)({ id: 3 }) });
                expect(result).toEqual([data[0], data[1], data[3], data[4], data[5]]);
            });
            it('should filter data by not equal id with or reversed', () => {
                const result = memory_filter_1.memoryFilter.filter({ data, filter: (0, filter_1.Or)((0, filter_1.NotEqual)({ id: 3 }), (0, filter_1.NotEqual)({ id: 4 })) });
                expect(result).toEqual([data[0], data[1], data[3], data[4], data[5], data[2]]); // TODO check if we can keep the order here
            });
        });
        describe('greater then', () => {
            it('should filter greater then id', () => {
                const result = memory_filter_1.memoryFilter.filter({ data, filter: (0, filter_1.GreaterThen)({ id: 3 }) });
                expect(result).toEqual([data[3], data[4], data[5]]);
            });
            it('should filter greater then meta.a', () => {
                const result = memory_filter_1.memoryFilter.filter({ data, filter: (0, filter_1.GreaterThen)({ meta: { a: 3 } }) });
                expect(result).toEqual([data[3], data[4], data[5]]);
            });
        });
        describe('greater then or equal', () => {
            it('should filter greater then or equal id', () => {
                const result = memory_filter_1.memoryFilter.filter({ data, filter: (0, filter_1.GreaterThenEqual)({ id: 3 }) });
                expect(result).toEqual([data[2], data[3], data[4], data[5]]);
            });
            it('should filter greater then or equal meta.a', () => {
                const result = memory_filter_1.memoryFilter.filter({ data, filter: (0, filter_1.GreaterThenEqual)({ meta: { a: 3 } }) });
                expect(result).toEqual([data[2], data[3], data[4], data[5]]);
            });
        });
        describe('Less then or equal', () => {
            it('should filter Less then id', () => {
                const result = memory_filter_1.memoryFilter.filter({ data, filter: (0, filter_1.LessThen)({ id: 3 }) });
                expect(result).toEqual([data[0], data[1]]);
            });
            it('should filter Less then meta.a', () => {
                const result = memory_filter_1.memoryFilter.filter({ data, filter: (0, filter_1.LessThen)({ meta: { a: 3 } }) });
                expect(result).toEqual([data[0], data[1]]);
            });
        });
        describe('Less then or equal', () => {
            it('should filter Less then or equal id', () => {
                const result = memory_filter_1.memoryFilter.filter({ data, filter: (0, filter_1.LessThenEqual)({ id: 3 }) });
                expect(result).toEqual([data[0], data[1], data[2]]);
            });
            it('should filter Less then or equal meta.a', () => {
                const result = memory_filter_1.memoryFilter.filter({ data, filter: (0, filter_1.LessThenEqual)({ meta: { a: 3 } }) });
                expect(result).toEqual([data[0], data[1], data[2]]);
            });
        });
        describe('or', () => {
            it('should filter data by id and or operator', () => {
                const result = memory_filter_1.memoryFilter.filter({ data, filter: (0, filter_1.Or)({ id: 3 }, { id: 4 }) });
                expect(result).toEqual([data[2], data[3]]);
            });
            it('should filter data by different props and or operator', () => {
                const result = memory_filter_1.memoryFilter.filter({ data, filter: (0, filter_1.Or)({ id: 3 }, { test: 'test6' }) });
                expect(result).toEqual([data[2], data[5]]);
            });
            it('should filter data by different nested props and or operator', () => {
                const result = memory_filter_1.memoryFilter.filter({ data, filter: (0, filter_1.Or)({ meta: { a: 1 } }, { meta: { b: 22 } }) });
                expect(result).toEqual([data[0], data[1]]);
            });
            it('should filter data by different nested props and or operator and non existing row', () => {
                const result = memory_filter_1.memoryFilter.filter({
                    data,
                    filter: (0, filter_1.Or)({ meta: { a: 1 } }, { meta: { b: 22 } }, { meta: { P: 'does-not-exist' } }),
                });
                expect(result).toEqual([data[0], data[1]]);
            });
        });
        describe('between', () => {
            it('should filter data between two ids (includeBoth)', () => {
                const result = memory_filter_1.memoryFilter.filter({ data, filter: { id: (0, filter_1.Between)(1, 4) } });
                expect(result).toEqual([data[0], data[1], data[2], data[3]]);
            });
            it('should filter data between two nested props (includeBoth)', () => {
                const result = memory_filter_1.memoryFilter.filter({
                    data,
                    filter: { meta: { a: (0, filter_1.Between)(1, 4) } },
                });
                expect(result).toEqual([data[0], data[1], data[2], data[3]]);
            });
        });
    });
});
//# sourceMappingURL=memory-filter.int.test.js.map