"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firebaseFilterConvert = void 0;
exports.firebaseFilterConvert = {
    convert: (params) => {
        const { key, filter } = params;
        if (!filter)
            return;
        if (!key)
            return filter; // TODO convert filter to firebase where
        return { [key]: filter };
    },
};
//# sourceMappingURL=firebase-filter-convert.js.map