import { OrmFilterOption } from '../dal/filter'
import { convertService } from './convert-strategy/convert-service'
import { typeormOrmUtil } from './typeorm-orm-util'

const _self = {
  convert: (params: { key?: string; filter?: OrmFilterOption }): any => {
    const { key, filter } = params
    if (!filter) return

    const arrayConverted = _self._convertChildrenIfArray(filter)
    const objectConverted = _self._convertChildrenIfObject(arrayConverted)

    if (!key) return objectConverted

    const strategy = convertService.getConvertStrategyFromKey({ key })
    if (strategy) return strategy.convert({ filter: objectConverted })
    return { [key]: objectConverted }
  },

  _convertChildrenIfArray: (filter: any): any => {
    if (!typeormOrmUtil.valueIsArray(filter)) return filter
    return filter.map((f: any) => _self.convert({ filter: f }))
  },
  _convertChildrenIfObject: (filter: any): any => {
    if (!typeormOrmUtil.isFilterOptionAnyObject(filter)) return filter
    const convertedEntries = Object.entries(filter).map(([k, v]: any) => _self.convert({ key: k, filter: v }))
    if (convertedEntries.length === 1) return convertedEntries[0]
    return convertedEntries.reduce((agg, cur) => ({ ...agg, ...cur }), {})
  },
}

export const typeormFilterConvert = _self
