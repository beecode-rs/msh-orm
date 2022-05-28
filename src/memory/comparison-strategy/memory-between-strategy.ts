import { OrmComparisonOperator } from '../../dal/filter'
import { memoryOrmUtil } from '../memory-orm-util'
import { MemoryComparisonStrategy } from './memory-comparison-strategy'
import get from 'lodash.get'

export class MemoryBetweenStrategy<Entity> implements MemoryComparisonStrategy<Entity> {
  public filter(params: { data: Entity[]; keys: string[]; filter: any }): Entity[] {
    const {
      data,
      keys,
      filter: [from, to],
    } = params

    const simpleFrom = memoryOrmUtil.simplifyObject(from)
    const simpleTo = memoryOrmUtil.simplifyObject(to)
    return data.filter((d) => {
      const simpleFilter = memoryOrmUtil.simplifyObject(get(d, keys.join('.')))
      const passedFromCheck = simpleFrom <= simpleFilter
      const passedToCheck = simpleFilter <= simpleTo
      return passedFromCheck && passedToCheck
    })
  }

  public isOperationAllowed(key: string): void {
    if (
      [
        OrmComparisonOperator.GREATER_THEN,
        OrmComparisonOperator.GREATER_THEN_EQUAL,
        OrmComparisonOperator.LESS_THEN,
        OrmComparisonOperator.LESS_THEN_EQUAL,
        OrmComparisonOperator.IN,
      ]
        .map((a) => `${a}`)
        .includes(key)
    )
      throw Error(`Operation [${key}] not allowed in BETWEEN operation`)
  }
}
