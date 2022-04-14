"use strict";
function createPromise(x, timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(x);
        }, timeout);
    });
}
createPromise('1', 100).then(value => console.log(value));
function createTuple2(v, v2) {
    return [v, v2];
}
const t1 = createTuple2('user1', 1000);
