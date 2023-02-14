import { OrmFilterOperationsKey, OrmFilterOption } from '../../dal/filter';
import { MemoryComparisonStrategy } from '../comparison-strategy/memory-comparison-strategy';
import { MemoryLogicalStrategy } from './memory-logical-strategy';
export declare class MemoryAndStrategy<Entity> implements MemoryLogicalStrategy<Entity> {
    protected readonly _filter: OrmFilterOption;
    protected readonly _parentKeys: string[];
    protected readonly _comparisonStrategy: MemoryComparisonStrategy<Entity>;
    constructor(params: {
        filter: OrmFilterOption;
        parentKeys?: string[];
        comparisonStrategy: MemoryComparisonStrategy<Entity>;
    });
    /**
     * Filter data by each key, every next key gets filtered data from previus key
     * @returns {Entity[]}
     * @param params
     */
    filter(params: {
        data: Entity[];
        keys?: string[];
    }): Entity[];
    protected _filterIndividualStatement(params: {
        keyOperation: OrmFilterOperationsKey;
        valFilter: OrmFilterOption;
        data: Entity[];
        keys: string[];
    }): Entity[];
}
//# sourceMappingURL=memory-and-strategy.d.ts.map