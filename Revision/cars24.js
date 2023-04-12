// hoisting

function abc() {
    console.log(a) // undefined

    var a = 10
}
abc()

// Q2 implicit and explicit binding

var obj = {
    name: "Ish",
    display: function () {  //using arrow function
        console.log(this.name)
    }
}

var obj1 = {
    name: "ABC"
}

obj.display.call(obj1)

// Q3 Implement Caching / Memoize function

function myMemoize(fn, context) {
    const res = {}
    return function (...args) {
        var argsCache = JSON.stringify(args)
        if (!res[argsCache]) {
            res[argsCache] = fn.call(context || this, ...args)
        }

        return res[argsCache]
    }
}

const clumsysqr = (n1, n2) => {
    for (let i = 0; i <= 100000000; i++) {

    }
    return n1 * n2
}

const memoize = myMemoize(clumsysqr)

// console.time("1st call")
// console.log(clumsysqr(9467,7649))
// console.timeEnd("1st call")

console.time("1st call")
console.log(memoize(9467, 7649))
console.timeEnd("1st call")

console.time("2nd call")
console.log(clumsysqr(9467, 7649))
console.timeEnd("2nd call")

// Q4 op based event loop
console.log("a")
setTimeout(() => console.log("set"), 0)
Promise.resolve(() => console.log("pro")).then((res) => res())
console.log("b")

// a
// b
// pro
// set

// Q5 infinite currying

function add(a) {
    return function (b) {
        if (b)
            return add(a + b)

        return a
    }
}

console.log(add(5)(2)(4)(5)())

// Q6 implement this code

const calc = {
    total: 0,
    sum(a) {
        this.total += a
        return this
    },
    multiply(a) {
        this.total *= a
        return this
    },
    subtract() {
        this.total -= a
        return this
    }
}

const result = calc.sum(10).multiply(5).subtract(20).sum(25)
console.log(result.total)