module.exports = {
    getCustomerByEmail: jest.fn((email) => {
        if(email == 'akaash@gmail.com'){
           return Promise.resolve({
                "email": "akaash@gmail.com",
                "password": "password",
                "phone": 9000011111
            })
        } else {
            return Promise.resolve(null);
        }
    }),

    getCustomerByPhone: jest.fn(() => {
        return Promise.resolve({
            "email": "akaash@gmail.com",
            "password": "password",
            "phone": 9000011111,
            'customerId': "b859887da51679768697"
        })
    }),

    getCustomerByCustId: jest.fn(() => {
        return Promise.resolve({
            "email": "akaash@gmail.com",
            "password": "password",
            "phone": 9000011111,
            'customerId': "b859887da51679768697"
        })
    }),

    getAllCustomers: jest.fn(() => {
        return Promise.resolve([{
            "email": "akaash@gmail.com",
            "password": "password",
            "phone": 9000011111,
            'customerId': "b859887da51679768697"
        }])
    }),

    createCustomer : jest.fn((data) => {
        return Promise.resolve({
            "email": data.email,
            "password": data.password,
            "phone": data.phone
        })
    }),

    updateCustomer: jest.fn(() => {
        return Promise.resolve({
            "email": "akaash@gmail.com",
            "password": "password",
            "phone": 9000011111,
            'customerId': "b859887da51679768697"
        })
    }),
}