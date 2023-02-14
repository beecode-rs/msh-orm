"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConvertIn = void 0;
const typeorm_1 = require("typeorm");
class ConvertIn {
    convert(params) {
        const { filter } = params;
        return (0, typeorm_1.In)(filter);
    }
}
exports.ConvertIn = ConvertIn;
//# sourceMappingURL=convert-in.js.map