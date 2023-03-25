const helperUtils = require('../utils/helperUtils');
const constants = require('../utils/constantUtils');
const mongoService = require('../mongo/order-service');
const errorHandler = require('../errorhandler/generateErrors');

async function createOrder(req) {
    try {
        let orderData = {
            orderId: helperUtils.genRandomString(4),
            name: req.body.name,
            quantity: req.body.quantity,
            paymentType: req.body.paymentType,
            address: req.body.address,
            customerId: req.headers.customerId
        }
        return await mongoService.createOrder(orderData);
    } catch (error) {
        errorHandler.throwError(500, error);
    }
}

async function deleteOrder(orderId){
    await mongoService.deleteOrder(orderId);
}

async function fetchAllOrders(customerId){
    return await mongoService.getAllOrders(customerId);
}

module.exports = {
    createOrder,
    deleteOrder,
    fetchAllOrders
}