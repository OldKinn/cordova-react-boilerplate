import random from 'lodash/random'
// 产生随机数字符串
export function randomID() {
    let {num, time} = {
        num: String(random(100, 999)),
        time: String(new Date().getTime())
    };
    return num + time;
}