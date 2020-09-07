import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Bookshelf = (props) => {
  console.log(localStorage);
  const [bookshelf, setBookshelf] = useState({})
  const [books, setBooks] = useState([])

  const shelfId = props.match.params.id

  useEffect(()=> {
      const arr = getBookFromLS().filter(book => book.shelfId === shelfId)
      console.log("arr", arr)
      setBooks(arr)
  }, [])

  useEffect(()=>{
    const getBookshelf = localStorage.getItem("bookshelf")
    let arr = []
    if (getBookshelf) {
      arr = JSON.parse(getBookshelf)
    }
    const findBook =  arr.find(getBookshelf => getBookshelf.id === shelfId)
    setBookshelf(findBook)
  }, [])


  const getBookFromLS = () => {
    const getBookshelf = localStorage.getItem("book")
    let arr = []
    if (getBookshelf) {
      arr = JSON.parse(getBookshelf)
    }
    return arr
  }

  const deleteBook = (isbn) => {
    const deleted = getBookFromLS().filter(book => isbn !== book.isbn)
    localStorage.setItem("book", JSON.stringify(deleted))
    setBooks(deleted.filter(book => book.shelfId === shelfId))
  }

  const renderBooks = books.map(book => {
    return (
      <div key={book.isbn}>
        <p>{book.title}</p>
        <p>Author: {book.author}</p>
        <img src={book.image} alt={book.title} />
        <button onClick={()=> deleteBook(book.isbn)}>Delete book</button>
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
