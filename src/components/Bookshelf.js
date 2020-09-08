import React, { useState, useEffect } from 'react'
import LocalStorageService from '../services/LocalStorageService'
import { Link } from 'react-router-dom'

const Bookshelf = (props) => {

  const itemName = "book"
  const itemCollection = "bookshelf"
  const shelfId = props.match.params.id

  const [bookshelf, setBookshelf] = useState({})
  const [books, setBooks] = useState([])

  useEffect(()=> {
      const arr = LocalStorageService.getItem(itemName).filter(book => book.shelfId === shelfId)
      setBooks(arr)
  }, [])

  useEffect(()=>{
    const getBookshelf = LocalStorageService.getItem(itemCollection)
    const findBook =  getBookshelf.find(getBookshelf => getBookshelf.id === shelfId)
    setBookshelf(findBook)
  }, [])


  const deleteBook = (isbn) => {
    const deleted = books.filter(book => isbn !== book.isbn)
    LocalStorageService.replace(itemName, deleted)
    setBooks(deleted.filter(book => book.shelfId === shelfId))
  }

  const renderBooks = books.map(book => {
    return (
      <div key={book.isbn} className="ui divided items">
        <div className="item">
        <div className="ui tiny image">
          <img src={book.image} alt={book.title} />
        </div>
        <div className="middle aligned content">
          <h2>{book.title}</h2>
          <h3>Author: {book.author}</h3>
        </div>
        <button onClick={()=> deleteBook(book.isbn)}>Delete book</button>
        </div>
      </div>
    )
  })

  return (
    <div>
      <div>{bookshelf.name}</div>
      {renderBooks}
      <Link to={`/addbooks/${shelfId}`}>
        <button className="ui primary basic button">
          Add books
        </button>
      </Link>
    </div>
  )
}

export default Bookshelf
