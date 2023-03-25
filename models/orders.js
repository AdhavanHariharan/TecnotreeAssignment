const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
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
    Address: {
        type: Object,
        require: true
    },
    createdAt: {
        type: String,
        default: null,
    },
    updatedAt: {
        type: String,
    },
}, {
    strict: false
})

module.exports = mongoose.model('Orders', orderSchema)