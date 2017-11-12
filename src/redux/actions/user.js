import {regs, auths, logins} from '../../api/user';
import * as Types from '../action-types';
import util from '../../common/utils';
import {push} from 'react-router-redux';

/**
 * 注册的方法
 * @param userInfo
 */
export const reg = (userInfo) => (dispatch) => {
    regs(userInfo).then(data => {
        // console.info(data);
        if (data.err) {
            dispatch({
                type: Types.SET_ERROR,
                error: data.err
            })
        } else {
            util.set('user', data);
            dispatch({
                type: Types.SET_USER_INFO,
                userInfo: data
            });
            dispatch(push('/lesson'));
        }
    });
};
/**
 * 验证登录的操作
 */
export const auth = () => (dispatch) => {
    auths().then(data => {
        if (data.username) {
            util.set('user', data);
            dispatch({
                type: Types.SET_USER_INFO,
                userInfo: data
            })
        } else {
            //没登录去登录页
        }
    });
};
/**
 * 验证是否登录的方法
 */
export const validate = () => (dispatch) => {
    auths().then(data => {
        if (data.username) {
            util.set('user', data);
            dispatch({
                type: Types.SET_USER_INFO,
                userInfo: data
            });
            dispatch(push('/lesson'));
        }
    });
};
/***
 * 登陆
 * @param userInfo
 */
export const login = (userInfo) => (dispatch) => {
    logins(userInfo).then(data => {
        console.info(data);
        if (data.err) {
            dispatch({
                type: Types.SET_ERROR,
                error: data.err
            })
        } else {
            util.set('user', data);
            dispatch({
                type: Types.SET_USER_INFO,
                userInfo: data
            });
            dispatch(push('/lesson'));
        }
    });
};