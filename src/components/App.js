import React, {useState} from 'react'
import Bookshelves from './Bookshelves'
import CreateBookshelf from './CreateBookshelf'

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

export default () => {
  return (
    <>
      <CreateBookshelf />
      <Bookshelves books={tempBooks} />
    </>
  )
}
