function createPromise<T>(x: T, timeout: number) {
    return new Promise<T>((resolve, reject) => {
        setTimeout(() => {
            resolve(x);
        }, timeout);
    });
}

createPromise('1', 100).then(value => console.log(value));

function createTuple2<T, U>(v: T, v2: U): [T, U] {
    return [v, v2];
}
const t1 = createTuple2('user1', 1000);
