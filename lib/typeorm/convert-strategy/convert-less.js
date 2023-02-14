"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConvertLess = void 0;
const typeorm_1 = require("typeorm");
class ConvertLess {
    convert(params) {
        const { filter } = params;
        return (0, typeorm_1.LessThan)(filter);
    }
}
exports.ConvertLess = ConvertLess;
//# sourceMappingURL=convert-less.js.map