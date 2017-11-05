import  * as Types from '../action-types';
//首页所有的信息
let initState = {
    currentLesson:0
};
export  default function (state=initState,action) {
    switch (action.type)
    {
        case Types.SET_CURRENT_LESSON:
            return{
                ...state,currentLesson:action.val
            };
    }
    return state;
}