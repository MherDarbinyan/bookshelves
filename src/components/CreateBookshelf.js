import React, { useState, useEffect } from 'react'
import Bookshelves from './Bookshelves'

const CreateBookshelf = () => {
  console.log(localStorage)
  const initialState = () => localStorage.getItem('bookshelf') || ''
  const [bookshelf, setBookshelf] = useState(initialState)
  const [bookshelfArray, setBookshelfArray] = useState([])

  const handleAddNewBookshelf = () => {
    setBookshelfArray(bookshelfArray => [...bookshelfArray, bookshelf])
  }

  const handleChange = e => {
    localStorage.setItem('bookshelf', e.target.value)
    setBookshelf(e.target.value)
  }

  useEffect(()=> {
    localStorage.setItem("bookshelf", bookshelf)
  }, [bookshelf])

  return (
    <div className="ui form">
      <div className="field">
        <label>Create a bookshelf</label>
        <input
          className="input"
          onChange={handleChange}
        />
        <button onClick={handleAddNewBookshelf}>Create</button>
      </div>
      <Bookshelves bookshelves={bookshelfArray}/>
    </div>
  )
}

export default CreateBookshelf
