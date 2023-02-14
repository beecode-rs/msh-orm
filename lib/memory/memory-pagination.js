"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memoryPagination = void 0;
exports.memoryPagination = {
    paginate: (data, pagination) => {
        if (!pagination)
            return data;
        const { page, pageSize } = pagination;
        return data.slice((page - 1) * pageSize, page * pageSize);
    },
};
//# sourceMappingURL=memory-pagination.js.map