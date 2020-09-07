import React from 'react'

const tempBooks = [
  {
    title: 'Moby Dick',
    image: 'src',
    author: 'Herman Melville',
    isbn: '123123123455'
  },
  {
    title: 'Master and Margarita',
    image: 'src',
    author: 'Michail Bulgakov',
    isbn: '1231321314141'
  },
  {
    title: 'Samvel',
    image: 'src',
    author: 'Raffi',
    isbn: '5645621341l098'
  }
]

const DisplayBooks  = () => {

  const renderBooks = tempBooks.map(book => {
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
