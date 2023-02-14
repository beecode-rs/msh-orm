import { OrmFilterOption } from '../dal/filter'

export const firebaseWebFilterConvert = {
  convert: (params: { key?: string; filter?: OrmFilterOption }): any => {
    const { key, filter } = params
    if (!filter) return

    if (!key) return filter // TODO convert filter to firebase where

    return { [key]: filter }
  },
}
