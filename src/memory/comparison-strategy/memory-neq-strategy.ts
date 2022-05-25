import { OrmComparisonOperator, OrmFilterOption } from '../../dal/filter'
import { memoryOrmUtil } from '../memory-orm-util'
import { MemoryComparisonStrategy } from './memory-comparison-strategy'
import { MemoryEqStrategy } from './memory-eq-strategy'

export class MemoryNeqStrategy<Entity> implements MemoryComparisonStrategy<Entity> {
  public filter(params: { data: Entity[]; keys: string[]; filter: OrmFilterOption }): Entity[] {
    const { data, keys, filter } = params
    const equalResult = new MemoryEqStrategy<Entity>().filter({ data, keys, filter })
    return memoryOrmUtil.notInArrays(data, [equalResult])
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
      throw Error(`Operation [${key}] not allowed in NOT_EQUAL operation`)
  }
}
