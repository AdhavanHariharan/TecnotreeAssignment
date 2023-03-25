const express = require('express');
const router = express.Router();
const app = express();
const handlerUtils = require('../utils/handlerUtils');
const controller = require('../controllers/orders');

router.post('/v1/create', 
    handlerUtils.asyncMiddleware(controller.createOrder));

router.delete('/v1/delete', 
    handlerUtils.asyncMiddleware(controller.deleteOrder));

router.get('/v1', 
    handlerUtils.asyncMiddleware(controller.fetchAllOrders));

module.exports = router;