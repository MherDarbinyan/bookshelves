import React, { Component } from 'react'

class BookForm extends Component {
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Title</label>
            <input type="text" />
            <label>Image</label>
            <input type="text" />
            <label>Author Name</label>
            <input type="text" />
            <label>ISBN</label>
            <input type="text" />
          </div>
        </form>
        <button type="submit">Add Book</button>
      </div>
    )
  }
}

export default BookForm
