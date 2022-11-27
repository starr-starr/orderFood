// 防抖
export function debounce (func, time) {
    console.log('防抖； ');
    let timer = null;
    return function (e) {
        if (timer !== null) {
            clearTimeout(timer);
            timer = null;
        }
        timer = setTimeout(() => {
            func.call(this, e);
            timer = null;
        }, time);
    }
}
