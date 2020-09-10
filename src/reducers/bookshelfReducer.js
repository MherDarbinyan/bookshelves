const initialState = []

export default (state = initialState, action) => {
  switch (action.type){
    case 'ADD_BOOKSHELF':
      return [...state, action.payload]
    case 'LOAD_BOOKSHELVES':
        return action.payload
    case 'DELETE_BOOKSHELF':
      return action.payload
    default:
      return state
  }
}
