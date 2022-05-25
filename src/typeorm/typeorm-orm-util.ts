import { OrmFilterOption } from '../dal/filter'
// import { objectUtil } from '@beecode/msh-node-util/lib/object-util'

const _self = {
  // uniqueArray: <Entity>(arrays: Entity[][]): Entity[] => {
  //   return Object.values(
  //     arrays.reduce((result, arr) => {
  //       return arr.reduce((acc, cur) => {
  //         return {
  //           ...acc,
  //           ...{ [JSON.stringify(cur)]: cur },
  //         }
  //       }, result)
  //     }, {} as { [k: string]: Entity })
  //   )
  // },
  // notInArrays: <Entity>(originalArray: Entity[], notInArrays: Entity[][]): Entity[] => {
  //   return originalArray.filter((o) => {
  //     return !notInArrays.some((arr) => {
  //       return arr.some((a) => objectUtil.deepEqual(a, o))
  //     })
  //   })
  // },
  valueIsObject: (value: any): boolean => {
    return typeof value === 'object'
  },
  valueIsArray: (value: any): boolean => {
    return Array.isArray(value)
  },
  valueIsDate: (value: any): boolean => {
    return value instanceof Date
  },
  simplifyObject: (value: any): any => {
    if (_self.valueIsDate(value)) return (value as Date).getTime()
    if (_self.valueIsObject(value)) return JSON.stringify(value)
    return value
  },
  /**
   * is object but not array or date
   * @param {OrmFilterOption} filter
   * @returns {boolean}
   */
  isFilterOptionAnyObject: (filter: OrmFilterOption): boolean => {
    return _self.valueIsObject(filter) && !_self.valueIsArray(filter) && !_self.valueIsDate(filter)
  },
}

export const typeormOrmUtil = _self
