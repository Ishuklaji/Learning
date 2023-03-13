const cart = ["shoes", "pants", "kurta"]

createOrder(cart, function (orderId) {
    proceedToPayment(orderId)
})

const promise = createOrder(cart)

promise.then(function (orderId) {
    proceedToPayment(orderId)
})

const GITHUB_API = "http://api.github.com/users/ishuklaji"

const user = fetch(GITHUB_API)

console.log(user);

user.then(function (data) {
    console.log(data);
})

