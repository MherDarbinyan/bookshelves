export default (state = [], action) => {
  switch (action.type){
    case 'LOAD_LIBRARY':
      return action.payload
    case 'CLEAR_LIBRARY':
      return action.payload
    default:
      return state
  }
}
