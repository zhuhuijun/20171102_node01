import {post,get} from './index';
import * as Config from './const';

/***
 * 注册的方法
 * @param userInfo
 */
export const  regs=(userInfo)=>{
    return post(Config.SERVER_URL+'/reg',userInfo);
};
/**
 * 验证是否登录
 */
export const auths=()=>{
  return get(Config.SERVER_URL+'/auth');
};
/***
 * 登录接口
 * @param userInfo
 */
export const logins = (userInfo)=>{
    return post(Config.SERVER_URL+'/login',userInfo);
};