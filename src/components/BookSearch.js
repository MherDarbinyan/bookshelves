import React, { useState, useEffect } from 'react'
import LocalStorageService from '../services/LocalStorageService'
import axios from 'axios'

const BookSearch = ({shelfId}) => {

  const [query, setQuery] = useState('')
  const [result, setResult] = useState([])

  const itemName = "book"

  useEffect( () => {
    if (!query) {
      return
    }
    const search = async () => {
      const { data } = await axios.get(`/search/${query}`)
      setResult(data.books)
    }
    search()
  }, [query])



  const handleAddNewBook = (book) => {
    const newBook = {
      shelfId,
      title: book.title,
      image: book.image,
      author: book.author,
      isbn: book.isbn13
    }
    LocalStorageService.setItem(itemName, newBook)
    setQuery('')
    setResult([])
  }

  const renderBooks = result.map(book => {
    return (
      <div
        className="ui divided items"
        style={{cursor: 'pointer'}}
        key={book.isbn13}
        onClick={()=> handleAddNewBook(book)}
      >
        {book.title}
        <div class="ui divider"></div>
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
