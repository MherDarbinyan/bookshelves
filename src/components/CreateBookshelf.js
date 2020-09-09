import React, { useState, useEffect } from 'react'
import Bookshelves from './Bookshelves'
import { useDispatch, useSelector } from 'react-redux'
import { addBookshelf, deleteBookshelf } from '../actions'

import shortid from 'shortid'

const CreateBookshelf = () => {
  const bookshelves = useSelector(state=>state.bookshelves)
  const dispatch = useDispatch()

  const [bookshelf, setBookshelf] = useState('')
  const [bookshelfArray, setBookshelfArray] = useState([])

  const handleAddNewBookshelf = () => {
    if(bookshelf === ''){
      return
    }
    const bookshelvesObj = {
      id: shortid.generate(),
      name: bookshelf
    }
    dispatch(addBookshelf(bookshelvesObj))
    setBookshelfArray(bookshelfArray => [...bookshelfArray, bookshelvesObj])

  }

  useEffect(()=> {
      setBookshelfArray(bookshelves)
  }, [])

  const handleRemoveBookshelf = (bookshelf, id) => {
    const filtered = dispatch(deleteBookshelf(bookshelf, id))
    setBookshelfArray(filtered)
  }

  return (
    <div className="ui form">
      <div className="field">
        <h1>Create a bookshelf</h1>
        <div style={{display: 'flex'}}>
          <input
            className="ui input"
            onChange={e => setBookshelf(e.target.value)}
          />
          <button
            className="ui button"
            onClick={handleAddNewBookshelf}
          >
            Create
          </button>
        </div>
      </div>
      <Bookshelves
        bookshelves={bookshelfArray}
        deleteBookshelf={handleRemoveBookshelf}
      />
    </div>
  )
}

export default CreateBookshelf
