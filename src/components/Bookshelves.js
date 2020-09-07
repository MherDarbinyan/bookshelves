import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Bookshelves = (props) => {
  console.log(props)
  const {bookshelves} = props

  // useEffect(()=> {
  //
  // })

  const renderBookshelves = bookshelves.map(bookshelf => {
    return (
      <div key={bookshelf}>
      {bookshelf}
      <Link to={`/shelf/${bookshelf}`}>
        <button className="ui primary basic button">View</button>
      </Link>
      <button className="ui negative basic button">Delete</button>
      </div>
    )
  })

  return (
    <div className="ui container">
      <h2>My Bookshelves</h2>
      <h3>{renderBookshelves}</h3>
    </div>
  )
}

export default Bookshelves
