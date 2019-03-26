import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from '../pages/home';
import Lover from '../pages/lover';

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact={true} component={Home} />
          <Route path="/lover" exact={true} component={Lover} />
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
