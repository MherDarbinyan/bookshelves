import React, { useState, useEffect } from 'react'
import Bookshelves from './Bookshelves'
import LocalStorageService from '../services/LocalStorageService'

import shortid from 'shortid'

const CreateBookshelf = () => {

  const [bookshelf, setBookshelf] = useState('')
  const [bookshelfArray, setBookshelfArray] = useState([])

  const itemName = "bookshelf"

  const handleAddNewBookshelf = () => {
    const bookshelvesObj = {
      id: shortid.generate(),
      name: bookshelf
    }
    LocalStorageService.setItem(itemName, bookshelvesObj)
    setBookshelfArray(bookshelfArray => [...bookshelfArray, bookshelvesObj])
  }

  useEffect(()=> {
      const arr = LocalStorageService.getItem(itemName)
      setBookshelfArray(arr)
  }, [])

  const handleRemoveBookshelf = (id) => {
    const filtered = bookshelfArray.filter(bookshelf => id !== bookshelf.id)
    LocalStorageService.replace(itemName, filtered)
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
