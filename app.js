const express = require('express')
const app = express();
const cors = require('cors');
const bearerToken = require('express-bearer-token');
const bodyParser = require('body-parser');
const customerRoutes = require('./routes/customers');
const orderRoutes = require('./routes/orders');

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

app.use('/customers', customerRoutes);
app.use('/orders', orderRoutes);

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({error: err.message});
})

module.exports = app;