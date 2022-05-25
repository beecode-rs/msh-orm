import { EntityType } from '../dal/common-dal-implementable'
import { Pagination } from '../dal/pagination'

export const memoryPagination = {
  paginate: <Entity extends EntityType>(data: Entity[], pagination?: Pagination): Entity[] => {
    if (!pagination) return data
    const { page, pageSize } = pagination
    return data.slice((page - 1) * pageSize, page * pageSize)
  },
}
