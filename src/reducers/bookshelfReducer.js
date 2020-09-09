const initialState = []

export default (state = initialState, action, item, id) => {
  switch (action.type){
    case 'ADD_BOOKSHELF':
      return [...state, action.payload]
    case 'DELETE_BOOKSHELF':
      return state.filter(item => item.id !== action.payload)
    default:
      return state
  }
}
