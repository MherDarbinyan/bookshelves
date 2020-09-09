export default class LocalStorageService {
  static getItem(itemName){
    const data = localStorage.getItem(itemName)
    let arr = []
    if (data) {
      arr = JSON.parse(data)
    }
    return arr
  }
  static setItem(itemName, setData){
    const data = this.getItem(itemName)
    localStorage.setItem(itemName, JSON.stringify([...data, setData]))
  }
  static replace(itemName, data){
    localStorage.setItem(itemName, JSON.stringify(data))
  }
}


export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  }catch(err){
    return undefined
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch (err) {
    return err
  }
}
