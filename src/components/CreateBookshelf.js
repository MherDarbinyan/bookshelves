import React, { useState, useEffect } from 'react'
import Bookshelves from './Bookshelves'
import LocalStorageService from '../services/LocalStorageService'
import { connect } from 'react-redux'
import { addBookshelf, deleteBookshelf } from '../actions'

import shortid from 'shortid'

const CreateBookshelf = (props) => {
  console.log(localStorage)
  console.log("create bookshelves->", props.bookshelves);

  const [bookshelf, setBookshelf] = useState('')
  const [bookshelfArray, setBookshelfArray] = useState([])

  const itemName = "bookshelf"

  const handleAddNewBookshelf = () => {
    if(bookshelf === ''){
      return
    }
    const bookshelvesObj = {
      id: shortid.generate(),
      name: bookshelf
    }
    props.addBookshelf(bookshelvesObj)
    LocalStorageService.setItem(itemName, bookshelvesObj)
    setBookshelfArray(bookshelfArray => [...bookshelfArray, bookshelvesObj])

  }

  useEffect(()=> {
      const arr = LocalStorageService.getItem(itemName)
      setBookshelfArray(arr)
  }, [])

  const handleRemoveBookshelf = (bookshelf, id) => {
    const filtered = props.deleteBookshelf(bookshelf, id)
    LocalStorageService.replace(itemName, filtered)
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

const mapStateToProps = state => {
  return {
    bookshelves: state.bookshelves
  }
}

export default connect(
  mapStateToProps,
  {
    addBookshelf,
    deleteBookshelf
  }
)(CreateBookshelf)
