import React, { Component } from 'react';
import Login from './component/login/login';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <Route exact path="/login" component={Login} />
      </Router>
        <Login></Login>
      </div>
    );
  }
}

export default App;
