// functions in js

// what is function declaration ?
function square(n) {
    console.log(n * n)
}
square(5)

// what is function expression ?

const sq = function (n) {
    console.log(n * n)
}

sq(10)

// what are first class functions ?

function displaysquare(fn) {
    console.log("Square is " + fn(15))
}

displaysquare(square())

    // what is IIFE (Immediately invoked function expressions) ?

    (function square(n) {
        console.log(n * n)
    })(20)

    // o/p ques

    (function (x) {
        return (function (y) {
            console.log(x)   // 1
        })(2)
    })(1)

// function scopes

// The following variables are defined in the global scope
const num1 = 20;
const num2 = 3;
const name = 'Chamakh';

// This function is defined in the global scope
function multiply() {
    return num1 * num2;
}

multiply(); // Returns 60

// A nested function example
function getScore() {
    const num1 = 2;
    const num2 = 3;

    function add() {
        return `${name} scored ${num1 + num2}`;
    }

    return add();
}

getScore(); // Returns "Chamakh scored 5"

// o/p ques

for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i)
    }, i * 1000)
}

// function hoisting ?

fn()   // works perfectly

console.log(x)  // undefined

function fn() {
    console.log("Hoisting")
}

var x = 25

// o/p ques

var y = 25

var fun = function () {
    console.log(y)
    var y = 20
}

fun()

// params and arguments ?

function cube(n) { //params
    console.log(n * n * n)
}

cube(5) // arguments

// o/p que

const f1 = (a, x, y, ...num) => {
    console.log(x, y)
}
f1(5, 6, 7, 3, 5, 9)

// callback  function

document.addEventListener("click", function (e) {

})

// arrow function

const add = (n1, n2) => {
    console.log(n1 + n2)
}

// diff btw anonymous fn n arrow
// 1 syntax
// 2 implicit "return" keyword
// 3 arguments
// 4 "this" keyword