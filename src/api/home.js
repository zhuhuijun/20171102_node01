import {get} from './index';
let url = "http://localhost:3000";
//所有接口的方法都加s
/**
 * 获得轮播图
 */
export const getSliders=()=>{
    return get(url+'/slider');
};