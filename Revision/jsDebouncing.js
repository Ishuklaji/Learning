// Q1 Button and debounce

const btn = document.querySelector(".inc")
const btnpress = document.querySelector(".incp")
const count = document.querySelector(".count")

var presscount = 0;
var triggercount = 0;

const debounce = _.debounce(() => {
    count.innerHTML = ++triggercount
}, 800)

const throttle = _.throttle(() => {
    count.innerHTML = ++triggercount
}, 900)


// polyfill for debounce
const mydebounce = (cb, d) => {
    let timer

    return function (...args) {
        if (timer) clearTimeout(timer)

        timer = setTimeout(() => {
            cb(...args)
        }, d)
    }
}


// throttle polyfil
const mythrottle = (cb, d) => {
    let last = 0

    return (...args) => {
        let now = new Date().getTime()

        if (now - last < d) return

        last = now
        return cb(...args)
    }
}

const debouncecount = mydebounce(() => {
    count.innerHTML = ++triggercount
}, 700)

const throttlecount = mythrottle(() => {
    count.innerHTML = ++triggercount
}, 700)

btn.addEventListener("click", () => {
    btnpress.innerHTML = ++presscount
    debounce()
})