import React, { Component } from "react";
import store from '../../store';
import InterServer from '../../static/config/server';
import IndexUI from './indexUI'
import "./index.less";

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      fortune:[...store.getState().fortune]
    }
  }
  render() {
    return (
      <IndexUI fortune={this.state.fortune}></IndexUI>
    );
  }
  componentDidMount(){
    InterServer.codeReading({
      id:1
    }).then((res)=>{
      console.log(res)
    })
  }
}

export default Home;
