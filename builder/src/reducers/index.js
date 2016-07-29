import {combineReducers} from 'redux'
import set from 'lodash/set'
import * as Const from 'commons/const'

// 页面展现的控制状态
function cache(state = {
    isLogin: false,
    // 界面是否被锁定
    isBlock: false,
    // 是否加载中
    isLoading: false,
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