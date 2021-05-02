const initialState = {
    // name: 'jyryuitpro',
    // age: 33,
    // password: '1234',
    user: {
        isLoggedIn: false,
        user: null,
        signUpData: {},
        loginData: {},
    },
    post: {
        mainPosts: [],
    },
};

export const loginAction = (data) => {
    return {
        type: 'LOG_IN',
        data,
    }
};

export const logoutAction = () => {
    return {
        type: 'LOG_OUT',
    }
};

// const CHANGE_NICKNAME = {
//     type: 'CHANGE_NICKNAME',
//     data: 'boogijyryuitpro',
// };

// action creator
const changeNickname = (data) => {
    return {
        type: 'CHANGE_NICKNAME',
        data,
    };
};

changeNickname('boogijyryuitpro');

// store.dispatch(changeNickname('boogijyryuitpro'));

// (이전상태, 액션) => 다음상태
const rootReducer = ((state = initialState, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return {
                ...state,
                user: {
                    ...state.user,
                    isLoggedIn: true,
                    user: action.data,
                }
            };
        case 'LOG_OUT':
            return {
                ...state,
                user: {
                    ...state.user,
                    isLoggedIn: false,
                    user: null,
                }
            };
    }
});

export default rootReducer;