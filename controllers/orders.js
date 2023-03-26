const orderService = require('../services/orders');
const constants = require('../utils/constantUtils');

async function createOrder(req, res){
    try {
        let order = await orderService.createOrder(req);
        res.status(200).json({message: constants.ORDER_SAVED_SUCCESSFULLY, order});
    } catch (error) {
       res.status(error.statusCode).json({message: error.message});
    }
}

async function deleteOrder(req, res){
    try {
        await orderService.deleteOrder(req);
        res.status(200).json({message: constants.ORDER_DELETED_SUCCESSFULLY});
    } catch (error) {
       res.status(error.statusCode).json({message: error.message});
    }
}

async function fetchAllOrders(req, res){
    try {
        let orders = await orderService.fetchAllOrders(req.headers.customerId);
        res.status(200).json({orders});
    } catch (error) {
       res.status(error.statusCode).json({message: error.message});
    }
}

module.exports = {
    createOrder,
    deleteOrder,
    fetchAllOrders
}