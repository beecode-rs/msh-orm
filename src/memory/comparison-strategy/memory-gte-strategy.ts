import { OrmComparisonOperator, OrmFilterOption } from '../../dal/filter'
import { memoryOrmUtil } from '../memory-orm-util'
import { MemoryComparisonStrategy } from './memory-comparison-strategy'
import get from 'lodash.get'

export class MemoryGteStrategy<Entity> implements MemoryComparisonStrategy<Entity> {
  public filter(params: { data: Entity[]; keys: string[]; filter: OrmFilterOption }): Entity[] {
    const { keys, data, filter } = params

    return data.filter((d) => {
      const a = memoryOrmUtil.simplifyObject(get(d, keys.join('.')))
      const b = memoryOrmUtil.simplifyObject(filter)
      return a >= b
    })
  }

  public isOperationAllowed(key: string): void {
    if (
      [
        OrmComparisonOperator.GREATER_THEN,
        OrmComparisonOperator.GREATER_THEN_EQUAL,
        OrmComparisonOperator.LESS_THEN,
        OrmComparisonOperator.LESS_THEN_EQUAL,
        OrmComparisonOperator.BETWEEN,
        OrmComparisonOperator.IN,
      ]
        .map((a) => `${a}`)
        .includes(key)
    )
      throw Error(`Operation [${key}] not allowed in GREATER_THEN operation`)
  }
}
