const customerService = require('../services/customers');
const constants = require('../utils/constantUtils');

async function signUp(req, res) {
    try {
        await customerService.signUp(req);
        res.status(200).json({message: constants.CUST_SAVED_SUCCESSFULLY});
    } catch (error) {
       res.status(error.statusCode).json({message: error.message});
    }
}

async function login(req, res){
    try {
        let token = await customerService.login(req);
        res.status(200).json({message: constants.LOGIN_SUCCESSFULL, token});
    } catch (error) {
       res.status(error.statusCode).json({message: error.message});
    }
}

async function fetchCustomer(req, res){
    try {
        let customer = await customerService.fetchCustomer(req);
        res.status(200).json({customer});
    } catch (error) {
       res.status(error.statusCode).json({message: error.message});
    }
}

async function updateCustomer(req, res){
    try {
        let customer = await customerService.updateCustomer(req);
        res.status(200).json({customer});
    } catch (error) {
       res.status(error.statusCode).json({message: error.message});
    }
}

async function fetchAllCustomers(req, res){
    try {
        let customers = await customerService.fetchAllCustomers(req);
        res.status(200).json({customers});
    } catch (error) {
       res.status(error.statusCode).json({message: error.message});
    }
}

module.exports = {
    signUp,
    login,
    fetchCustomer,
    updateCustomer,
    fetchAllCustomers
}