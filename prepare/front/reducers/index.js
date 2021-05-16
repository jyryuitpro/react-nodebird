import {HYDRATE} from "next-redux-wrapper";
import {combineReducers} from "redux";

import user from './user';
import post from './post';

// const initialState = {
    // name: 'jyryuitpro',
    // age: 33,
    // password: '1234',
    // user: {

    // },
    // post: {

    // },
// };

// const CHANGE_NICKNAME = {
//     type: 'CHANGE_NICKNAME',
//     data: 'boogijyryuitpro',
// };

// action creator
// const changeNickname = (data) => {
//     return {
//         type: 'CHANGE_NICKNAME',
//         data,
//     };
// };

// changeNickname('boogijyryuitpro');

// store.dispatch(changeNickname('boogijyryuitpro'));

// (이전상태, 액션) => 다음상태
const rootReducer = combineReducers({
    index: (state = {}, action) => {
        switch (action.type) {
            case HYDRATE:
                console.log('HYDRATE', action);
                return {...state, ...action.payload};
            default:
                return state;
        }
    },
    user,
    post,
});

export default rootReducer;