import { OrmComparisonOperator } from '../../dal/filter'
import { MemoryBetweenStrategy } from './memory-between-strategy'
import { MemoryComparisonStrategy } from './memory-comparison-strategy'
import { MemoryGtStrategy } from './memory-gt-strategy'
import { MemoryGteStrategy } from './memory-gte-strategy'
import { MemoryInStrategy } from './memory-in-strategy'
import { MemoryLtStrategy } from './memory-lt-strategy'
import { MemoryLteStrategy } from './memory-lte-strategy'
import { MemoryNeqStrategy } from './memory-neq-strategy'

export const memoryComparisonService = {
  getComparisonStrategyFromKey: <Entity>(params: { key: string }): MemoryComparisonStrategy<Entity> | undefined => {
    const { key } = params
    switch (key) {
      case OrmComparisonOperator.GREATER_THEN:
        return new MemoryGtStrategy()
      case OrmComparisonOperator.GREATER_THEN_EQUAL:
        return new MemoryGteStrategy()
      case OrmComparisonOperator.LESS_THEN:
        return new MemoryLtStrategy()
      case OrmComparisonOperator.LESS_THEN_EQUAL:
        return new MemoryLteStrategy()
      case OrmComparisonOperator.BETWEEN:
        return new MemoryBetweenStrategy()
      case OrmComparisonOperator.IN:
        return new MemoryInStrategy()
      case OrmComparisonOperator.NOT_EQUAL:
        return new MemoryNeqStrategy()
    }
    return
  },
}
