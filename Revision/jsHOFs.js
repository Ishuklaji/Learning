// map , filter , reduce

const nums = [1, 2, 3, 4]

// map

const mul3 = nums.map((num, i, arr) => {
    return num * 3 + i;
})
console.log(mul3);

// polyfill for map

Array.prototype.myMap = function (cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        temp.push(cb(this[i], i, this))
    }
    return temp
}

const mul4 = nums.myMap((num, i, arr) => {
    return num * 4 + i;
})
console.log(mul4);

// filter

const morethan2 = nums.filter((num) => {
    return num > 2;
})
console.log(morethan2);

// polyfill for filter

Array.prototype.myFilter = function (cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this))
            temp.push(this[i])
    }
    return temp
}

const morethan3 = nums.myFilter((num) => {
    return num > 3;
})
console.log(morethan3);

// reduce

const sum = nums.reduce((acc, curr, i, arr) => {
    return acc + curr;
}, 0)
console.log(sum);

// polyfill for reduce

Array.prototype.myReduce = function (cb, initialValue) {
    var accumulator = initialValue
    for (let i = 0; i < this.length; i++) {
        accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i]
    }
    return accumulator
}

const sum2 = nums.myReduce((acc, curr, i, arr) => {
    return acc + curr;
}, 0)
console.log(sum2);