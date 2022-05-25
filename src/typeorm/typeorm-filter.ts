import { OrmFilterOption } from '../dal/filter'
import { typeormFilterConvert } from './typeorm-filter-convert'

export const typeormFilter = {
  filter: (params?: { filter?: OrmFilterOption }): any => {
    const { filter = {} } = params ?? {}
    return typeormFilterConvert.convert({ filter })
  },
}
