import { OrmFilterOption } from '../../dal/filter'
import { MemoryComparisonStrategy } from '../comparison-strategy/memory-comparison-strategy'
import { MemoryEqStrategy } from '../comparison-strategy/memory-eq-strategy'
import { memoryOrmUtil } from '../memory-orm-util'
import { MemoryAndStrategy } from './memory-and-strategy'
import { MemoryLogicalStrategy } from './memory-logical-strategy'

export class MemoryNotStrategy<Entity> implements MemoryLogicalStrategy<Entity> {
  protected readonly _filter: OrmFilterOption
  protected readonly _parentKeys: string[]
  protected readonly _comparisonStrategy: MemoryComparisonStrategy<Entity>

  public constructor(params: {
    filter: OrmFilterOption
    parentKeys?: string[]
    comparisonStrategy: MemoryComparisonStrategy<Entity>
  }) {
    const { filter, parentKeys = [], comparisonStrategy } = params
    this._filter = filter
    this._parentKeys = parentKeys
    this._comparisonStrategy = comparisonStrategy
  }

  public filter(params: { data: Entity[]; keys?: string[] }): Entity[] {
    const { keys, data } = params
    const equalResult = new MemoryAndStrategy<Entity>({
      filter: this._filter,
      parentKeys: keys,
      comparisonStrategy: new MemoryEqStrategy(),
    }).filter({ data })
    return memoryOrmUtil.notInArrays(data, [equalResult])
  }
}
