"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firebaseFilter = void 0;
const firebase_filter_convert_1 = require("./firebase-filter-convert");
exports.firebaseFilter = {
    filter: (params) => {
        const { filter = {} } = params !== null && params !== void 0 ? params : {};
        return firebase_filter_convert_1.firebaseFilterConvert.convert({ filter });
    },
};
//# sourceMappingURL=firebase-filter.js.map