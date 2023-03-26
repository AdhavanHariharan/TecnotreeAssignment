const helperUtils = require('../utils/helperUtils');
const mongoService = require('../mongo/order-service');
const errorHandler = require('../errorhandler/generateErrors');

const {logger} = require('../logger/config');

async function createOrder(req) {
    logger.info(`Creating an order for cust: ${req.headers.customerId}`);
    try {
        let orderData = {
            orderId: helperUtils.genRandomString(2),
            name: req.body.name,
            quantity: req.body.quantity,
            paymentType: req.body.paymentType,
            address: req.body.address,
            customerId: req.headers.customerId
        }
        return await mongoService.createOrder(orderData);
    } catch (error) {
        logger.error(`Error while creating order for cust: ${req.headers.customerId}`);
        errorHandler.throwError(500, error);
    }
}

async function deleteOrder(req){
    let orderId = req?.query?.orderId;
    logger.info(`Deleting order: ${orderId} for cust: ${req.headers.customerId}`);
    return await mongoService.deleteOrder(orderId);
}

async function fetchAllOrders(customerId){
    logger.info(`Fetching all orders of cust: ${customerId}`);
    return await mongoService.getAllOrders(customerId);
}

module.exports = {
    createOrder,
    deleteOrder,
    fetchAllOrders
}