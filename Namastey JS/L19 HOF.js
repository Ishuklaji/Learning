function x() {
    console.log("Namastey");
}

function y(x) {
    x()
}

const radius = [3, 1, 2, 4]

const area = function (radius) {
    return Math.PI * radius * radius
}

const circumference = function (radius) {
    return 2 * Math.PI * radius
}

const diameter = function (radius) {
    return 2 * radius
}

Array.prototype.calculate = function (logic) {
    const op = []
    for (let i = 0; i < this.length; i++) {
        op.push(logic(this[i]))
    }
    return op
}

const calculate2 = function (radius, logic) {
    const op = []
    for (let i = 0; i < radius.length; i++) {
        op.push(logic(radius[i]))
    }
    return op
}

console.log(radius.map(area));
console.log(radius.calculate(area));
console.log(calculate2(radius, circumference));
console.log(calculate2(radius, diameter));