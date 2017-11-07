import * as Types from '../action-types';
//首页所有的信息
let initState = {
    currentLesson: 0,
    sliders: [],//轮播图数据
    lesson: {
        lessonList: [],
        hasMore: true,
        limit: 5,//每次给5条
        offset: 0,//偏移量
        isLoading: false//是否在加载
    }
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
        case Types.GET_LESSONS:
            return {
                ...state,
                lesson: {
                    ...state.lesson,
                    hasMore: action.hasMore,
                    lessonList: [...state.lesson.lessonList, ...action.lessons],
                    offset: state.lesson.offset + action.lessons.length,
                    isLoading: false
                }
            };
        case Types.SET_LOADINGSTATUS:
            return {
                ...state,
                lesson: {
                    ...state.lesson,
                    isLoading: true
                }
            }
    }
    return state;
};
