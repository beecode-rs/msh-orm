"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConvertBetween = void 0;
const typeorm_1 = require("typeorm");
class ConvertBetween {
    convert(params) {
        const { filter } = params;
        return (0, typeorm_1.Between)(filter[0], filter[1]);
    }
}
exports.ConvertBetween = ConvertBetween;
//# sourceMappingURL=convert-between.js.map