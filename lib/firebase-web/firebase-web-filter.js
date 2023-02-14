"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firebaseWebFilter = void 0;
const firebase_web_filter_convert_1 = require("./firebase-web-filter-convert");
exports.firebaseWebFilter = {
    filter: (params) => {
        const { filter = {} } = params !== null && params !== void 0 ? params : {};
        return firebase_web_filter_convert_1.firebaseWebFilterConvert.convert({ filter });
    },
};
//# sourceMappingURL=firebase-web-filter.js.map