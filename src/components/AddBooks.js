import React from 'react'
import BookForm from './BookForm'
import BookSearch from './BookSearch'
import { Link } from 'react-router-dom'

const AddBooks = (props) => {
  const shelfId = props.match.params.id

  return (
    <div>
    <div>
      <Link to={`/shelf/${shelfId}`}>
        <button className="ui positive basic button">
          Back to shelf
        </button>
      </Link>
    </div>
      <BookForm shelfId={shelfId}/>
      <BookSearch shelfId={shelfId}/>
    </div>
  )
}

export default AddBooks
