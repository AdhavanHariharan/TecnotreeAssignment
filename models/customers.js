const mongoose = require('mongoose')
const helperUtils = require('../utils/helperUtils');

const customerSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: new mongoose.Types.ObjectId(),
    },
    email: {
        type: String,
        required: true
    },
    customerId: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        require: false
    },
    createdAt: {
        type: Number,
        default: helperUtils.createTimestamp(),
    },
    updatedAt: {
        type: Date,
        default: null,
    },
}, {
    strict: false,
    versionKey: false 
})

module.exports = mongoose.model('Customers', customerSchema)