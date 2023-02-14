"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryEqStrategy = void 0;
const object_util_1 = require("@beecode/msh-node-util/lib/object-util");
const lodash_get_1 = __importDefault(require("lodash.get"));
class MemoryEqStrategy {
    filter(params) {
        const { keys, data, filter } = params;
        return data.filter((d) => object_util_1.objectUtil.deepEqual((0, lodash_get_1.default)(d, keys.join('.'), false), filter));
    }
    isOperationAllowed(_key) {
        // if ([''].includes(key)) throw Error(`Operation [${key}] not allowed in EQUAL operation`)
    }
}
exports.MemoryEqStrategy = MemoryEqStrategy;
//# sourceMappingURL=memory-eq-strategy.js.map