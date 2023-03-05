console.log("Start")

setTimeout(function () {
    console.log("Callback");
}, 5000);

console.log("End");

// million

let startDate = new Date().getTime();
let endDate = startDate

while (endDate < startDate + 10000) {
    endDate = new Date().getTime();
}

console.log("while expires");