// promises
// what
// why
// how

// 3 states
// fulfilled, rejected, pending

// 3 states
// fulfilled, rejected, pending
// sleep(2000)
// .then(operation1)
// .then(operation2)
// .then(operation3)
// .catch(operation3)
// .finally(operation3)

function sleep(time) {
    return new Promise((res, rej) => {
        if (typeof time !== 'number') {
            rej('argument to sleep function should be a number')
            return
        }
        setTimeout(() => {
            res({ status: 200 })
        }, time)
    })
}

setTimeout(() => {
    console.log('first')
}, 0)

Promise.resolve()
    .then(res => console.log('promise'))


sleep(2000)
    .then(res => console.log("printed after 2 seconds"))
    .catch(err => console.log(err))

async function test() {
    try {
        console.log("waiting for results")
        let res = await sleep(2000)

        console.log(res)

        if (res.status === 200) {
            return true
        }
    }
    catch (err) { console.log(err) }
}

test()
    .then(res => {
        console.log(res)
    })


var promise = []
promise[0] = sleep(100).then(res => 'promise 1')
promise[1] = sleep(500).then(res => {
    throw new Error('error message')
}).catch(err => err)
promise[2] = sleep(2000).then(res => 'promise 3')
promise[3] = sleep(1000).then(res => 'promise 4')

Promise.all(promise).then(res => console.log(res))

// parallel requests. 20 req. 
// Promises.all( promise1, promise2 ).then(res=>console.log(res))


// waterfall model. 1 req -> 2nd req -> 3rd
// async await, recursion 

let name = 'masai'
// block scoped, redeclaration, hoisting
const lname = 'school'
// reassignment, redeclaration is not allowed and block scoped

function test2() {
    // hoisting takes place
    console.log(name)
    var name = 'bangalore'
}

test2()

let name2 = 'masai'
// block scoped, redeclaration, hoisting
const lname2 = ['nrupul', 'albert']
// reassignment, redeclaration is not allowed and block scoped
lname2[0] = 'aman'

console.log(lname)

// Arrow fucntions

// sugar syntaxing, easier way to write functions

// this keyword better

var person = {
    name: 'masai',
    display: () => console.log(this),
    displayES5: function () {
        console.log(this)
    }
}

// es6
person.display()
// es5
person.displayES5()


// // call, apply, bind
// // change the context of this


class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data: [1,2,3]
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick=()=>{
        console.log(this.state.data)
    }
}

// ( context of that object )

// PROTOTYPE
// classes -> sugar syntax

// constructor

function Person(name, age){
    this.name = name
    this.age = age
}

Person.prototype.display = function(){
    console.log(this.name)
}


// // new
var person = Person('masai',25)


person.display()


// CLASS

class Person{
    constructor(name,age){
        this.name = name
        this.age = age
        this.sleep()
    }
    sleep(){
        console.log(this.name,'is sleeping')
    }
}

class Coder extends Person{
    constructor(name,age,role){
        super(name,age)
        this.role = role
    }

    code(){
        console.log(this.name,'is coding')
    }
    role(){
        console.log(this.name,'role is',this.role)
    }
    profile(){
        console.log(this.name, this.age, this.role)
    }
}


var person = new Person('masai',25)
var coder = new Coder('haren',21,'frontend')

coder.code()
coder.sleep()
coder.profile()

// destructuring, default, promises, async await, Sets, Maps, BigInt 
// BigInt
// just add n after every number

var value = 2n**53n -1n

console.log(value, value+1000n)

console.log((value+100n)%10n)

var val = 2**53-1

console.log((val+100)%10)

// EVENT LOOP

// 2-5 min

// Javascript syncronous lang
// async
// its browser
// Call stack 
// Task queue 
// If the call is not empty, then the task queue 
// blocking code
// overflow the stack
// Promise has a higher priority

// THIS
// this refers to an object itself
// call, apply, bind
// functions, this is created function invoked
// arrow fun dont have this
// window
// "use strict";

// objects and arrays

var arr  = [1,2,3,4,5]
var obj = {
    name:'masai',
    place: 'blr'
}

Object.defineProperty(obj,'length',{
    value: 0,
    writable: false,
    enumerable: false
})

console.log(Array.isArray(arr))

console.log(obj.hasOwnProperty('place'))

console.log(Object.getOwnPropertyNames(obj))

console.log(Object.keys(obj))

// // non enumerable properties

console.log(++obj.length)
console.log(obj.length)

// fetch vs axios