module.exports.throwError = function (statusCode, message) {
    let err = new Error(message);
    err.statusCode = statusCode;
    throw err;
}