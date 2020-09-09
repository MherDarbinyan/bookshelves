import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteBookshelf } from '../actions'

const Bookshelves = (props) => {
  console.log("created bookshelves->",props);

  const renderBookshelves = props.bookshelves.map(bookshelf => {
    return (
      <div key={bookshelf.id} className="ui relaxed divided list">
        <div className="item">
          <h3>{bookshelf.name}</h3>
        <Link to={`/shelf/${bookshelf.id}`}>
          <button className="ui primary basic button">View</button>
        </Link>
        <button
          className="ui negative basic button"
          onClick={()=>props.deleteBookshelf(bookshelf.id)}
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

const mapStateToProps = (state) => {
  return {
    bookshelves: state.bookshelves
  }
}

export default connect(mapStateToProps, {deleteBookshelf} )(Bookshelves)
