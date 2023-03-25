const express = require('express');
const router = express.Router();
const app = express();
const handlerUtils = require('../utils/handlerUtils');
const controller = require('../controllers/customers');

app.post('/v1/singup', 
    handlerUtils.asyncMiddleware(controller.signup));

app.get('/v1/details', 
    handlerUtils.asyncMiddleware(controller.fetchCustomer));

app.patch('/v1/info', 
    handlerUtils.asyncMiddleware(controller.updateCustomer));

app.get('/v1/fetch-all/details', 
    handlerUtils.asyncMiddleware(controller.fetchAllCustomers));


module.exports = router;