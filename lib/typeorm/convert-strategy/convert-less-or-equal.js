"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConvertLessOrEqual = void 0;
const typeorm_1 = require("typeorm");
class ConvertLessOrEqual {
    convert(params) {
        const { filter } = params;
        return (0, typeorm_1.LessThanOrEqual)(filter);
    }
}
exports.ConvertLessOrEqual = ConvertLessOrEqual;
//# sourceMappingURL=convert-less-or-equal.js.map