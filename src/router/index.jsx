import React, { Component } from "react";
import RouterConfig from './config'
import {routes} from './routes'

class Router extends Component {
  render() {
    return (
      <RouterConfig routes={routes}></RouterConfig>
    );
  }
}

export default Router;
