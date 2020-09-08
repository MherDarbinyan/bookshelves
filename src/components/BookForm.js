import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LocalStorageService from '../services/LocalStorageService'

const BookForm = ({shelfId}) => {

  const itemName = "book"

  const [bookInfo, setBookInfo] = useState({
    title: '',
    image: '',
    author: '',
    isbn: '',
    shelfId
  })

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setBookInfo((book)=>{
      return {...book, [name]: value}
    })
  }

  const handleAddNewBook = () => {
    LocalStorageService.setItem(itemName, bookInfo)
  }

    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Title</label>
            <input type="text" name="title" onChange={handleChange} />
            <label>Image</label>
            <input type="text" name="image" onChange={handleChange}/>
            <label>Author Name</label>
            <input type="text" name="author" onChange={handleChange}/>
            <label>ISBN</label>
            <input type="number" name="isbn" onChange={handleChange}/>
          </div>
          <button
            type="submit"
            className="ui primary basic button"
            onClick={handleAddNewBook}
          >
            Add Book
          </button>
        </form>
        <div>
          <Link to={`/shelf/${shelfId}`}>
            <button className="ui positive basic button">
              Back to shelf
            </button>
          </Link>
        </div>
      </div>
    )
}

export default BookForm
