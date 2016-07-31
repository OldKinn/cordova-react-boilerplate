import random from 'lodash/random'
import get from 'lodash/get'
import set from 'lodash/set'

// 产生随机数字符串
export function randomID() {
    let {num, time} = {
        num: String(random(100, 999)),
        time: String(new Date().getTime())
    };
    return num + time;
}

// 使用本地存储
export function setStorage(key, value) {
    let json = window.localStorage.getItem('cordova.react');
    if (!json || typeof json !== 'string') {
        json = JSON.stringify({});
    }
    let storage = JSON.parse(json);
    set(storage, key, value);
    window.localStorage.setItem('cordova.react', JSON.stringify(storage));
}

// 获取本地存储
export function getStorage(key, defaultValue) {
    let json = window.localStorage.getItem('cordova.react');
    let storage = JSON.parse(json);
    return get(storage, key, defaultValue);
}