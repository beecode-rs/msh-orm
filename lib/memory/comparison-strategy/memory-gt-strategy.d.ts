import { OrmFilterOption } from '../../dal/filter';
import { MemoryComparisonStrategy } from './memory-comparison-strategy';
export declare class MemoryGtStrategy<Entity> implements MemoryComparisonStrategy<Entity> {
    filter(params: {
        data: Entity[];
        keys: string[];
        filter: OrmFilterOption;
    }): Entity[];
    isOperationAllowed(key: string): void;
}
//# sourceMappingURL=memory-gt-strategy.d.ts.map