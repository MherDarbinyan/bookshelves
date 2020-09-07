import React from 'react'

const Bookshelf = (props) => {
  const shelfName = props.match.params.name
  return (
    <div>
      <div>{shelfName}</div>
      <button>Add books</button>
    </div>
  )
}

export default Bookshelf
