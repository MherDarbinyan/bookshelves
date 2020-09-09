import axios from 'axios'

export const addBookshelf = (bookshelf) => {
  return {
    type: 'ADD_BOOKSHELF',
    payload: bookshelf
  }
}

export const deleteBookshelf = (id) => {
  return {
    type: 'DELETE_BOOKSHELF',
    payload: id
  }
}

export const addBook = () => {
  return {
    type: 'ADD_BOOK'
  }
}

export const deleteBook = (isbn) => {
  return {
    type: 'DELETE_BOOK',
    payload: isbn
  }
}

export const fetchBook = (query) => {
  return async (dispatch) =>{
    const response = await axios.get(`/search/${query}`)
    dispatch({
      type: 'FETCH_BOOK',
      payload: response.data
    })
  }
}
