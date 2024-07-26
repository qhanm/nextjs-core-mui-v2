const Storage = {
  getItem: (key: string) => {
    if (typeof window !== 'undefined') {
      return window.localStorage.getItem(key)
    }
    return undefined
  },
  setItem: (key: string, value: any) => {
    if (typeof window !== 'undefined') {
      return window.localStorage.setItem(key, value)
    }
  }
}
export default Storage
