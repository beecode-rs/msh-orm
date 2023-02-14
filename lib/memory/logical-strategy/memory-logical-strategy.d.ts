export interface MemoryLogicalStrategy<Entity> {
    filter(params: {
        data: Entity[];
        keys?: string[];
    }): Entity[];
}
//# sourceMappingURL=memory-logical-strategy.d.ts.map