import { OrmFilterOption } from '../../dal/filter'
import { MemoryComparisonStrategy } from './memory-comparison-strategy'
import { objectUtil } from '@beecode/msh-node-util/lib/object-util'
import get from 'lodash.get'

export class MemoryEqStrategy<Entity> implements MemoryComparisonStrategy<Entity> {
  public filter(params: { data: Entity[]; keys: string[]; filter: OrmFilterOption }): Entity[] {
    const { keys, data, filter } = params

    return data.filter((d) => objectUtil.deepEqual(get(d, keys.join('.'), false), filter))
  }

  public isOperationAllowed(_key: string): void {
    // if ([''].includes(key)) throw Error(`Operation [${key}] not allowed in EQUAL operation`)
  }
}
