export default (state = [], action) => {
  switch (action.type){
    case 'ADD_BOOK':
      return [...state, action.payload]
    case 'DELETE_BOOK':
      return state.filter(item => item.isbn !== action.payload)
    default:
      return state
  }
}
