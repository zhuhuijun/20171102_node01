import * as Types from '../action-types';
let initState={
    userInfo:{},
    error:''
};

export default function (state=initState,action) {
    switch (action.type){
        case Types.SET_ERROR:
            return{...state,error:action.error};
        case Types.SET_USER_INFO:

            return {
                ...state,
                userInfo:action.userInfo,
                error:''
            };
    }
    return state;
}