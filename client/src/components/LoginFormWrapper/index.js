/*
reason for this wrapper was to preserver how LoginForm comp. being called
*/

import React, { Component } from "react";
import LoginForm from '../LoginForm';

class LoginFormWrapper extends Component {

  render() {
    return(
        <div className="container">
          <LoginForm loginSubmit={() => { this.loginUser() }}/>
        </div>
    );
  }
}

export default LoginFormWrapper;
