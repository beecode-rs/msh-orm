export interface MemoryComparisonStrategy<Entity> {
    filter(params: {
        data: Entity[];
        keys: string[];
        filter: any;
    }): Entity[];
    isOperationAllowed(key: string): void;
}
//# sourceMappingURL=memory-comparison-strategy.d.ts.map