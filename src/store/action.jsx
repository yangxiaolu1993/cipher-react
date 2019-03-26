import { GET_REPORT_DATA ,SET_AUTHED} from "./actionTypes";

// 设置authed
export const setAuthed = (isAuth=true,path='')=>{
    return {
        type:SET_AUTHED,
        data:{
            isAuth:isAuth,
            path:path
        }
    }
}

//获取初始财运指南和大报告
export const getReportData = (data)=>{
    return {
        type:GET_REPORT_DATA,
        data:data
    }
}
