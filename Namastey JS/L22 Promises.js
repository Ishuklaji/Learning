const cart = ["shoes", "pants", "kurta"]

createOrder(cart, function (orderId) {
    proceedToPayment(orderId)
})

const promise = createOrder(cart)

promise.then(function (orderId) {
    proceedToPayment(orderId)
})