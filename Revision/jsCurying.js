// What is Currying ?
// Currying is a function that takes one argument at a time and returns a new function 
// expecting the next argument.It is a conversion of functions from callable as f(a, b, c)
// into callable as f(a)(b)(c)

// Basically Currying doesn’t call a function. It just transforms a function. 
// They are constructed by chaining closures by immediately returning their inner functions simultaneously.

// Convert f(a, b) into f(a)(b)
/*f(a,b) implementation */
function f(a, b) {
    return "Works"
}

/*f(a)(b) implementation */
function f(a) {
    return (b) => {
        "Works"
    }
}
console.log(f(1)(2)) // works
console.log(f(1)); /* (b) => {return "Works" } */

// Why should currying be used ?
// Following are the reasons why currying is good:

// ✅ It makes a function pure which makes it expose to less errors and side effects.

// ✅ It helps in avoiding the same variable again and again.

// ✅ It is a checking method that checks if you have all the things before you proceed.

// ✅ It divides one function into multiple functions so that one handles one set of responsibility.

// How does currying work ?
// Currying is a function that takes multiple arguments as input.
// It transform the function into a number of functions where every function will accept one argument.

/*Simple function*/
const add = (a, b, c) => {
    return a + b + c
}
console.log(add(1, 2, 3)); // 6

/* Curried Function */
const addCurry = (a) => { // takes one argument
    return (b) => {                 //takes second argument
        return (c) => {             //takes third argument
            return a + b + c
        }
    }
}
console.log(addCurry(1)(2)(3)); //6

function sum(a) {
    return (b) => {
        return (c) => {
            return a + b + c
        }
    }
}
/* you can call it in two ways*/
console.log(sum(1)(2)(3)); //6

const sum1 = sum(1);
const sum2 = sum1(2);
const result = sum2(3);
console.log(result); // 6

console.log(sum1);
// (b) => {
//     return (c) => {
//         return a + b + c
//     }
// }

// Evaluate(”sum”)(2)(4) ⇒ 2 + 4 = 6 on basis of input given to first param.

function Evaluate(operation) {
    return (a) => {
        return (b) => {
            if (operation === "sum")
                return a + b;
            else if (operation === "multiply")
                return a * b;
            else if (operation === "divide")
                return a / b;
            else if (operation === "subtract")
                return a - b;
            else return "No / Invalid Operation Selected"
        }
    }
}

console.log(Evaluate("multiply")(5)(4))

// Write a currying function that takes infinite arguments.

/*Straightforward and time-taking solution*/
const sum = function (a) {
    return function (b) {
        return function (c) {
            return function (d) {
                // ...
                // ...
                // ...
                return a + b + c + d //+ ...n;
            }
        }
    }
}

//recursive solution
const sum = function (a) {
    return function (b) {
        if (b) {
            return sum(a + b);
        } else {
            return a;
        }
    }
}

// It will keep returning a function until arguments are provided.

// If there are no more arguments specified, we simply return the value of 'a' which is the added total result

// Currying vs Partial application

// Normally how do we write a curried function like :-
function sum(a) {
    return (b, c) => {
        return a * b * c
    }
}

// Let's see the partial application of the same function sum
function sum(a) {
    return (b, c) => {
        return a * b * c
    }
}

// How can this function be called ?
let x = sum(10);
x(1, 2);
x(20, 30);
x(40, 50);
// OR
sum(10)(1, 2);
sum(10)(20, 30);
sum(10)(40, 50);

// Makes sense ?

// We concluded that the above function named sum expected 3 arguments and had 2 nested 
// functions(Partial Application) unlike previous implementation where the function
//  expected 3 arguments and had 3 nested functions.(currying)

// Partial application transforms a function into another function with smaller arity.

// How can we manipulate DOM using currying ?

<div>
    <h1 id="header">Hello Piyush</h1>
</div>

// I want browser to show "Hello Roadside Coder" instead of "Hello Piyush".

// Let's try it using currying.

// 1 Take the id of the element as one argument and the content inside the element as another argument.
const updateElemText = id => content => document.querySelector(`#${id}`).textContent = content;

// 2 Now call the function with element id and and the content

const updateHeaderText = updateElemText('header');
updateHeaderText('Hello RoadsideCoder!');

// Write a function curry() that converts f(a, b, c) into a curried function f(a)(b)(c).

function curry(func) {
    // args takes arguments in the form of array eg - [a, b, c]
    return function curriedFunc(...args) {
        //check if current args passed equals the number of args function expects 
        if (args.length >= func.length) {
            // if yes, we spread args elements to pass into func (spread). This is our base case.
            return func(...args)
        } else {
            /* if not, we return a function that collects the next arguments passed in next and 
            we recursively call curriedFunc, accumulating and spreading the values of args first and then
            the values of next. next will take into consideration a variable amount of next arguments
            e.g (1, 2) (1) (1,2,3) */
            return function (...next) {
                return curriedFunc(...args, ...next);
            }
        }
    }
}

const join = (a, b, c) => {
    return `${a}_${b}_${c}`
}
const curriedJoin = curry(join)

// curriedJoin(1, 2, 3) // '1_2_3'

// curriedJoin(1)(2, 3) // '1_2_3'

curriedJoin(1, 2)(3) // '1_2_3'


// Write a function curry() that converts f(a, b, c) into a curried function
//  f(a)(b)(c) with placeholder(_) support.

function curry(func) {

    return function curried(...args) {   // we need to return a function to make it curry-able.

        // 1. If the arguments are extra then eliminate them
        // we don't want to pass 6 arguments when the expected is 3.
        // it will interfere with our placeholder logic
        const sanitizedArgs = args.slice(0, func.length);

        // see if placeholder is available in arguments
        const hasPlaceholder = sanitizedArgs.some(arg => arg == curry.placeholder);

        // if no placeholder and arguements are equal to what expected then it is normal function call
        if (!hasPlaceholder && sanitizedArgs.length == func.length) {
            return func.apply(this, sanitizedArgs);
        }

        // else we need to replace placeholders with actual values
        // we call helper function `mergeArgs` for this
        // we pass first and next arguments to helper function
        return function next(...nextArgs) {
            return curried.apply(this, mergeArgs(sanitizedArgs, nextArgs));
        }

    }
}

function mergeArgs(args, nextArgs) {

    let result = [];

    // iterate over args (because we need to replace from it) 
    // in each iteration, if we find element == curry.placeholder
    // then we replace that placeholder with first element from nextArgs
    // else we put current element
    args.forEach((arg, idx) => {
        if (arg == curry.placeholder) {
            result.push(nextArgs.shift());
        } else {
            result.push(arg);
        }
    });

    // we merge both, because there might be chance that args < nextArgs
    return [...result, ...nextArgs];
}

curry.placeholder = Symbol()
