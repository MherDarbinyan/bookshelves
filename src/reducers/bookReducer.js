export default (state = [], action) => {
  switch (action.type){
    case 'ADD_BOOK':
      return [...state, action.payload]
    case 'LOAD_BOOKS':
      return action.payload
    case 'DELETE_BOOK':
      return action.payload
    default:
      return state
  }
}
