import React from 'react'
import { Link } from 'react-router-dom'

const Bookshelves = (props) => {
  const {bookshelves, deleteBookshelf} = props

  const renderBookshelves = bookshelves.map(bookshelf => {
    return (
      <div key={bookshelf.id} className="ui divided items">
        <div className="item">
        {bookshelf.name}
        <Link to={`/shelf/${bookshelf.id}`}>
          <button className="ui primary basic button">View</button>
        </Link>
        <button
          className="ui negative basic button"
          onClick={()=>deleteBookshelf(bookshelf.id)}
        >
          Delete
        </button>
        </div>
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
