import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addBook } from '../actions'

const BookForm = (props) => {
  const dispatch = useDispatch()

  const [bookInfo, setBookInfo] = useState({
    title: '',
    image: '',
    author: '',
    isbn: '',
    shelfId: props.shelfId
  })

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setBookInfo((book)=>{
      return {...book, [name]: value}
    })
  }

  const handleAddNewBook = () => {
    const {title, image, author, isbn} = bookInfo
    if (title === '' && image === '' && author === '' && isbn === '') {
      return
    }
    dispatch(addBook(bookInfo))
  }

    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Title</label>
            <input type="text" name="title" onChange={handleChange} required/>
            <label>Image</label>
            <input type="text" name="image" onChange={handleChange} required/>
            <label>Author Name</label>
            <input type="text" name="author" onChange={handleChange} required/>
            <label>ISBN</label>
            <input type="number" name="isbn" onChange={handleChange} required/>
          </div>
          <button
            type="submit"
            className="ui primary basic button"
            onClick={handleAddNewBook}
          >
            Add Book
          </button>
        </form>
      </div>
    )
}

export default BookForm
