import { initializeApp } from 'firebase/app'
import { Firestore, getFirestore } from 'firebase/firestore'

const _self = {
  _db: undefined as any | undefined,
  _createDb: (cfg: any): Firestore => {
    const app = initializeApp(cfg)
    return getFirestore(app)
  },
  getDb: (cfg: any): Firestore => {
    if (!_self._db) _self._db = _self._createDb(cfg)
    return _self._db
  },
}
export const firebaseWebDatabase = _self
