import React, { useState, useEffect } from 'react'
import Bookshelves from './Bookshelves'
import shortid from 'shortid'

const CreateBookshelf = () => {

  const [bookshelf, setBookshelf] = useState('')
  const [bookshelfArray, setBookshelfArray] = useState([])

  const getBookshelvesFromLS = () => {
    const getBookshelf = localStorage.getItem("bookshelf")
    let arr = []
    if (getBookshelf) {
      arr = JSON.parse(getBookshelf)
    }
    return arr
  }

  const handleAddNewBookshelf = () => {
    const bookshelvesObj = {
      id: shortid.generate(),
      name: bookshelf
    }
    const arr = getBookshelvesFromLS()
    localStorage.setItem("bookshelf", JSON.stringify([...arr, bookshelvesObj]))
    setBookshelfArray(bookshelfArray => [...bookshelfArray, bookshelvesObj])
  }

  useEffect(()=> {
      const arr = getBookshelvesFromLS()
      setBookshelfArray(arr)
  }, [])

  const handleRemoveBookshelf = (id) => {
    const filtered = bookshelfArray.filter(bookshelf => id !== bookshelf.id)
    localStorage.setItem("bookshelf", JSON.stringify(filtered))
    setBookshelfArray(filtered)
  }

  return (
    <div className="ui form">
      <div className="field">
        <label>Create a bookshelf</label>
        <input
          className="input"
          onChange={e => setBookshelf(e.target.value)}
        />
        <button onClick={handleAddNewBookshelf}>Create</button>
      </div>
      <Bookshelves
        bookshelves={bookshelfArray}
        deleteBookshelf={handleRemoveBookshelf}
      />
    </div>
  )
}

export default CreateBookshelf
