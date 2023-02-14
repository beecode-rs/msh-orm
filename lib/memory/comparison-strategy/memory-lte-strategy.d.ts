import { OrmFilterOption } from '../../dal/filter';
import { MemoryComparisonStrategy } from './memory-comparison-strategy';
export declare class MemoryLteStrategy<Entity> implements MemoryComparisonStrategy<Entity> {
    filter(params: {
        data: Entity[];
        keys: string[];
        filter: OrmFilterOption;
    }): Entity[];
    isOperationAllowed(key: string): void;
}
//# sourceMappingURL=memory-lte-strategy.d.ts.map