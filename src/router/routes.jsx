import Home from "../pages/home";
import Lover from "../pages/lover";

/**
 * 设置跳转的路由，分两部分（路由基础设置、额外设置）
 * 路由的基础（也就是route组件的基础设置）
 *  --path：string  路由有效的 URL 路径
 *  --exact：Bool   是否在path完全匹配location.pathname是跳转
 *  --component:跳转的组件
 * 额外设置
 *  --isAuth:是否需要登录
 *  --exactProps：object 跳转组件时，组件需要传递的属性
 */
export const routes = [
  // 首页
  {
    path: "/",
    exact: true,
    component: Home,
    extra: { isAuth: true, exactProps: {} }
  },
  //夫妻恋人报告
  {
    path: "/lover",
    exact: true,
    component: Lover,
    extra: { isAuth: true, exactProps: {} }
  }
];
