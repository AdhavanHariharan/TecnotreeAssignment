module.exports = {
    validatePassword: jest.fn((credentials, password) => {
        if(password == "password"){
           return Promise.resolve(true);
        } else {
            return Promise.resolve(false);
        }
    }),

    generateJWT: jest.fn(() => {
        return Promise.resolve({token: 'token'});
    }),

    generateEncryptedPassword: jest.fn(() => {
        return Promise.resolve('sadsadbadbdbkkjn!12122');
    })
}