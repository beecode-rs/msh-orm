"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseUtil = void 0;
const time_util_1 = require("@beecode/msh-node-util/lib/time-util");
exports.databaseUtil = {
    timestampToUnixTransformer: {
        from(date) {
            return date ? time_util_1.timeUtil.dateToUnix(date) : undefined;
        },
        to(unix) {
            return unix ? time_util_1.timeUtil.unixToDate(unix) : undefined;
        },
    },
    jsonTransformer: {
        from(jsonString) {
            return jsonString && JSON.parse(jsonString);
        },
        to(jsonData) {
            return jsonData && JSON.stringify(jsonData);
        },
    },
};
//# sourceMappingURL=typeorm-database-util.js.map