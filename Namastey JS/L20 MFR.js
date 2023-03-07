const a = [1, 2, 3, 4, 5]

// MAP
function double(x) {
    return x * 2
}

const op = a.map(double)

console.log(op)

const ou = a.map((x) => {
    return x.toString(2)
})

console.log(ou);

// FILTER

const op1 = a.filter((x) => {
    return x % 2
})

console.log(op1);

// REDUCE

const op2 = a.reduce((acc, curr) => {
    return acc + curr
}, 0)

console.log(op2);

const max = a.reduce((acc, curr) => {
    if (curr > max) {
        max = curr
    }
    return max
}, 0)

console.log(max);
