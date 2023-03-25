const express = require('express')
const app = express();
const cors = require('cors');
const { wrap } = require('@awaitjs/express');
const bearerToken = require('express-bearer-token');
const {ValidationError} = require('express-json-validator-middleware');
const bodyParser = require('body-parser');
const customerRoutes = require('./routes/customers');
const orderRoutes = require('./routes/orders');
const authrorization = require('./middlewares/authorization');

app.use(express.urlencoded({extended: true}));

app.use(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PATCH, DELETE, PUT");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, X-Amp-Device-Id, X-Amp-Session-Id");

    next();
});

app.use(bearerToken());
app.use(bodyParser.json());

app.use(wrap(authrorization.verifyToken));

app.use('/customers', customerRoutes);
app.use('/orders', orderRoutes);

app.use((err, req, res, next) => {console.log(err)
    if(err instanceof ValidationError){
        res.status(400).json({
            error: err.validationErrors,
        });
    } else {
        res.status(err.statusCode || 500).json({error: err.message});
    }
})

module.exports = app;