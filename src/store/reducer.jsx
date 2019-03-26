import { GET_REPORT_DATA,SET_AUTHED } from "./actionTypes";

const defaultState = {
  authed:false, //判断是否是从首页进入，如果不是返回首页
  authPath:'/', //设置未从首页进入返回的页面
  fortune: [],
  depth:[]
};
const reducer = (state = defaultState, action) => {
  if(action.type === GET_REPORT_DATA){
    let newState = Object.assign({},state)
    newState.fortune = [...action.data.goods_mini_report_info_set]
    newState.depth = [...action.data.goods_report_info_set]
    return newState;
  }
  if(action.type === SET_AUTHED){
    let newState = Object.assign({},state)
    newState.authed = action.data.isAuth
    newState.authPath = action.data.path || newState.authPath
    return newState;
  }
  return state;
};

export default reducer;
