
import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import RegisterForm from '../RegisterForm';
import LoginFormWrapper from '../LoginFormWrapper';
import Navz from '../Navz';



function HomePage() {
  return(
    <Router>
      <div>
        <Navz />
        <Switch>
          {/* <Route path="/" exact component={HomePage} /> */}
          <Route path="/register-form" exact component={RegisterForm} />
          <Route path="/login" exact component={LoginFormWrapper} />
        </Switch>
      </div>
    </Router>
  );
}

export default HomePage;

