import React from 'react'

const DisplayBooks  = ({books}) => {

  const renderBooks = books.map(book => {
    return (
      <div key={book.title}>
        <h2>{book.title}</h2>
        <h3>{book.author}</h3>
        <img src={`${book.img}`} alt= {`${book.title}`}/>
        <p>{`ISBN: ${book.isbn}`}</p>
      </div>
    )
  })

  return (
    <div>
      {renderBooks}
    </div>
  )
}

export default DisplayBooks
