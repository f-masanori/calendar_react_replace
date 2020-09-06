/* eslint-disable react/jsx-key, react/jsx-props-no-spreading, jsx-a11y/alt-text */
import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { Redirect, Switch } from 'react-router';
import Login from './component/Login';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello, !</p>
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Login} />
          </Switch>
        </Router>
      </header>
    </div>
  );
};

export default App;
