// What are Objects ?
// An object is a collection of related data and / or functionality.

// An object can be created with figure brackets { } with an optional list of properties.
// A property is a “key: value” pair, where key is a string(also called a “property name”),
//  and value can be anything

let user = {
    // [key]: [value]
    name: "Roadside Coder",
    age: 24
};

// How can you access, modify and delete properties of an object ?

// Let's say we have the above object "user"

// Access
console.log(user.name); //Roadside Coder
// or
console.log(user["name"]); //Roadside Coder

// Modify
user.name = "Piyush"
console.log(user["name"]); //Piyush

// Delete
delete user.age;

// What will the output of the following code snippet ?
const func = (function (a) {
    delete a;
    return a;
})(5);

console.log(func);  // 5

// How can you access a multiword key of an object ?

// You can use “square bracket notation” that works with any string:

let user = {};

// get
alert(user["like the video"]); // true

// set
user["like the video"] = true;

// delete
delete user["like the video"];


// Computed Properties
// While creating objects, we can use square brackets in an object literal which are computed properties.

// let's see an example

let property = "firstName"
let name = "Piyush Agarwal"

let person = {
    [property]: name,
};

// Accessing
alert(bag.firstName); // Piyush Agarwal
alert(bag[property]); //Piyush Agarwal

// The[property] will be taken from property
// which will be["firstName"].

// Please note that square bracket notation can be used for unknown and complex key names
// and dot notation is used for known and simple keys.

// How to access keys in an object ?

// Well! You can used loops but for Objects we can use for...in loop.

// Let's see how it works.
let user = {
    name: "Piyush",
    age: 24,
};

for (let key in user) {
    alert(key);  // name, age
    alert(user[key]); // Piyush, 24
}

// key is an iterator that will iterate through the properties of the user object.
// you can access any property using the key property.

// Q1.What will the otuput of the following code snippet ?
const obj = { a: 'one', b: 'two', a: 'three' };
console.log(obj);  //{ a: "three", b: "two" }

// Q2.Create a function multiplyByTwo(obj) that multiplies all numeric property values of obj by 2.

// Initial
let nums = {
    a: 100,
    b: 200,
    title: "My nums"
};

multiplyNumeric(nums);

//expected output 
nums = {
    a: 200,
    b: 400,
    title: "My nums"
};

// ans
function multiplyByTwo(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}

// First we check if the key value is numeric or not and then multiply the numeric value by 2. Simple!

// Q3- Find the output of the following code snippet.

const a = {};
const b = { key: 'b' };
const c = { key: 'c' };

a[b] = 123;
a[c] = 456;

console.log(a[b]);
// And the answer is 456.

// Q4 - What is JSON.Stringify and JSON.parse ?

const u = {
    n: "piyu",
    a: 24
}

const stro = JSON.stringify(u)

localStorage.setItem('piy', stro)

console.log(JSON.parse(localStorage.getItem('piy')))

// Q5 - Spread Operator
// [...'Lydia'];

// ["L", "y", "d", "i", "a"]

// Q6 - What's the output?

const user = { name: 'Lydia', age: 21 };
const admin = { admin: true, ...user };

console.log(admin);
// { admin: true, name: "Lydia", age: 21 }

// Q7 - What's the output of the following code snippet?
const settings = {
    username: 'lydiahallie',
    level: 19,
    health: 90,
};

const data = JSON.stringify(settings, ['level', 'health']);
console.log(data);// "{"level":19, "health":90}"
// The second argument of JSON.stringify is the replacer.The replacer can either be a 
// function or an array, and lets you control what and how the values should be stringified.

