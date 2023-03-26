const Orders = require('../models/orders');
const mongoose = require('mongoose')

async function createOrder(data) {
    data._id = new mongoose.Types.ObjectId();
    let newOrder = new Orders(data);
    return await newOrder.save();
}

async function deleteOrder(orderId) {
    return await Orders.findOneAndDelete({orderId});
}

async function getAllOrders(customerId) {
    return await Orders.find({customerId}, {createdAt: 0, updatedAt: 0, _id: 0});
}

module.exports = {
    createOrder,
    deleteOrder,
    getAllOrders
}