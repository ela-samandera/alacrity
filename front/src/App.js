import { createBrowserHistory } from 'history'
import React from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import urls from './common/urls'
import PageWrapper from './components/PageWrapper'
import Create from './views/Create'
import Edit from './views/Edit'
import List from './views/List'
import Page404 from './views/Page404'

const history = createBrowserHistory()

const App = () => {
  return (
    <Router history={history}>
      <PageWrapper>
        <Switch>
          <Route exact path={urls.list} component={List} />
          <Route path={urls.edit} component={Edit} />
          <Route path={urls.create} component={Create} />
          <Route component={Page404} />
        </Switch>
      </PageWrapper>
    </Router>
  )
}

export default App
