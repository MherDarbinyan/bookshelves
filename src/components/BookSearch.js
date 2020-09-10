import React, { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { loadLibrary, addBook, clearLibrary } from '../actions'

const BookSearch = ({shelfId}) => {
  const library = useSelector(state=>state.library)
  console.log(library);
  const dispatch = useDispatch()

  const [query, setQuery] = useState('')

  useEffect( () => {
    if (!query) {
      return
    }
    dispatch(loadLibrary(query))
  }, [query, dispatch])

  const handleAddNewBook = (book) => {
    const newBook = {
      shelfId,
      title: book.title,
      image: book.image,
      author: book.author,
      isbn: book.isbn13
    }
    dispatch(addBook(newBook))
    dispatch(clearLibrary())
    setQuery('')
  }

  const renderBooks = library.map(book => {
    return (
      <div
        className="ui divided items"
        style={{cursor: 'pointer'}}
        key={book.isbn13}
        onClick={()=> handleAddNewBook(book)}
      >
        {book.title}
        <div className="ui divider"></div>
      </div>
    )
  })

  return (
    <div className="ui form">
      <div className="field">
        <label>Enter Book's Name</label>
        <input
          className="input"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </div>
      {renderBooks}
    </div>
  )
}

export default BookSearch
