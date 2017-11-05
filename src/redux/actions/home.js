import * as Types from '../action-types';

//Types.SET_CURRENT_LESSON

export const setCurrentLesson=(val)=>{
    return {
        type:Types.SET_CURRENT_LESSON,
        val
    };
};