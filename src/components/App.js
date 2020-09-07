import React from 'react'
import CreateBookshelf from './CreateBookshelf'
import EditBookshelf from './EditBookshelf'
import Bookshelf from './Bookshelf'

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

export default () => {
  return (
    <div className="ui container" style={{ marginTop: '20px'}}>
      <Router>
        <Route path="/" exact component={CreateBookshelf} />
        <Route path="/shelf/:name" component={Bookshelf} />
        <Route path="/edit" component={EditBookshelf} />
      </Router>
    </div>
  )
}
