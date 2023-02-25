// lexical scoping
function a() {
    c()
    function c() {
        console.log(b)
    }
}

var b = 10;
a()