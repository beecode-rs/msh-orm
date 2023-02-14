"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeormFilter = void 0;
const typeorm_filter_convert_1 = require("./typeorm-filter-convert");
exports.typeormFilter = {
    filter: (params) => {
        const { filter = {} } = params !== null && params !== void 0 ? params : {};
        return typeorm_filter_convert_1.typeormFilterConvert.convert({ filter });
    },
};
//# sourceMappingURL=typeorm-filter.js.map