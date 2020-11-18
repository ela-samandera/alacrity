import { createBrowserHistory } from 'history'
import React from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import urls from './common/urls'
import Create from './views/Create'
import Edit from './views/Edit'
import List from './views/List'
import Page404 from './views/Page404'
import './App.css'

const history = createBrowserHistory()

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={urls.list} component={List} />
        <Route path={urls.edit} component={Edit} />
        <Route path={urls.create} component={Create} />
        <Route component={Page404} />
      </Switch>
    </Router>
  )
}

export default App
