import { OrmFilterOption } from '../dal/filter'
import { firebaseWebFilterConvert } from './firebase-web-filter-convert'

export const firebaseWebFilter = {
  filter: (params?: { filter?: OrmFilterOption }): any[] => {
    const { filter = {} } = params ?? {}
    return firebaseWebFilterConvert.convert({ filter })
  },
}
