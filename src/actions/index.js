import LocalStorageService from '../services/LocalStorageService'
import axios from 'axios'

export const addBookshelf = (bookshelf) => {
  LocalStorageService.setItem('bookshelves', bookshelf)
  return {
    type: 'ADD_BOOKSHELF',
    payload: bookshelf
  }
}

export const loadBookshelfLS = () => {
  const loadedBookshelves = LocalStorageService.getItem('bookshelves')
  return {
    type: 'LOAD_BOOKSHELVES',
    payload: loadedBookshelves
  }
}

export const deleteBookshelf = (id) => {
  const loadedBookshelves = LocalStorageService.getItem('bookshelves')
  const filteredBookshelves = loadedBookshelves.filter(item => item.id !== id)
  LocalStorageService.replace('bookshelves', filteredBookshelves)
  return {
    type: 'DELETE_BOOKSHELF',
    payload: filteredBookshelves
  }
}

export const addBook = (book) => {
  LocalStorageService.setItem('books', book)
  return {
    type: 'ADD_BOOK',
    payload: book
  }
}

export const loadBooksfLS = () => {
  const loadedBooks = LocalStorageService.getItem('books')
  return {
    type: 'LOAD_BOOKS',
    payload: loadedBooks
  }
}

export const clearLibrary = () => {
  return {
    type: 'CLEAR_LIBRARY',
    payload: []
  }
}

export const deleteBook = (isbn) => {
  const loadedBooks = LocalStorageService.getItem('books')
  const filteredBooks = loadedBooks.filter(item => item.isbn !== isbn)
  LocalStorageService.replace('books', filteredBooks)
  return {
    type: 'DELETE_BOOK',
    payload: filteredBooks
  }
}

export const loadLibrary = (query) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/search/${query}`)
      console.log(response);
      dispatch({
        type: 'LOAD_LIBRARY',
        payload: response.data.books
      })
    } catch (e) {
      dispatch({
        type: 'LOAD_LIBRARY',
        payload: []
      })
    }
  }
}
