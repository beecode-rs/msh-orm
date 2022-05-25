import { ORM_FILTER_OPERATIONS, OrmFilterOperationsKey, OrmFilterOption } from '../../dal/filter'
import { memoryComparisonService } from '../comparison-strategy/memory-comparison-service'
import { MemoryComparisonStrategy } from '../comparison-strategy/memory-comparison-strategy'
import { memoryOrmUtil } from '../memory-orm-util'
import { memoryLogicalService } from './memory-logical-service'
import { MemoryLogicalStrategy } from './memory-logical-strategy'
import { objectUtil } from '@beecode/msh-node-util/lib/object-util'

export class MemoryAndStrategy<Entity> implements MemoryLogicalStrategy<Entity> {
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

  /**
   * Filter data by each key, every next key gets filtered data from previus key
   * @returns {Entity[]}
   * @param params
   */
  public filter(params: { data: Entity[]; keys?: string[] }): Entity[] {
    const { data, keys = [] } = params
    return Object.entries(this._filter).reduce((filteredResult, [keyOperation, valFilter]) => {
      return this._filterIndividualStatement({ keyOperation, valFilter, data: filteredResult, keys })
    }, objectUtil.deepClone(data))
  }

  protected _filterIndividualStatement(params: {
    keyOperation: OrmFilterOperationsKey
    valFilter: OrmFilterOption
    data: Entity[]
    keys: string[]
  }): Entity[] {
    const { keyOperation, valFilter, data, keys } = params

    this._comparisonStrategy.isOperationAllowed(keyOperation)

    const comparisonStrategy = memoryComparisonService.getComparisonStrategyFromKey<Entity>({
      key: keyOperation,
    })
    const newComparisonStrategy = comparisonStrategy ?? this._comparisonStrategy

    const logicStrategy = memoryLogicalService.getLogicalStrategyFromKey<Entity>({
      filter: valFilter,
      parentKeys: this._parentKeys,
      key: keyOperation,
      comparisonStrategy: newComparisonStrategy,
    })
    if (logicStrategy) return logicStrategy.filter({ data })

    const compareKeys = [...this._parentKeys, ...keys]
    if (!ORM_FILTER_OPERATIONS.map((a) => `${a}`).includes(keyOperation)) compareKeys.push(keyOperation)

    if (memoryOrmUtil.isFilterOptionAnyObject(valFilter)) {
      return new MemoryAndStrategy({
        filter: valFilter,
        comparisonStrategy: newComparisonStrategy,
        parentKeys: compareKeys,
      }).filter({
        data,
      })
    }

    return newComparisonStrategy.filter({ data, keys: compareKeys, filter: valFilter })
  }
}
