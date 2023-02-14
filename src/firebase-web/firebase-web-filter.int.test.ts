// import { Between, GreaterThen, GreaterThenEqual, In, LessThen, LessThenEqual, Not, NotEqual, Or } from '../dal/filter'
import { firebaseWebFilter } from './firebase-web-filter'
import { where } from 'firebase/firestore'

jest.mock('firebase/firestore')

describe('FirebaseFilter', () => {
  describe('filter', () => {
    it('should not filter data', () => {
      const result = firebaseWebFilter.filter()
      expect(result).toBeUndefined()
    })

    describe('equal', () => {
      it('should filter data by id', () => {
        const result = firebaseWebFilter.filter({ filter: { id: 3 } })
        expect(result).toEqual(where('id', '==', 3))
      })
      //   it('should filter data by test string', () => {
      //     const result = firebaseWebFilter.filter({ filter: { test: 'test4' } })
      //     expect(result).toEqual({ test: 'test4' })
      //   })
      //   it('should not return any item if filtering non existing row', () => {
      //     const result = firebaseWebFilter.filter({ filter: { test: 'does-not-exist' } })
      //     expect(result).toEqual({ test: 'does-not-exist' })
      //   })
      //   it('should filter nested property', () => {
      //     const result = firebaseWebFilter.filter({ filter: { meta: { a: 1 } } })
      //     expect(result).toEqual({ meta: { a: 1 } })
      //   })
      //
      //   it('should filter date property', () => {
      //     const result = firebaseWebFilter.filter({ filter: { date: new Date('2022-01-12 12:13') } })
      //     expect(result).toEqual({ date: new Date('2022-01-12 12:13') })
      //   })
    })

    // describe('in', () => {
    //   it('should filter data with in', () => {
    //     const result = firebaseWebFilter.filter({ filter: { id: In(3, 4) } })
    //     expect(result).toEqual({ id: TIn([3, 4]) })
    //   })
    //   it('should filter data with in and or', () => {
    //     const result = firebaseWebFilter.filter({ filter: Or({ id: In(3, 4) }, { meta: { a: In(4, 5) } }) })
    //     expect(result).toEqual([{ id: TIn([3, 4]) }, { meta: { a: TIn([4, 5]) } }])
    //   })
    //   it('should filter data with in nested', () => {
    //     const result = firebaseWebFilter.filter({ filter: { meta: { a: In(4, 5) } } })
    //     expect(result).toEqual({ meta: { a: TIn([4, 5]) } })
    //   })
    // })
    //
    // describe('not', () => {
    //   it('should filter data by not equal id', () => {
    //     const result = firebaseWebFilter.filter({ filter: Not({ id: 3 }) })
    //     expect(result).toEqual(TNot({ id: 3 }))
    //   })
    //   it('should filter data by not in', () => {
    //     const result = firebaseWebFilter.filter({ filter: Not({ id: In(3, 4) }) })
    //     expect(result).toEqual(TNot({ id: TIn([3, 4]) }))
    //   })
    //   it('should filter data by not equal id with or reversed', () => {
    //     const result = firebaseWebFilter.filter({ filter: Or(Not({ id: 3 }), Not({ id: 4 })) })
    //     expect(result).toEqual([TNot({ id: 3 }), TNot({ id: 4 })])
    //   })
    // })
    //
    // describe('not equal', () => {
    //   it('should filter data by not equal id', () => {
    //     const result = firebaseWebFilter.filter({ filter: NotEqual({ id: 3 }) })
    //     expect(result).toEqual(TNot({ id: 3 }))
    //   })
    //   it('should filter data by not equal id with or reversed', () => {
    //     const result = firebaseWebFilter.filter({ filter: Or(NotEqual({ id: 3 }), NotEqual({ id: 4 })) })
    //     expect(result).toEqual([TNot({ id: 3 }), TNot({ id: 4 })])
    //   })
    // })
    // describe('greater then', () => {
    //   it('should filter greater then id', () => {
    //     const result = firebaseWebFilter.filter({ filter: GreaterThen({ id: 3 }) })
    //     expect(result).toEqual(TMoreThan({ id: 3 }))
    //   })
    //   it('should filter greater then meta.a', () => {
    //     const result = firebaseWebFilter.filter({ filter: GreaterThen({ meta: { a: 3 } }) })
    //     expect(result).toEqual(TMoreThan({ meta: { a: 3 } }))
    //   })
    // })
    //
    // describe('greater then or equal', () => {
    //   it('should filter greater then or equal id', () => {
    //     const result = firebaseWebFilter.filter({ filter: GreaterThenEqual({ id: 3 }) })
    //     expect(result).toEqual(TMoreThanOrEqual({ id: 3 }))
    //   })
    //   it('should filter greater then or equal meta.a', () => {
    //     const result = firebaseWebFilter.filter({ filter: GreaterThenEqual({ meta: { a: 3 } }) })
    //     expect(result).toEqual(TMoreThanOrEqual({ meta: { a: 3 } }))
    //   })
    // })
    //
    // describe('Less then or equal', () => {
    //   it('should filter Less then id', () => {
    //     const result = firebaseWebFilter.filter({ filter: LessThen({ id: 3 }) })
    //     expect(result).toEqual(TLessThan({ id: 3 }))
    //   })
    //   it('should filter Less then meta.a', () => {
    //     const result = firebaseWebFilter.filter({ filter: LessThen({ meta: { a: 3 } }) })
    //     expect(result).toEqual(TLessThan({ meta: { a: 3 } }))
    //   })
    // })
    //
    // describe('Less then or equal', () => {
    //   it('should filter Less then or equal id', () => {
    //     const result = firebaseWebFilter.filter({ filter: LessThenEqual({ id: 3 }) })
    //     expect(result).toEqual(TLessThanOrEqual({ id: 3 }))
    //   })
    //   it('should filter Less then or equal meta.a', () => {
    //     const result = firebaseWebFilter.filter({ filter: LessThenEqual({ meta: { a: 3 } }) })
    //     expect(result).toEqual(TLessThanOrEqual({ meta: { a: 3 } }))
    //   })
    // })
    //
    // describe('or', () => {
    //   it('should filter data by id and or operator', () => {
    //     const result = firebaseWebFilter.filter({ filter: Or({ id: 3 }, { id: 4 }) })
    //     expect(result).toEqual([{ id: 3 }, { id: 4 }])
    //   })
    //
    //   it('should filter data by different props and or operator', () => {
    //     const result = firebaseWebFilter.filter({ filter: Or({ id: 3 }, { test: 'test6' }) })
    //     expect(result).toEqual([{ id: 3 }, { test: 'test6' }])
    //   })
    //
    //   it('should filter data by different nested props and or operator', () => {
    //     const result = firebaseWebFilter.filter({ filter: Or({ meta: { a: 1 } }, { meta: { b: 22 } }) })
    //     expect(result).toEqual([{ meta: { a: 1 } }, { meta: { b: 22 } }])
    //   })
    //
    //   it('should filter data by different nested props and or operator and non existing row', () => {
    //     const result = firebaseWebFilter.filter({
    //       filter: Or({ meta: { a: 1 } }, { meta: { b: 22 } }, { meta: { P: 'does-not-exist' } }),
    //     })
    //     expect(result).toEqual([{ meta: { a: 1 } }, { meta: { b: 22 } }, { meta: { P: 'does-not-exist' } }])
    //   })
    // })
    //
    // describe('between', () => {
    //   it('should filter data between two ids', () => {
    //     const result = firebaseWebFilter.filter({ filter: { id: Between(1, 4) } })
    //     expect(result).toEqual({ id: TBetween(1, 4) })
    //   })
    //   it('should filter data between two nested props', () => {
    //     const result = firebaseWebFilter.filter({ filter: { meta: { a: Between(1, 4) } } })
    //     expect(result).toEqual({ meta: { a: TBetween(1, 4) } })
    //   })
    // })
  })
})
