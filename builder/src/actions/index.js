import * as Const from 'commons/Const'

// 设置页面级的缓存
export function setCache(key, value) {
    return {type: Const.ACTION_SET_CACHE, key, value};
}