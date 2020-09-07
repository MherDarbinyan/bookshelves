import React from 'react'
import DisplayBooks from './DisplayBooks'

const Bookshelves = (props) => {
  return (
    <div>
      <DisplayBooks books={props.books}/>
    </div>
  )
}

export default Bookshelves
