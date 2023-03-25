const jwtUtils = require('../utils/jwtUtils');
const errorHandler = require('../errorhandler/generateErrors');
const constants = require('../utils/constantUtils');

async function verifyToken(req, res, next) {
    if(req.url.toLowerCase().endsWith('login') || req.url.toLowerCase().endsWith('signup') || req.url.toLowerCase().endsWith('fetch-all')){
        return;
    }
    let authorized = false;
    let token = req?.headers?.authorization.split(' ')[1];
    let claims = jwtUtils.verifyToken(token);

    if(claims?.email && claims?.customerId){
        authorized = true;
        req.headers.customerId = claims.customerId;
    }
    if(!authorized){
        errorHandler.throwError(401, constants.INVALID_JWT);
    }
    next();
}

module.exports = {
    verifyToken
}