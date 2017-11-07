import * as Types from '../action-types';
import {getSliders, getLessons} from '../../api/home'
//Types.SET_CURRENT_LESSON

export const setCurrentLesson = (val) => {
    return {
        type: Types.SET_CURRENT_LESSON,
        val
    };
};
//如果使用reduxThunk actionCreater可以返回一个函数
//函数中有dispatch参数
export const getSlider = () => (dispatch) => {
    getSliders().then(sliders => {
        dispatch({
            type: Types.GET_SLIDERS,
            sliders
        })
    });
};

export const getLesson = () => (dispatch, getState) => {
    //从redux取得参数 limit ,offset,limit getState = store.getState;
    let {currentLesson, lesson: {hasMore, limit, offset}} = getState().home;
    if (!hasMore) return;
    //isLoading 改为true
    dispatch({type: Types.SET_LOADINGSTATUS});
    getLessons(currentLesson, offset, limit).then(lesson => {
        dispatch({
            type: Types.GET_LESSONS,
            /*hasMore:lesson.hasMore,
            lessons:lesson.lessons*/
            ...lesson
        })
    });
};