import { OrmFilterOption } from '../../dal/filter';
import { MemoryComparisonStrategy } from './memory-comparison-strategy';
export declare class MemoryInStrategy<Entity> implements MemoryComparisonStrategy<Entity> {
    filter(params: {
        data: Entity[];
        keys: string[];
        filter: OrmFilterOption;
    }): Entity[];
    isOperationAllowed(_key: string): void;
}
//# sourceMappingURL=memory-in-strategy.d.ts.map