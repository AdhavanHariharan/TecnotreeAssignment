const mongoStore = require('./order-store');

async function createOrder(data) {
    return await mongoStore.createOrder(data);
}

async function deleteOrder(orderId) {
    return await mongoStore.deleteOrder(orderId);
}

async function getAllOrders(customerId) {
    return await mongoStore.getAllOrders(customerId);
}

module.exports = {
    createOrder,
    deleteOrder,
    getAllOrders
}