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
