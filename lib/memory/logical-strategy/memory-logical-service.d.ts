import { OrmFilterOption } from '../../dal/filter';
import { MemoryComparisonStrategy } from '../comparison-strategy/memory-comparison-strategy';
import { MemoryLogicalStrategy } from './memory-logical-strategy';
export declare const memoryLogicalService: {
    getLogicalStrategyFromKey: <Entity>(params: {
        key: string;
        filter: OrmFilterOption;
        parentKeys: string[];
        comparisonStrategy: MemoryComparisonStrategy<Entity>;
    }) => MemoryLogicalStrategy<Entity> | undefined;
};
//# sourceMappingURL=memory-logical-service.d.ts.map