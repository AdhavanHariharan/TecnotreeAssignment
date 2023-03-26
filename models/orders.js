const mongoose = require('mongoose')
const helperUtils = require('../utils/helperUtils');

const orderSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId
    },
    orderId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        require: true
    },
    address: {
        type: Object,
        require: true
    },
    paymentType: {
        type: String,
        require: true
    },
    createdAt: {
        type: String,
        default: helperUtils.createTimestamp(),
    }
}, {
    strict: false,
    versionKey: false 
})

module.exports = mongoose.model('Orders', orderSchema)