const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


module.exports.generateEncryptedPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}

module.exports.validatePassword = function (credentials, password) {
    return bcrypt.compare(credentials, password);;
}

module.exports.generateJWT = function (data) {
    return jwt.sign(data, process.env.JWT_SECRET, {expiresIn: '12h'});
}

module.exports.verifyToken = function (token)  {
    console.log("Verifying JWT");
    let tokenData = verifyJWT(token, process.env.JWT_SECRET);
    return tokenData;
};

function verifyJWT(token) {
    var data = {};
    try {
        data = jwt.verify(token, process.env.JWT_SECRET);
    } catch(error) {
        console.log('Error while verifying JWT', error);
    }
    return data;
};
