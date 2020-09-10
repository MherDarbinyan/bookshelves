import { combineReducers } from 'redux'
import bookshelfReducer from './bookshelfReducer'
import bookReducer from './bookReducer'
import libraryReducer from './libraryReducer'

export default combineReducers({
  bookshelves: bookshelfReducer,
  books: bookReducer,
  library: libraryReducer
})
