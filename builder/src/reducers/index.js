import {combineReducers} from 'redux'
import set from 'lodash/set'
import clone from 'lodash/clone'
import * as Const from 'commons/const'
import utils from 'commons/utils'

// 页面展现的控制状态
function cache(state = {
    isLogin: false,
    // 界面是否被锁定
    isBlock: false,
    // 是否加载中
    isLoading: false,
    // 用户姓名
    userName: 'Old King',
    // 手机号码
    mobile: utils.getStorage('mobile', '16888888888')
}, action) {
    switch (action.type) {
        case Const.ACTION_SET_CACHE:
            let next = clone(state);
            set(next, action.key, action.value);
            return next;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    cache: cache
});

export default rootReducer