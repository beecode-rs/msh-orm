import { OrmFilterOption } from '../../dal/filter';
import { MemoryComparisonStrategy } from './memory-comparison-strategy';
export declare class MemoryNeqStrategy<Entity> implements MemoryComparisonStrategy<Entity> {
    filter(params: {
        data: Entity[];
        keys: string[];
        filter: OrmFilterOption;
    }): Entity[];
    isOperationAllowed(key: string): void;
}
//# sourceMappingURL=memory-neq-strategy.d.ts.map