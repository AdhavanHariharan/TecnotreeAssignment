const crypto = require('crypto');

function createTimestamp() {
    return Math.floor(Date.now() / 1000);
};

function genRandomString (length) {
    return crypto.randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length).concat(createTimestamp());
};

module.exports = {
    createTimestamp,
    genRandomString
}