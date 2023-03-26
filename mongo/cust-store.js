const helperUtils = require('../utils/helperUtils');
const Customers = require('../models/customers');
const mongoose = require('mongoose')

async function getCustomerByEmail(email) {
    return await Customers.findOne({email});
}

async function getCustomerByPhone(phone) {
    return await Customers.findOne({phone});
}

async function getCustomerByCustId(customerId) {
    return await Customers.findOne({customerId}, {password: 0, createdAt: 0, updatedAt: 0, _id: 0});
}

async function getAllCustomers() {
    return await Customers.find({}, {password: 0, createdAt: 0, updatedAt: 0, _id: 0});
}

async function createCustomer(data) {
    data._id = new mongoose.Types.ObjectId();
    let newCustomer = new Customers(data);
    return await newCustomer.save();
}

async function updateCustomer(data, customerId) {
   data.updatedAt = helperUtils.createTimestamp();
   return await Customers.findOneAndUpdate({customerId}, {$set: {...data}}, {projection: {password: 0, createdAt: 0, updatedAt: 0, _id: 0}, new: true});
}

module.exports = {
    getCustomerByEmail,
    getCustomerByPhone,
    getCustomerByCustId,
    getAllCustomers,
    updateCustomer,
    createCustomer
}