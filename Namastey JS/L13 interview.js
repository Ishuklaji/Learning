function outest() {
    var c = 20
    function outer(b) {
        var a = 10;
        function inner() {
            console.log(a, b, c);
        }
        return inner;
    }
    return outer
}

// outer()()
let a = 100
var close = (outest())("Hola El Mundo")
close()

function counter() {
    var count = 0
    return function increment() {
        count++;
        console.log(count);
    }
}

var counter1 = counter()
counter1()
counter1()

var counter2 = counter()
counter2()
counter2()
counter2()
counter2()

function Counter() {
    var count = 0
    this.increment = function () {
        count++;
        console.log(count);
    }
    this.decrement = function () {
        count--;
        console.log(count);
    }
}

var counter3 = new Counter()
counter3.increment()