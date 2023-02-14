"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryInStrategy = void 0;
const object_util_1 = require("@beecode/msh-node-util/lib/object-util");
const lodash_get_1 = __importDefault(require("lodash.get"));
class MemoryInStrategy {
    filter(params) {
        const { keys, data, filter } = params;
        return data.filter((d) => {
            return filter.find((f) => object_util_1.objectUtil.deepEqual((0, lodash_get_1.default)(d, keys.join('.'), false), f));
        });
    }
    isOperationAllowed(_key) {
        // if ([''].includes(key)) throw Error(`Operation [${key}] not allowed in IN operation`)
    }
}
exports.MemoryInStrategy = MemoryInStrategy;
//# sourceMappingURL=memory-in-strategy.js.map