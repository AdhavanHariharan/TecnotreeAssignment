const jwtUtils = require('../utils/jwtUtils');
const helperUtils = require('../utils/helperUtils');
const constants = require('../utils/constantUtils');
const mongoService = require('../mongo/cust-service');
const errorHandler = require('../errorhandler/generateErrors');

const {logger} = require('../logger/config');

async function signUp(req) {
    const Customer = await mongoService.getCustomerByEmail(req.body.email);
    if (Customer) {
        errorHandler.throwError(400, constants.EMAIL_ALREADY_PRESENT);
    } else {
        let encryptedPassword = await jwtUtils.generateEncryptedPassword(req.body.password);
        try {
            logger.info(`Creating a new account`);
            let custData = {
                email: req.body.email,
                password: encryptedPassword,
                phone: req.body.phone,
                customerId: helperUtils.genRandomString(10)
            }
            return await mongoService.createCustomer(custData);
        } catch (error) {
            logger.error(`Error while creating a new account`);
            errorHandler.throwError(500, error);
        }
    }
}

async function login(req){
    let phone = req?.body?.phone;
    let email = req?.body?.email;
    if(!email && !phone) {
        errorHandler.throwError(400, constants.INVALID_BODY);
    }
    if(email) {
        logger.info(`Fetching account by email`);
        var Customer = await mongoService.getCustomerByEmail(email);
    } else {
        logger.info(`Fetching account by phone`);
        var Customer = await mongoService.getCustomerByPhone(phone);
    }
    
    if (!Customer) {
        errorHandler.throwError(400, constants.EMAIL_NOT_REGISTERED);
    } else {
        logger.info(`Validating password`);
        let validPassword = await jwtUtils.validatePassword(req.body.password, Customer.password);
        if(!validPassword) {
            errorHandler.throwError(401, constants.INVALID_PWD);
        } else {
            logger.info(`Generating JWT`);
            let token = jwtUtils.generateJWT({
                email: Customer.email,
                customerId: Customer.customerId
                });
            return token;
        }
    }
}

async function fetchCustomer(req){
    return await mongoService.getCustomerByCustId(req.headers.customerId);
}

async function updateCustomer(req){
    logger.info(`Updating customer ${req.headers.customerId}`);
    if(req.body.password){
        let encryptedPassword = await jwtUtils.generateEncryptedPassword(req.body.password);
        req.body.password = encryptedPassword;
    }
    return await mongoService.updateCustomer(req.body, req.headers.customerId);
}

async function fetchAllCustomers(){
    return await mongoService.getAllCustomers();
}

module.exports = {
    signUp,
    login,
    fetchCustomer,
    updateCustomer,
    fetchAllCustomers
}