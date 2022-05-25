import { OrmFilterOption } from '../../dal/filter'
import { MemoryComparisonStrategy } from '../comparison-strategy/memory-comparison-strategy'
import { memoryOrmUtil } from '../memory-orm-util'
import { MemoryAndStrategy } from './memory-and-strategy'
import { MemoryLogicalStrategy } from './memory-logical-strategy'

export class MemoryOrStrategy<Entity> implements MemoryLogicalStrategy<Entity> {
  protected readonly _filter: OrmFilterOption
  protected readonly _parentKeys: string[]
  protected readonly _comparisonStrategy: MemoryComparisonStrategy<Entity>

  public constructor(params: {
    filter: OrmFilterOption
    parentKeys?: string[]
    comparisonStrategy: MemoryComparisonStrategy<Entity>
  }) {
    const { filter, comparisonStrategy, parentKeys = [] } = params

    this._filter = filter
    this._parentKeys = parentKeys
    this._comparisonStrategy = comparisonStrategy
  }

  public filter(params: { data: Entity[]; keys?: string[] }): Entity[] {
    const { data, keys = [] } = params

    if (!Array.isArray(this._filter)) throw Error('Filter must by an array') // TODO update error message
    const results = this._filter.map((filter) => {
      const result = new MemoryAndStrategy<Entity>({
        filter,
        parentKeys: this._parentKeys,
        comparisonStrategy: this._comparisonStrategy,
      }).filter({ data, keys })
      return result
    })

    if (results.length > 1) return memoryOrmUtil.uniqueArray(results)
    return results[0] ?? []
  }
}
