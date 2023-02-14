"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConvertGreaterOrEqual = void 0;
const typeorm_1 = require("typeorm");
class ConvertGreaterOrEqual {
    convert(params) {
        const { filter } = params;
        return (0, typeorm_1.MoreThanOrEqual)(filter);
    }
}
exports.ConvertGreaterOrEqual = ConvertGreaterOrEqual;
//# sourceMappingURL=convert-greater-or-equal.js.map