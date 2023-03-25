const mongoose = require('mongoose');
const Customers = require('../models/customers');

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
    let newCustomer = new Customers(data);
    return await newCustomer.save();
}

async function updateCustomer(data, customerId) {
   return await Customers.findOneAndUpdate({customerId}, {$set: {...data}});
}

module.exports = {
    getCustomerByEmail,
    getCustomerByPhone,
    getCustomerByCustId,
    getAllCustomers,
    updateCustomer,
    createCustomer
}