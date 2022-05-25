import { OrmFilterOption, OrmLogicalOperator } from '../../dal/filter'
import { MemoryComparisonStrategy } from '../comparison-strategy/memory-comparison-strategy'
import { MemoryAndStrategy } from './memory-and-strategy'
import { MemoryLogicalStrategy } from './memory-logical-strategy'
import { MemoryNotStrategy } from './memory-not-strategy'
import { MemoryOrStrategy } from './memory-or-strategy'

const _self = {
  getLogicalStrategyFromKey: <Entity>(params: {
    key: string
    filter: OrmFilterOption
    parentKeys: string[]
    comparisonStrategy: MemoryComparisonStrategy<Entity>
  }): MemoryLogicalStrategy<Entity> | undefined => {
    const { key, filter, comparisonStrategy, parentKeys } = params
    switch (key) {
      case OrmLogicalOperator.OR:
        return new MemoryOrStrategy({ filter, comparisonStrategy, parentKeys })
      case OrmLogicalOperator.AND:
        return new MemoryAndStrategy({ filter, comparisonStrategy, parentKeys })
      case OrmLogicalOperator.NOT:
        return new MemoryNotStrategy({ filter, comparisonStrategy, parentKeys })
    }
    //
    // if (_self.isFilterOptionAnyObject(filter)) {
    //   const keys = [...parentKeys]
    //   if (!ORM_FILTER_OPERATIONS.map((a) => `${a}`).includes(key)) keys.push(key)
    //   return new MemoryAndStrategy({ filter, comparisonStrategy, parentKeys: keys })
    // }

    return undefined
  },
}

export const memoryLogicalService = _self
