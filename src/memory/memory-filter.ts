import { EntityType } from '../dal/common-dal-implementable'
import { OrmFilterOption } from '../dal/filter'
import { MemoryEqStrategy } from './comparison-strategy/memory-eq-strategy'
import { MemoryAndStrategy } from './logical-strategy/memory-and-strategy'

export const memoryFilter = {
  filter: <Entity extends EntityType>(params: { data: Entity[]; filter?: OrmFilterOption }): Entity[] => {
    const { data, filter = {} } = params

    return new MemoryAndStrategy<Entity>({ filter, comparisonStrategy: new MemoryEqStrategy() }).filter({
      data,
    })
  },
}
