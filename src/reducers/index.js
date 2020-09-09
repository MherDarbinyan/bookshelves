import { combineReducers } from 'redux'
import bookshelfReducer from './bookshelfReducer'
import bookReducer from './bookReducer'

export default combineReducers({
  bookshelves: bookshelfReducer,
  books: bookReducer
})
