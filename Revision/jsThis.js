// The value of this is determined by how a function is called (runtime binding).
//  So, there are two types of binding when it comes to object binding in JS, 
// one is implicit and other is explicit.

// Implicit Binding
// Implicit Binding is applied when you invoke a function in an Object using the dot notation. 
// this in such scenarios will point to the object using which the function was invoked. 
// Or simply the object on the left side of the dot.

// Explicit Binding
// In Explicit Binding, you can force a function to use a certain object as its this.
//  Explicit Binding can be applied using call(), apply(), and bind().

// Interview Questions on "this"
// Question 1 - Explain ‘this’ keyword?
// In the English language, we use the pronoun ‘this’ to reference something:

// Like suppose we have a bucket of fruits, when we say “this” inside of it so that will mean the bucket itself.

// Fruits are kept in this bucket

// Similarly, in the JavaScript language, the ‘this’ keyword is used to reference something — an object!

// It can't be set by assignment during execution, and it may be different each time the function is called.

// Global
// So for example if we console.log this here, we get the window object.
let a = 5

console.log(this.a); //undefined

// This inside a function
// Normally it targets the window object.
// In it, this points to the owner of the function call, I repeat, THE FUNCTION CALL,
//  and NOT the function itself. The same function can have different owners in different scenarios
function myFunction() {
    console.log(this)
}
myFunction(); // window object

// What about Arrow Functions ?
// It takes it's this from the outer “normal” function, this won't make much sense now,
//  since as you can see it’s also pointing to window object.
const myFun = () => {
    console.log(this)
}
myFun(); // window object

// So lets see the behaviour of this inside of an Object
// Method inside object
let user = {
    name: "Piyush",
    age: 24,
    getDetails() {
        console.log(this.name); //Piyush
    }
};

// What happens when we have functions inside a nested object key ?
let user2 = {
    name: "Piyush",
    age: 24,
    childObj: {
        newName: "Roadside Coder",
        getDetails() {
            console.log(this.newName, "and", this.name);
        }
    }
};

// What if the same functions are arrow functions inside the object ?
let user3 = {
    name: "Piyush",
    age: 24,
    getDetails: () => {
        console.log(this.name);
    }
};

// Does user.getDetails() give you any output ? Well it is empty since it points to window object.

let user4 = {
    name: "Piyush",
    age: 24,
    getDetails() {
        const nestedArrow = () => console.log(this.name); //Piyush
        nestedArrow();
    }
};

// user.getDetails() gives "Piyush" as the output since it points to the parent's context 
// i.e. the user object.

// Class / Constructors
class user5 {
    constructor(n) {
        this.name = n
    }
    getName() {
        console.log(this.name);
    }
}

const User = new user5("Piyush") // => This will generate a user object from the above class
User.getName();

// Question - 2 Give the output of the following snippet.
const user6 = {
    firstName: 'Piyush!',
    getName() {
        const firstName = 'Jen!';
        return this.firstName;
    }
};
console.log(user6.getName()); // What is logged?

// Piyush! is logged to the console.user.getName() is a method invocation, that's why this inside
//  the method equals object.

// Question 3 - What is the result of accessing its ref ? Why ?
function makeUser() {
    return {
        name: "John",
        ref: this
    };
}

let user7 = makeUser();

alert(user7.ref.name); // What's the result?
// Answer: an error.

// How do u make it work ?
function makeUser() {
    return {
        name: "Piyush Agarwal",
        ref() {
            return this;
        }
    };
}

let user8 = makeUser();

alert(user8.ref().name); // Piyush Agarwal

// Question 4 - What logs to console the following code snippet ?
const user9 = {
    name: 'Piyush Agarwal!',
    logMessage() {
        console.log(this.name); // What is logged?
    }
};
setTimeout(user9.logMessage, 1000);

// After a delay of 1 second, undefined is logged to console

setTimeout(function () {
    user9.logMessage()
}, 1000)

// Question 5 - What logs to console of the following code snippet ?
const user10 = {
    name: 'Piyush',
    greet() {
        return `Hello, ${this.name}!`;
    },
    farewell: () => {
        return `Goodbye, ${this.name}!`;
    }
};
console.log(user10.greet());    // What is logged?
console.log(user10.farewell()); // What is logged?

// 'Hello, Piyush!' and 'Goodbye, undefined!' are logged to console.

// Question 6
// Create an object calculator with three methods:

// read() prompts for two values and saves them as object properties with names a and b respectively.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.

let calculator = {
    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    },

    read() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

// Question 7 Give output of the following code snippet.
var length = 4;
function callback() {
    console.log(this.length); // What is logged?
}
const object = {
    length: 5,
    method(callback) {
        callback();
    }
};
object.method(callback, 1, 2);

// 4 is logged to console

// Question 8 - What is the output of the following code snippet ?
var length = 4;
function callback() {
    console.log(this.length); // What is logged?
}
const object2 = {
    length: 5,
    method() {
        arguments[0]();
    }
};
object2.method(callback, 1, 2);
// 3 is logged to console
// {
//     0: callback,
//     1: 1,
//     2: 2,
//     length: 3
// }

// Question - 9 Write the implementation of this calc()
const result = calc.add(10).multiply(5).subtract(30).add(10)
console.log(result.total)  //----What is logged ?

var calc = {
    total: 0,
    add(a) {
        this.total += a;
        return this;
    },
    subtract(a) {
        this.total -= a;
        return this;
    },
    multiply(a) {
        this.total *= a;
        return this;
    },
};
