/**
 * 主要是用于进行全局的路由配置
 * 在redux中设置了authed属性，当authed为true时，代表从首页进入，而不是直接写路径。在正常开放过程中可以设置是否进行了登录
 * 并不是所有的页面都是需要登录验证的
 *
 */
import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import store from "../store";

class Config extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   默认的路由配置
      defaultRoute: {
        path: "/",
        exact: true,
        strict: true,
        sensitive: true,
        component: "",
        extra: { isAuth: true, exactProps: {} }
      }
    };
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {this.props.routes.map((route, index) => {
            let { component: Component, extra, ...rest } = Object.assign(
              this.state.defaultRoute,
              route
            );
            let { exactProps, isAuth } = extra;
            return (
              <Route
                key={index}
                {...rest}
                render={props => {
                  if (isAuth && store.getState().authed) {
                    /**
                     * 当此组件需要登录并且是从首页进入,跳转到相应组件
                     * {...props}  此处的props主要是利用组件传递路由跳转传参
                     * props=>[location,match,history]
                     */
                    return <Component {...props} {...exactProps} />;
                  } else {
                    /**
                     * 不符合登录要求重新定位到相应的组件(首页、404等)
                     */
                    return <Redirect to={store.getState().authPath} />;
                  }
                }}
              />
            );
          })}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Config;
