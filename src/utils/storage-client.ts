/**
 * WebStoreage wrapper to safely handle data
 */

function getStorage() {
  return window.sessionStorage
}

function safeGet(key: string) {
  const storage = getStorage()
  try {
    return JSON.parse(storage.getItem(key))
  } catch (error) {
    return null
  }
}

function safeSet(key: string, value: any): void {
  const storage = getStorage()
  try {
    storage.setItem(key, JSON.stringify(value))
  } catch (error) {
    return
  }
}

function deleteStorage(key: string): void {
  getStorage().removeItem(key)
}

export { safeGet as safeStorageGet, safeSet as safeStorageSet, deleteStorage }
