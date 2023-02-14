"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConvertNot = void 0;
const typeorm_1 = require("typeorm");
class ConvertNot {
    convert(params) {
        const { filter } = params;
        return (0, typeorm_1.Not)(filter);
    }
}
exports.ConvertNot = ConvertNot;
//# sourceMappingURL=convert-not.js.map