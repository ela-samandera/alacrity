import { createBrowserHistory } from 'history'
import React from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

const history = createBrowserHistory()

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route
          render={() => (
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </header>
            </div>
          )}
        />
      </Switch>
    </Router>
  )
}

export default App;
