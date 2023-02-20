getname()     // Hoisted function
console.log(x)
console.log(getname)

var x = 7

function getname() {
    console.log("Namastey JS")
}

setname()  // not hoisted
const setname = () => {
    console.log("Hi")
}
