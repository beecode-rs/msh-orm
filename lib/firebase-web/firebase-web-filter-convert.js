"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firebaseWebFilterConvert = void 0;
exports.firebaseWebFilterConvert = {
    convert: (params) => {
        const { key, filter } = params;
        if (!filter)
            return;
        if (!key)
            return filter; // TODO convert filter to firebase where
        return { [key]: filter };
    },
};
//# sourceMappingURL=firebase-web-filter-convert.js.map