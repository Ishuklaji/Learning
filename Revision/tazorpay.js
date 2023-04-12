// Q1 Panagram String checker
//  The quick brown fox jump overa lazy dog

function checkPanagram(str) {
    const a = new Array(26).fill(false)

    let ind

    for (let i = 0; i < str.length; i++) {
        if (str[i] >= "A" && str[i] <= "Z") {
            ind = str.charCodeAt(i) - "A".charCodeAt(0)
        }
        else if (str[i] >= "a" && str[i] <= "z") {
            ind = str.charCodeAt(i) - "a".charCodeAt(0)
        }
        else
            continue
        a[ind] = true
    }

    for (let i = 0; i < a.length; i++) {
        if (a[i] === false)
            return false
    }

    return true
}

let res = checkPanagram("The quick brown fox jumpes over a lazy dog")
console.log(res)

// Convert 12hrs time to 24hrs time clock

const convert12to24 = (time12h) => {
    const [time, modifier] = time12h.split(" ")
    let [hrs, min] = time.split(":")

    if (hrs === '12')
        hrs = "00"

    if (modifier === "PM")
        hrs = parseInt(hrs) + 12

    return `${hrs}:${min}`
}

console.log(convert12to24("02:02 PM"))

// LRU (Least Recently Used) Cache

class LRU {
    constructor(max = 5) {
        this.max = max
        this.cache = new Map()
    }

    get(key) {
        let item = this.cache.get(key)

        if (item) {
            this.cache.delete(key)
            this.cache.set(key, item)
        }
        return item
    }

    set(key, value) {
        if (this.cache.has(key))
            this.cache.delete(key)
        else if (this.cache.size === this.max) {
            this.cache.delete(this.first())
        }
        this.cache.set(key, value)
    }

    first() {
        return this.cache.keys().next().value
    }
}

const lru = new LRU(5)
lru.set("name", "ish")
lru.set("age", "22")
lru.set("profession", "SDE")
console.log(lru.cache)
lru.get("name")
console.log(lru.cache)
lru.set("location", "Berlin")
console.log(lru.cache)
