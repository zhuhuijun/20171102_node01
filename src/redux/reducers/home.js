import * as Types from '../action-types';
//首页所有的信息
let initState = {
    currentLesson: 0,
    sliders: []//轮播图数据
};
export default function (state = initState, action) {
    switch (action.type) {
        case Types.SET_CURRENT_LESSON:
            return {
                ...state, currentLesson: action.val
            };
        case Types.GET_SLIDERS:
            return {
                ...state, sliders: action.sliders
            };
    }
    return state;
}