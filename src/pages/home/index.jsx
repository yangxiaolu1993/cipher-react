import React, { Component } from "react";
import IndexUI from "./indexUI";
import "./index.less";
import store from "../../store";

class Home extends Component {
  constructor(props) {
    super(props);
    this.storeChange = this.storeChange.bind(this);
    this.depthRoute = this.depthRoute.bind(this);
    this.state = {};

    store.subscribe(this.storeChange);
  }
  render() {
    return (
      <IndexUI
        fortune={store.getState().fortune}
        depth={store.getState().depth}
        depthRoute={this.depthRoute}
      />
    );
  }
  // 深度报告跳转
  depthRoute(index) {
    let url = "";
    switch (index) {
      case "rml001":
        url = "/lover";
        break;
      case "rms001":
        url = "/lover";
        break;
      case "21":
        url = "/lover";
        break;
      default:
        url = "/";
    }
    // this.props.history.push(url+'/21')
    this.props.history.push({
      pathname:url,
      state:{
        id:index
      }
    });
  }
  storeChange() {
    this.setState(store.getState());
  }
}

export default Home;
