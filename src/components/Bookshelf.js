import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadBooksfLS, deleteBook, loadBookshelfLS } from '../actions'
import { Link } from 'react-router-dom'

const Bookshelf = (props) => {

  const shelfId = props.match.params.id
  const bookshelfsss = useSelector(state=>state.bookshelves)
  const bookshelf = useSelector(state=>state.bookshelves.find(item=>{
    return item.id === shelfId
  }))
  console.log("bookshelf->", bookshelf);
  const books = useSelector(state=>state.books.filter(item=>{
    return item.shelfId === shelfId
  }))
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(loadBooksfLS())
    dispatch(loadBookshelfLS())
  }, [])




  const renderBooks = books.map(book => {
    return (
      <div key={book.isbn} className="ui divided items">
        <div className="item">
        <div className="ui middle aligned tiny image">
          <img className="ui small left floated image" src={book.image} alt={book.title} />
        </div>
        <div className="middle aligned content">
          <h2>{book.title}</h2>
          <h3>Author: {book.author}</h3>
        </div>
        </div>
        <button
          className="ui button"
          onClick={()=> dispatch(deleteBook(book.isbn))}
        >
          Delete a book
        </button>
      </div>
    )
  })

  if (!bookshelf) {
    return <div>...Loading</div>
  }
  return (
    <div>
    <h2>{bookshelf.name}</h2>
      {renderBooks}
      <div>
      <Link to={`/addbooks/${shelfId}`}>
        <button className="ui primary basic button">
          Add books
        </button>
      </Link>
      <Link to="/">
        <button className="ui positive basic button">
          Back to shelf
        </button>
      </Link>
      </div>
    </div>
  )
}

export default Bookshelf
