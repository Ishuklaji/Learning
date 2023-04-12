// Closures in javascript

// Closure is a combination of function bundled together with it's lexical environment.
//  It is a function that references variables in the outer scope from it's inner scope

// To know more about Closures we need to know about Lexical scope.

// What is Lexical scope ?
// A Lexical scope in JavaScript means that a variable defined outside a function can be 
// accessible inside another function defined after the variable declaration.
// But the opposite is not true; the variables defined inside a function will not be accessible 
// outside that function.

// Why do we use Closures ?
// Closures makes it possible for a function to have "private" variables.
// JavaScript closure is used to control what is and isn't in scope in a particular function,
//  along with which variables are shared between sibling functions in the same containing scope.


function makeFunc() {
    const name = 'Mozilla';
    function displayName() {
        console.log(name);
    }
    return displayName;
}

const myFunc = makeFunc();
myFunc();


//  Closures scope chain

// Every closure has three scopes:
// 1 Local scope (Own scope)
// 2 Enclosing scope (can be block, function, or module scope)
// 3 Global scope

// global scope
const e = 10;
function sum(a) {
    return function (b) {
        return function (c) {
            // outer functions scope
            return function (d) {
                // local scope
                return a + b + c + d + e;
            };
        };
    };
}

console.log(sum(1)(2)(3)(4)); // 20

// Mostly asked Interview Questions for Closures
// 1. What are the advantages of Closures ?
// There are several advantages of using closures in JavaScript.Some of them are:

// Closure enables the use of nested functions that are used to get the values created in the
//  execution context of that of the parent function.
// They can prove as a perfect solution while solving a problem of hierarchy in any program.
// They have huge importance as far as functional programming is concerned.
// It solves the for loop problem of functional programming.
// It is also used to simulate private scope for variables.
// 2. What is the difference between closure and scope ?

// When you declare a variable in a function, you can only access it in the function.
//  These variables are said to be scoped to the function.If you define any inner function 
// within another function, this inner function is called a closure.It retains access to the
//  variables created in the outer function.

// Whereas a scope in JavaScript defines what variables you have access to.There are two kinds of
//  scope – global scope and local scope.


// Q1. what will be logged to the console

let c = 0
    (function printC() {
        if (c === 0) {
            let c = 1  // shadowing
            console.log(c)  //1
        }
        // c = 0
        console.log(c) // 0
    })()

// Q2. write a function that would allow you to do this

function createBase(n) {
    return function (inN) {
        console.log(inN + n)
    }
}

//  this
var addSix = createBase(6)
addSix(10)  // return 16
addSix(21)  // return 27

// Q3 Time Optimisation

function find(i) {
    let a = []
    for (let j = 0; j < 1000000; j++) {
        a[j] = i * i
    }
    console.log(a[i])
}

console.time("6")
find(6)
console.timeEnd("6")
console.time("12")
find(12)
console.timeEnd("12")

// ans 
function find2() {
    let a = []
    for (let j = 0; j < 1000000; j++) {
        a[j] = i * i
    }
    return function (i) {
        console.log(a[i])
    }

}

const cl = find2()
console.time("6")
cl(6)
console.timeEnd("6")

// Q4 Block scope and setTimeout

function a() {
    for (var i = 0; i < 3; i++) {
        setTimeout(function log() {
            console.log(i) // what is logged  = 3 so use let instead
        }, i * 1000)
    }
}

a()

for (var i = 0; i < 3; i++) {
    function inner(i) {
        setTimeout(function log() {
            console.log(i) // 1 2 3 by using closures
        }, i * 1000)
    }
    inner(i)
}

// Q5 How would you use a closure to create a private counter ?

function counter() {
    var _counter = 0
    function add(i) {
        _counter += i
    }
    function retrieve() {
        return "Counter = " + _counter
    }
    return {
        add,
        retrieve
    }
}

const co = counter()
co.add(5)
co.add(10)

console.log(co.retrieve())

// Q6 What is a module pattern ?

var Module = (function () {
    function privateMethod() {
        //something
        console.log("privateMethod")
    }
    return {
        publicMethod: function () {
            // can call privatemethod
            console.log("publicMethod")
        }
    }
})()

Module.publicMethod()
Module.privateMethod()  // error

// Q7 Make this run only once

let view
function likeThis() {
    view = "Dua Lipa"
    console.log("likeThis", view)
}

likeThis()
likeThis()
likeThis()

function likeThis2() {
    let called = 0
    return function () {
        if (called > 0) {
            console.log("alreeady liked")
        }
        else {
            view = "Dua Lipa"
            console.log("likeThis", view)
            called++
        }
    }

}

let isliked = likeThis2()

isliked()
isliked()
isliked()

// Q8 Once Polyfill

function once(func, context) {
    let ran

    return function () {
        if (func) {
            ran = func.apply(context || this, arguments) //arguments = [1,2,3]
            func = null
        }
        return ran
    }
}

const hello = once((a, b) => console.log('hello', a, b))

hello(1, 2)
hello(1, 3)
hello(1, 4)

// Q9 Implement caching/memoize function

function myMemoize(func, context) {
    const res = {}
    return function (...args) {
        var argsCache = JSON.stringify(args)
        if (!res[argsCache]) {
            res[argsCache] = func.call(context || this, ...args)
        }

        return res[argsCache]
    }
}

// res = {
//     "5,6":30
// }

const clumsy = (n1, n2) => {
    for (let i = 0; i < 100000000; i++) { }
    return n1 * n2
}

const mem = myMemoize(clumsy)

console.time("First Call")
console.log(mem(9874, 7412))
console.timeEnd("First call")

console.time("2nd Call")
console.log(clumsy(9865, 7489))
console.timeEnd("2nd call")