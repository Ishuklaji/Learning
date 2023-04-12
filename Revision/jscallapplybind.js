// Call, bind and Apply are three super important JavaScript methods that are available to 
// all JavaScript functions, which are used to set the this keyword independent of how the 
// function is called.You can use these methods to tie a function into an object and call the 
// function as if it belonged to that object.Therefore, these are incredibly important for all
//  Javascript Developers to know how they work and when to use them, and that is why this is 
// such an important topic for javascript interviews. 

// So let's go and have a deep dive into explicit object binding in javascript i.e., Call, Bind and Apply
//  methods and discuss some of the most commonly asked interview questions on it!

// We will take a code snippet and solve it using call(), bind() and apply() and know how it is used to set this.

var obj = { name: "Piyush" };
function sayHello() {
    return "Hello " + this.name;
}

console.log(sayHello());

// What do you think the console will print the name as ? 🤔

// Output: Hello ☹️

// Do you want it to say "Hello" to you? Okay let's try it out using above methods.

// call(), apply() and bind() methods belong to the Function.prototype property.

// call()
// The call() method calls the function with a given this value and arguments provided individually.

function sayHello() {
    return "Hello " + this.name;
}

var obj = { name: "Piyush" };

sayHello.call(obj); //Hello Piyush

// Here we are passing the obj to the call() and then this points to "obj" object.

// apply()
// The apply() method calls the specified function with a given this value, and arguments
//  provided as an array(or an array - like object)

function sayHello(day, status) {
    return "Hello " + this.name + " today is " + day + " and feel " + status;
}

var obj = { name: "Piyush" };

sayHello.apply(obj, ["tuesday", "good"]); // 'Hello Piyush today is tuesday'

// Here we are passing the arguments as an array.As we can the the length of the arguments 
// array should be equal to the no.of arguments to be passed to the function.

// apply() is almost identical to call() except for the fact call() accepts an argument list, 
// while apply() accepts a single array of arguments — for example, func.apply(this, ['eat', 'bananas'])
//  vs.func.call(this, 'eat', 'bananas').

// bind()
// This works a little bit different from call() and apply().

// According to MDN, The bind() method creates a new function that, when called, has its this keyword
//  set to the provided value, with a given sequence of arguments preceding any provided when the new
//  function is called.

// basically we use a bind() method to call a function with this value.Let's see our initial 
// code in action using bind().
function sayHello() {
    return "Hello " + this.name;
}

var obj = { name: "Piyush" };

const helloFn = sayHello.bind(obj);

console.log(helloFn());

// helloFn has the binded method and when we call helloFn it gives us the value of "this".

// 1. Give the output of the following question
const person = { name: 'Piyush' };

function sayHi(age) {
    return `${this.name} is ${age} years`;
}

console.log(sayHi.call(person, 24)); //--- 1 ? It will give "Piyush is 24 years"
console.log(sayHi.bind(person, 24)); //--- 2 ?It will return the function "sayHi"

// 2. Give the output of the following code snippet.
const age = 10;
var person2 = {
    name: "Piyush",
    age: 20,
    getAge: function () {
        return this.age;
    }
}

var person3 = { age: 24 };
person.getAge.call(person3); // show with apply and bind as well


// 3. What will the output of the below code snippet ?
var status = '😎';

setTimeout(() => {
    const status = '😍';

    const data = {
        status: '🥑',
        getStatus() {
            return this.status;
        },
    };

    console.log(data.getStatus()); // --- 1 ?🥑
    console.log(data.getStatus.call(this));  // --- 2 ?😎
}, 0);

// 4. write printAnimals() in such a way that it prints all animals in object below.
const animals = [
    { species: 'Lion', name: 'King' },
    { species: 'Whale', name: 'Queen' }
];

function printAnimals(i) {
    this.print = function () {
        console.log('#' + i + ' ' + this.species + ': ' + this.name);
    }
    this.print();
}

// Let's try to call the function using call method
printAnimals.call(animals); // #undefined undefined: undefined

for (let i = 0; i < animals.length; i++) {
    printAnimals.call(animals[i], i); //  #0 Lion: King #1 Whale: Queen
}


// 5. How to append an array to another array.
const array = ['a', 'b'];
const elements = [0, 1, 2];
array.push(elements);
array.push.apply(array, elements); //[a,b,0,1,2]

// 6. Find min / max in an array and use apply to enhance a built -in function.
const numbers = [5, 6, 2, 3, 7];

// using Math.min/Math.max apply

let max = Math.max.apply(null, numbers); // equal to Math.max

let min = Math.min.apply(null, numbers); // equal to Math.min 

// vs. simple loop based algorithm

max = -Infinity, min = +Infinity;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
    if (numbers[i] < min) {
        min = numbers[i];
    }
}

// 7. Create a bound function
function f() {
    alert(this); // ?
}

let user = {
    g: f.bind(null)
};

user.g();
// The context of a bound function is hard - fixed.There’s just no way to further change it.
// It will return a window object.

// Q 8

function checkPassword(success, failed) {
    let password = prompt("Password", "")
    if (password == "Billionare")
        success()
    else
        failed()
}

let u = {
    name: "Ish",

    loginSuccessful() {
        console.log(`${this.name} login successful`)
    },

    loginFailed() {
        console.log(`${this.name} login failed`)
    }
}

checkPassword(u.loginSuccessful.bind(u), u.loginFailed.bind(u))

// Q 9

function chkpwd(ok, fail) {
    let pwd = prompt("Pwd?", "")
    if (pwd == "Billion")
        ok()
    else
        fail()
}

let u2 = {
    name: "Ish",
    login(result) {
        console.log(this.name + (result ? "success" : "failure"))
    }
}

chkpwd(u2.login.bind(u2, true), u2.login.bind(u2, false))

// Q10
const ag = 16
var person3 = {
    n: "Ish",
    ag: 23,
    getAgeArrow: () => console.log(this),

    getAge: function () {
        console.log(this.ag)
    }
}

var p2 = { ag: 23 }

person3.getAgeArrow.call(p2) // nothing
person3.getAge.call(p2) //24

// Q11 Polyfill for call method

let car1 = {
    color: "Red",
    company: "Ferrari",
}

function purchaseCar(currency, price) {
    console.log(`${this.color} - ${this.company} car for ${currency}${price}`)
}

Function.prototype.myCall = function (context = {}, ...args) {
    if (typeof this !== "function") {
        throw new Error(this + "Not callable")
    }
    context.fn = this
    context.fn(...args)
}
purchaseCar.myCall(car1, "₹", 5000000)
// purchaseCar.call(car1,"₹",5000000)


// Q12 Apply polyfil
Function.prototype.myApply = function (context = {}, args = []) {
    if (typeof this !== "function") {
        throw new Error(this + "Not callable")
    }

    if (!Array.isArray(args)) {
        throw new TypeError("Non-object")
    }
    context.fn = this
    context.fn(...args)
}
purchaseCar.myApply(car1, ["₹", 5000000])

// Q13 polyfill for bind
Function.prototype.myBind = function (context = {}, ...args) {
    if (typeof this !== "function") {
        throw new Error(this + "cannot be bound as it's Not callable")
    }

    context.fn = this
    return function (...newArgs) {
        return context.fn(...args, ...newArgs)
    }
}
const newfunc = purchaseCar.myBind(car1)
console.log(newfunc("₹", 5000000))