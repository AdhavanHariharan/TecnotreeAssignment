const express = require('express');
const router = express.Router();
const handlerUtils = require('../utils/handlerUtils');
const controller = require('../controllers/customers');
const validate = require('../utils/validateUtils');

router.post('/v1/signup', 
    validate({body: singUpSchema()}),
    handlerUtils.asyncMiddleware(controller.signUp));

router.post('/v1/login', 
    validate({body: loginSchema()}),
    handlerUtils.asyncMiddleware(controller.login));

router.get('/v1', 
    handlerUtils.asyncMiddleware(controller.fetchCustomer));

router.patch('/v1', 
    handlerUtils.asyncMiddleware(controller.updateCustomer));

router.get('/v1/fetch-all', 
    handlerUtils.asyncMiddleware(controller.fetchAllCustomers));

function singUpSchema() {
    return {
        type: 'object',
        properties: {
            email: {
                type: 'string',
            },
            password: {
                type: 'string',
            },
            phone: {
                type: 'number',
            }
        },
        required: ['email', 'password'],
        additionalProperties: true
    };
}

function loginSchema() {
    return {
        type: 'object',
        properties: {
            email: {
                type: 'string',
            },
            password: {
                type: 'string',
            },
            phone: {
                type: 'number',
            }
        },
        required: ['password'],
        additionalProperties: false
    };
}

module.exports = router;