const express = require('express');
const router = express.Router();
const handlerUtils = require('../utils/handlerUtils');
const controller = require('../controllers/orders');
const validate = require('../utils/validateUtils');

router.post('/v1',
    validate({body: createOrderSchema()}),
    handlerUtils.asyncMiddleware(controller.createOrder));

router.delete('/v1/cancel', 
    handlerUtils.asyncMiddleware(controller.deleteOrder));

router.get('/v1', 
    handlerUtils.asyncMiddleware(controller.fetchAllOrders));

function createOrderSchema() {
    return {
        type: 'object',
        properties: {
            name: {
                type: 'string',
            },
            quantity: {
                type: 'number',
            },
            paymentType: {
                type: 'string',
            },
            address: {
                type: 'object'
            }
        },
        required: ['name', 'quantity', 'paymentType', 'address'],
        additionalProperties: true
    };
}
module.exports = router;