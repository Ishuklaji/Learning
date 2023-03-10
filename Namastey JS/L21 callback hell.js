const cart = ["shoes", "pants", "kurta"]

api.createOrder(cart, function () {
    api.proceedToPayment(function () {
        api.showOrderSummary()
    })
})
