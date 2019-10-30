import React, { Component } from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";
import HomePage from './components/HomePage';
import RegisterForm from './components/RegisterForm';
import LoginFormWrapper from './components/LoginFormWrapper';

class App extends Component {

  render() {
    return (
        <div className="container">
          <Router>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/register-form" exact component={RegisterForm} />
              <Route path="/login" exact component={LoginFormWrapper} />
            </Switch>
          </Router>
        </div>
    );
  }
}

export default App;
