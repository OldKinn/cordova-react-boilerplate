import {combineReducers} from 'redux'
import set from 'lodash/set'
import * as Const from 'commons/Const'

// 页面展现的控制状态
function cache(state = {
    isLogin: false,
    userName: 'Old King',
    mobile: '16888888888'
}, action) {
    switch (action.type) {
        case Const.ACTION_SET_CACHE:
            set(state, action.key, action.value);
            return state;
        default:
            return state
    }
}

const rootReducer = combineReducers({
    cache: cache
});

export default rootReducer