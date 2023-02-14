"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firebaseWebDatabase = void 0;
const app_1 = require("firebase/app");
const firestore_1 = require("firebase/firestore");
const _self = {
    _db: undefined,
    _createDb: (cfg) => {
        const app = (0, app_1.initializeApp)(cfg);
        return (0, firestore_1.getFirestore)(app);
    },
    getDb: (cfg) => {
        if (!_self._db)
            _self._db = _self._createDb(cfg);
        return _self._db;
    },
};
exports.firebaseWebDatabase = _self;
//# sourceMappingURL=firebase-web-database.js.map