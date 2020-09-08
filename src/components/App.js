import React from 'react'
import CreateBookshelf from './CreateBookshelf'
import Bookshelf from './Bookshelf'
import AddBooks from './AddBooks'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

export default () => {
  return (
    <div className="ui container" style={{ marginTop: '20px'}}>
      <Router>
        <Route path="/" exact component={CreateBookshelf} />
        <Route path="/shelf/:id" component={Bookshelf}
        />
        <Route path="/addbooks/:id" component={AddBooks} />
      </Router>
    </div>
  )
}
