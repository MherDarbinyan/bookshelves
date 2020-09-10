import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { addBook } from '../actions'
import {useDropzone} from 'react-dropzone'


const BookForm = (props) => {


  const onDrop = useCallback(acceptedFiles => {
    console.log("acceptedFiles", acceptedFiles);
    const reader = new FileReader()
    reader.onload = () => {
      const url = reader.result
      setBookInfo((book)=>{
        return {...book, image: url, imageName: acceptedFiles[0].name}
      })
      console.log(url)
    }
    reader.readAsDataURL(acceptedFiles[0])

  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})


  const dispatch = useDispatch()

  const [bookInfo, setBookInfo] = useState({
    title: '',
    image: '',
    imageName: '',
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
            <div
              className="ui input"
              style={{
                border: '1px solid rgba(34,36,38,.15)',
                borderRadius: '.28571429rem',
                height:'40px'
              }}
                {...getRootProps()}
              >
              {bookInfo.image ? <p>{bookInfo.imageName}</p> : null}
              <input

                {...getInputProps()}
                required
              />
            </div>
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
