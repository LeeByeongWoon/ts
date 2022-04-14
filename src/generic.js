function createPromise(x, timeout) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(x);
        }, timeout);
    });
}
createPromise('1', 100).then(function (value) { return console.log(value); });
function createTuple2(v, v2) {
    return [v, v2];
}
var t1 = createTuple2('user1', 1000);
