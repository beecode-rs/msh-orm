import { OrmFilterOption } from '../../dal/filter';
import { MemoryComparisonStrategy } from '../comparison-strategy/memory-comparison-strategy';
import { MemoryLogicalStrategy } from './memory-logical-strategy';
export declare class MemoryNotStrategy<Entity> implements MemoryLogicalStrategy<Entity> {
    protected readonly _filter: OrmFilterOption;
    protected readonly _parentKeys: string[];
    protected readonly _comparisonStrategy: MemoryComparisonStrategy<Entity>;
    constructor(params: {
        filter: OrmFilterOption;
        parentKeys?: string[];
        comparisonStrategy: MemoryComparisonStrategy<Entity>;
    });
    filter(params: {
        data: Entity[];
        keys?: string[];
    }): Entity[];
}
//# sourceMappingURL=memory-not-strategy.d.ts.map