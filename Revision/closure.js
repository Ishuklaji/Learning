// Closure
// closure is a function instance remembering its outer variables even 
//  as that function is passed to and invoked in other scopes.

// closure is a function instance and its scope environment preserved in-place 
//  while any references to it are passed around and invoked from other scopes.

// Benefits
// Closure can improve efficiency by allowing a function instance to remember
//  previously determined information instead of having to compute it each time. *1

// Closure can improve code readability, bounding scope-exposure by encapsulating variable(s)
//  inside function instances, while still making sure the information in those variables 
//  is accessible for future use. The resultant narrower, more specialized function instances 
//  are cleaner to interact with, since the preserved information doesn't need to 
//  be passed in every invocation. *1

// closure is related to function
// nested function
// there has to be a dependency 

function greet() {
    let n = 'raj'  // n is going to garbage
    return function () {
        return function () {
            console.log(n)
        }
    }
}

console.log(greet())

let x = greet()

console.log("x: ", x)

let y = x()

y()




