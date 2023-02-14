import { MemoryComparisonStrategy } from './memory-comparison-strategy';
export declare class MemoryBetweenStrategy<Entity> implements MemoryComparisonStrategy<Entity> {
    filter(params: {
        data: Entity[];
        keys: string[];
        filter: any;
    }): Entity[];
    isOperationAllowed(key: string): void;
}
//# sourceMappingURL=memory-between-strategy.d.ts.map