export interface MemoryLogicalStrategy<Entity> {
  filter(params: { data: Entity[]; keys?: string[] }): Entity[]
}
