const express = require('express');
const router = express.Router();
const app = express();
const handlerUtils = require('../utils/handlerUtils');
const controller = require('../controllers/orders');

app.post('/v1/create', 
    handlerUtils.asyncMiddleware(controller.createOrder));

app.delete('/v1/delete', 
    handlerUtils.asyncMiddleware(controller.deleteOrder));

app.get('/v1/details', 
    handlerUtils.asyncMiddleware(controller.fetchAllOrders));

module.exports = router;