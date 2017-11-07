import {get} from './index';

let url = "http://localhost:3000";
//所有接口的方法都加s
/**
 * 获得轮播图
 */
export const getSliders = () => {
    return get(url + '/slider');
};
/**
 * 获得课程数据
 * @param type
 * @param offset
 * @param limit
 */
export const getLessons = (type, offset, limit) => {
    return get(url + `/lessonList/${type}/${offset}/${limit}`);
};