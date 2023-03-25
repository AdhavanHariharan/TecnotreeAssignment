const mongoStore = require('./cust-store');

async function getCustomerByEmail(email) {
    return await mongoStore.getCustomerByEmail(email);
}

async function getCustomerByPhone(phone) {
    return await mongoStore.getCustomerByPhone(phone);
}

async function getCustomerByCustId(custId) {
    return await mongoStore.getCustomerByCustId(custId);
}

async function getAllCustomers() {
    return await mongoStore.getAllCustomers();
}

async function createCustomer(data) {
    return await mongoStore.createCustomer(data);
}

async function updateCustomer(data, customerId) {
    return await mongoStore.updateCustomer(data, customerId);
}

module.exports = {
    getCustomerByEmail,
    getCustomerByPhone,
    getCustomerByCustId,
    getAllCustomers,
    updateCustomer,
    createCustomer
}