"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConvertGreater = void 0;
const typeorm_1 = require("typeorm");
class ConvertGreater {
    convert(params) {
        const { filter } = params;
        return (0, typeorm_1.MoreThan)(filter);
    }
}
exports.ConvertGreater = ConvertGreater;
//# sourceMappingURL=convert-greater.js.map