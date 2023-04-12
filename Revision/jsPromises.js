// What are Promises ?
// According to MDN The Promise object represents the eventual completion(or failure) of an 
// asynchronous operation and its resulting value.

// Basically it allows you to add handlers with an asynchronous action's eventual success value or failure.
//  So you get the result with little bit of delay which is a promise which will give the result at some point.

// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.
// If you want to know all about Promises in a video format here is the video link

// Promises and Interview questions

// So why polyfills for promises ? To know about the internal working of Promises.

// A promise looks like 👇🏼

let promise = new Promise((resolve, reject) => setTimeout(() => resolve(100), 3000));

// tasks to be completed after promise resolution

promise.then((val) => console.log(val)).catch(err => console.log(err));


function PromisePolyFill(executor) {
    let onResolve,
        onReject,
        fulfilled = false,
        rejected = false,
        called = false,
        value;

    function resolve(v) {
        fulfilled = true;
        value = v;

        if (typeof onResolve === "function") { // for async
            console.log("inside resolve")
            onResolve(value);
            called = true;
        }
    }

    function reject(reason) {
        rejected = true;
        value = reason;

        if (typeof onReject === "function") {
            onReject(value);
            called = true;
        }
    }

    this.then = function (callback) {
        onResolve = callback;

        if (fulfilled && !called) { // for sync
            console.log("inside then")
            called = true;
            onResolve(value);
        }
        return this;
    };

    this.catch = function (callback) {
        onReject = callback;

        if (rejected && !called) {
            called = true;
            onReject(value);
        }
        return this;
    };

    try {
        executor(resolve, reject);
    } catch (error) {
        reject(error);
    }
}

// Q 1
const promise1 = new PromisePolyFill((resolve, reject) => {
    console.log(1)
    setTimeout(() => {
        resolve(2)
    }, 1000);
    console.log(3)
})

promise1.then(res => {
    console.log(res)
});


// Implementing PromisePolyFill.resolve and PromisePolyFill.reject
// resolve and reject are simple which will return a PromisePolyfill object having an executor which will
//  either resolve or reject.

PromisePolyFill.resolve = (val) =>
    new PromisePolyFill(function executor(resolve, _reject) {
        resolve(val);
    });

PromisePolyFill.reject = (reason) =>
    new PromisePolyFill(function executor(resolve, reject) {
        reject(reason);
    });


// Promise.all Polyfill
// Promise.all takes an array of promises as an input, and returns a single Promise that resolves
//  to an array of the results of the input promises.

// Here again we create our own executor function, and return back our promise object which would
//  take in this executor.

// We create an array named fulfilledPromises and push values to it whenever any promise is resolved.
// If all promises are resolved(fulfilledPromises.length === promises.length) we invoke resolve.
// If any promise is rejected we invoke the reject

PromisePolyFill.all = (promises) => {
    let fulfilledPromises = [],
        result = [];

    function executor(resolve, reject) {
        promises.forEach((promise, index) =>
            promise
                .then((val) => {
                    fulfilledPromises.push(true);
                    result[index] = val;

                    if (fulfilledPromises.length === promises.length) {
                        return resolve(result);
                    }
                })
                .catch((error) => {
                    return reject(error);
                })
        );
    }
    return new PromisePolyFill(executor);
};


// Promise.race Polyfill
// Promise.race() returns the first settled value(either fulfillment or rejection).
// It takes an iterable object as input like array.

export function promiseRace(promisesArray) {
    return new Promise((resolve, reject) => {
        promisesArray.forEach((promise) => {
            promise
                .then(resolve) // resolve outer promise, as and when any of the input promise resolves
                .catch(reject); // reject outer promise, as and when any of the input promise rejects
        });
    });
}


// Promise.allSettled Polyfill
// The Promise.allSettled() method returns a promise that fulfills after all of the given promises
// have either fulfilled or rejected, with an array of objects that each describes the outcome of each promise.

// It is used when you have multiple asynchronous tasks that are not dependent on one another to 
// complete successfully, or you'd always like to know the result of each promise.

function allSettled(promises) {
    let mappedPromises = promises.map((p) => {
        return p.then((value) => {
            return {
                status: 'fulfilled',
                value,
            };
        })
            .catch((reason) => {
                return {
                    status: 'rejected',
                    reason,
                };
            });
    });
    return Promise.all(mappedPromises);
};


// Promise.any() Polyfill
// 1 Promise.any() takes an iterable of Promise objects which is promises in our polyfill.
// It returns a single promise that fulfills as soon as any of the promises in the iterable fulfills, 
//  with the value of the fulfilled promise.
// 2 If no promises in the iterable fulfill(if all of the given promises are rejected), then the returned
// promise is rejected with an AggregateError, a new subclass of Error that groups together individual errors.

function any(promises) {
    let results = [];
    var counter = 0;

    return new Promise((resolve, reject) => {
        promises.forEach((p, index) => {
            p.then((result) => {
                resolve(result)
            }).catch((err) => {
                results.push(err);
                ++counter;
                if (counter === promises.length) {
                    reject(results);
                }
            });
        });
    });
};


// Q 3 
console.log("start")
const fu = () => {
    new Promise((resolve, reject) => {
        console.log(1)
        resolve("success")
    })
}

console.log("middle")

fu().then((res) => {
    console.log(res)
})

console.log("end")

// Q4 Promise Chaining

const firstpr = new Promise((resolve, reject) => {
    resolve("First")
})

const secondpr = new Promise((resolve, reject) => {
    resolve(firstpr)
})

secondpr.then((res) => {
    return res
})
    .then((res) => {
        console.log(res)
    })

// Q5 async await instead of then catch

async function load(url) {
    let res = await fetch(url)

    if (res.status == 200) {
        let json = await res.json()
        return json
    }

    throw new Error(res.status)
}

load("http://google.com/search").catch((err) => {
    console.log(err)
})


// Q6 solve promise recursively

function subs(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${username}`)
        }, 1000)
    })
}

function like(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${video}`)
        }, 1000)
    })
}

function share(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${video}`)
        }, 1000)
    })
}

function promrecurse(funcpr) {
    if (funcpr.length === 0) return

    const curp = funcpr.shift()

    curp.then((res) => console.log(res)).catch((err) => console.log(err))

    promrecurse(funcpr)
}

promrecurse([
    subs("TED"),
    like("TED"),
    share("TED"),
])