// Q8 - What's the output?
const shape = {
    radius: 10,
    diameter() {
        return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter());
console.log(shape.perimeter());
// 20 and NaN

// Note that the value of diameter is a regular function, whereas the value of perimeter is an arrow function.

// With arrow functions, the this keyword refers to its current surrounding scope,
//  unlike regular functions! This means that when we call perimeter, 
// it doesn't refer to the shape object, but to its surrounding scope (window for example).

// There is no value radius on that object, which returns NaN.

// Destructuring and renaming
// Suppose you go to a grocery store which has so many items displayed on the shelves but you
//  buy items which are required.In the same way we take out specific properties from an object which is required.

// Let's see an example

let user = {
    nam: "Piyush",
    age: 24
}

const { nam } = user;

console.log(nam);

const { name: myName } = { name: 'Lydia' };

console.log(name); //undefined

// When we unpack the property name from the object on the right - hand side, 
// we assign its value "Lydia" to a variable with the name myName.

// With { name: myName }, we tell JavaScript that we want to create a new variable
//  called myName with the value of the name property on the right - hand side.

// Since we try to log name, a variable that is not defined, undefined is returned on the 
// left side assignment.Later, the value of Lydia is stored through the destructuring assignment

// Q - What's the output?
// function getItems(fruitList, ...args, favoriteFruit) {
//     return [...fruitList, ...args, favoriteFruit]
// }

// getItems(["banana", "apple"], "pear", "orange") //SyntaxError

// ...args

// is a rest parameter.In this example, the rest parameter was the second parameter.This is not possible, 
// and will throw a syntax error.

// Q - How will u make the above code snippet work ?

// The rest parameter's value is an array containing all remaining arguments, 
// and can only be the last parameter!

function getItems(fruitList, favoriteFruit, ...args) {
    return [...fruitList, ...args, favoriteFruit];
}

getItems(['banana', 'apple'], 'pear', 'orange');

// The above example works.This returns the array['banana', 'apple', 'orange', 'pear']

// Referencing
// Q - What's the output of the following code snippet?

let parse = { greeting: 'Hey!' };
let d;

d = p;
p.greeting = 'Hello';
console.log(d.greeting); // Hello

// Solution
// In JavaScript, all objects interact by reference when setting them equal to each other.
// When you change one object, you change all of them.

// Q - What is the output of the following code snippet ?
console.log({ a: 1 } == { a: 1 }); //false
console.log({ a: 1 } === { a: 1 });//false

// In JavaScript, Objects are compared based on references.

// In the above statement, we are comparing two different objects so their references 
// will be different.Hence, we get the output as false for both of the statements

// Q - What's the output of the following code snippet? ( Referencing is not always there )

let person1 = { name: 'Lydia' };
const members = [person1];
person1 = null;

console.log(members);

// Solution
// [{ name: "Lydia" }]

// Q - What's the output of the following code snippet?
const value = { number: 10 };

const multiply = (x = { ...value }) => {
    console.log((x.number *= 2));
};

multiply();
multiply();
multiply(value);
multiply(value);
// Solution
// 20, 20, 20, 40

// Q - What is the output of the following code snippet ?
function changeAgeAndReference(person) {
    person.age = 25;
    person = {
        name: 'John',
        age: 50
    };

    return person;
}

const personObj1 = {
    name: 'Alex',
    age: 30
};

const personObj2 = changeAgeAndReference(personObj1);

console.log(personObj1); // -> { name: 'Alex', age: 25 }
console.log(personObj2); // -> { name: 'John', age: 50 }

// The function first changes the property age on the original object it was passed in.
// It then reassigns the variable to a brand new object and returns that object.
// Here’s what the two objects are logged out.

// Q - Difference between shallow copy vs deep copy.

// Shallow copy

// A shallow copy means that certain(sub -)values are still connected to the original variable.

// Example 
const user = {
    name: 'Jen',
    age: 26
};

const copyOfUser = user;
console.log(user, 'user'); //{ name: 'Jen', age: 26 } user

console.log('------------After Modification-----------');
copyOfUser.age = 24;
/*
Here you would expect user object wouldn't change, but copyOfUser 
and user object both share same memory address
*/
console.log(user, 'user');// ------------After Modification-----------
// { name: 'Jen', age: 24 } user

// Deep copy

// A deep copy means that all of the values of the new variable are copied and disconnected
//  from the original variable

// Example 
const user = {
    name: "Jen",
    age: 26
}
console.log("=========Deep Copy========");
const copyOfUser = JSON.parse(JSON.stringify(user));
console.log("User=> ", user);
console.log("copyOfUser=> ", copyOfUser);
/*
=========Deep Copy========
User=>  { name: 'Jen', age: 26 }
copyOfUser=>  { name: 'Jen', age: 26 }
*/
console.log("---------After modification---------");
copyOfUser.name = "Piyush";
copyOfUser.age = 24;
/*
Here user object will not change
*/
console.log("User=> ", user);
console.log("copyOfUser=> ", copyOfUser);
/*
---------After modification---------
user=>  { name: 'Jen', age: 26 }
copyOfUser=>  { name: 'Piyush', age: 24 }
*/

// Q - How to clone an object without referencing its keys to original object ?
// Solution
// 4 ways to clone an object

const obj2 = { a: 1, b: 2 }
const objclone1 = Object.assign({}, obj2);
const objclone2 = JSON.parse(JSON.stringify(employee));
const objclone3 = { ...obj }
