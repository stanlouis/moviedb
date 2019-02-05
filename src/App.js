/* eslint-disable import/no-named-as-default */
import React, { Fragment } from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';
import './App.css';
import logo from './moviedb.png';

import MoviesList from './MoviesList';
import MovieDetail from './MovieDetail';

const App = () => (
  <Fragment>
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <img src={logo} className="App-logo " alt="logo" />
          </Link>
        </header>
        <div className="container-fluid">
          <h1 className="text-center text-muted my-3 display-4">Available Now</h1>

          <Switch>
            <Route exact path="/" component={MoviesList} />
            <Route path="/:id" component={MovieDetail} />
          </Switch>
        </div>
      </div>
    </Router>
  </Fragment>
);

export default App;
