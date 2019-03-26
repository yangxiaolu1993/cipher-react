import React, { Component } from "react";
import Router from './router';
import store from './store';
import { getReportData,setAuthed } from "./store/action";
import InterServer from './static/config/server';

import './mock';

class App extends Component {
  render() {
    return (
      <Router></Router>
    );
  }
  componentDidMount(){
    //设置authed为true
    store.dispatch(setAuthed())
    // 获取全局的财运指南、大报告
    InterServer.reportList().then((res)=>{
      let data = res.data.data
      store.dispatch(getReportData(data))
    })
  }
}

export default App;
