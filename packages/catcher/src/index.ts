import { Store } from './interfaces'

import ChromeStorageCatch from './libs/chromeStorage'
import StorageCatch from './libs/storage'
import IndexedDBCatch from './libs/indexedDB'

export { ChromeStorageCatch, StorageCatch, IndexedDBCatch }

const types = {
  localStorage: StorageCatch,
  sessionStorage: StorageCatch,
  chromeLocalStorage: ChromeStorageCatch,
  chromeSyncStorage: ChromeStorageCatch,
  indexedDB: IndexedDBCatch
}

export const Catcher = config => {
  const { type } = config || {}
  const _Store: Store = new types[type || 'localStorage'](config)
  return _Store
}

export default Catcher
