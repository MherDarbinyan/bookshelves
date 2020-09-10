import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBookshelf } from '../actions'

const Bookshelves = () => {
  const bookshelves = useSelector(state=>state.bookshelves)
  const dispatch = useDispatch()
  console.log("bookshelves->", bookshelves);
  const renderBookshelves = bookshelves.map(bookshelf => {
    return (
      <div key={bookshelf.id} className="ui relaxed divided list">
        <div className="item">
          <h3>{bookshelf.name}</h3>
        <Link to={`/shelf/${bookshelf.id}`}>
          <button className="ui primary basic button">View</button>
        </Link>
        <button
          className="ui negative basic button"
          onClick={()=>dispatch(deleteBookshelf(bookshelf.id))}
        >
          Delete
        </button>
        <div className="ui divider"></div>
        </div>
      </div>
    )
  })

  return (
    <div className="ui container">
      <h2>My Bookshelves</h2>
      {renderBookshelves}
    </div>
  )
}


export default Bookshelves
