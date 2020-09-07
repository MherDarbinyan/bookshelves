import React from 'react'
import BookForm from './BookForm'
import BookSearch from './BookSearch'

const AddBooks = (props) => {
  const shelfId = props.match.params.id

  return (
    <div>
      <BookForm shelfId={shelfId}/>
      <BookSearch shelfId={shelfId}/>
    </div>
  )
}

export default AddBooks
