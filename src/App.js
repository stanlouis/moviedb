import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import logo from './moviedb.png';

import MoviesList from './MoviesList';

const App = () => (
  <div>
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo " alt="logo" />
        </header>
        <div className="container">
          <h1 className="text-center my-3 display-4">The Movie Database</h1>

          <Switch>
            <Route exact path="/" component={MoviesList} />
          </Switch>
        </div>
      </div>
    </Router>
  </div>
);

export default App;
