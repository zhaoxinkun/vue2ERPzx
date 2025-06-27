// 统一接口地址
import http from "./restfulType"

// 用户登录推出
/**
 * @ params fromData
 * */
export const login = data => http.post(`/user/login`, data)

// 用户退出
export const logout = token => http.post(`/user/logout`, token)