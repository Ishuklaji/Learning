// Q1 map vs forEach
const a = [2, 5, 3, 4, 7]

const res1 = a.map((ar) => {
    return ar + 2
})

const res2 = a.forEach((ar, i) => {
    a[i] = ar + 2   //does'nt return anything
})

console.log(res1, res2)

// Q2 null vs undefined
console.log(typeof (null)) //object //null is actual value
console.log(typeof (undefined))  //undefined // declared but not initialized

console.log(null == undefined)  //true
console.log(null === undefined)  //false

// Q3 explain event delegation
document.querySelector("#products").addEventListener("click", (event) => {
    console.log(event)

    if (event.target.tagName === "LI") {
        window.location.href += "#" + event.target.id
    }
})

// Q4 flatten the array
let ar = [
    [1, 2],
    [3, 4],
    [5, 6, 7, 8, 9],
    [6, 7, 8]
]

// [1,2,3,4,5,6,7,8,9,6,7,8]

let flat = [].concat(...ar)

console.log(ar.flat())

function customflat(ar, depth = 1) {
    let result = []
    ar.forEach(arr => {
        if (Array.isArray(arr) && depth > 0) {
            result.push(...customflat(arr, depth - 1))
        }
        else
            result.push(arr)
    })
    return result
}
console.log(customflat(ar, 2))

// round 2
// Q1 var vs let vs const

// Q2 setTimeout op
function f9() {
    for (var i = 0; i < 3; i++) {
        setTimeout(function log() {
            console.log(i)   // 3 bcz var is func scoped not blocked scoped
        }, i * 1000)
    }
}

f()

// Q 3 explain call , apply , bind

var pr = {
    name: "Ish",
    hello: function (thing) {
        console.log(this.name + " Hello" + thing)
    }
}

var alt = {
    name: "Sindhu"
}

pr.hello.call(alt, "Duniya")

pr.hello.apply(alt, ["World"])

const npr = pr.hello.bind(alt)
npr("World")

pr.hello("Mundo")

// Q4 composition polyfill

function add(a) {
    return a + 5;
}

function sub(a) {
    return a - 5;
}

function mul(a) {
    return a * 5;
}

const compose = (...func) => {
    return (args) => {
        return func.reduceRight((args, func) => func(args), args)
    }
}

const eval = compose(add, sub, mul);
console.log(eval(5));

// Q 6 implement promise.all

function showT(text, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text)
        }, time)
    })
}

function mypr(promise) {
    let result = []
    return new Promise((resolve, reject) => {
        promise.forEach((p, index) => {
            p.then(res => {
                result.push(res)
                if (index === promise.length - 1) {
                    resolve(result)
                }
            }).catch((err) => reject(err))
        })
    })
}

mypr([
    showT("hello", 1000),
    Promise.resolve("hi"),
    // Promise.reject("bye")
]).then((value) => console.log(value))