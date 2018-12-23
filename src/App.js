import React, { Component } from 'react';
import Login from './component/login/login';
import './App.css';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './component/home/Home'
import PrivateRoute from './component/privateRouter/privateRouter'

const App = ({ authenticated, checked }) => (
  <Router>
    { checked &&
      <div>
        <PrivateRoute exact path="/" component={Home} authenticated={authenticated}/>
        <Route path="/login" component={Login}/>
      </div>
    }
  </Router>
);

const { bool } = PropTypes;

App.propTypes = {
  authenticated: bool.isRequired,
  checked: bool.isRequired
};

const mapState = ({ session }) => ({
  checked: session.checked,
  authenticated: session.authenticated
});
export default connect(mapState)(App);
