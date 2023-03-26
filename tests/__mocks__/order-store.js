module.exports = {
    createOrder: jest.fn((data) => {
        if(data.customerId){
           return Promise.resolve({
            "_id": "641f40505730f03097326505",
            "orderId": "8ca71679769687",
            "name": "Iphone 13 mini",
            "quantity": 1,
            "address": {
                "city": "Chennai",
                "state": "Tamil Nadu"
            },
            "paymentType": "Online",
            "createdAt": "1679769680",
            "customerId": "b859887da51679768697"
        })
        } else {
            return Promise.resolve(null);
        }
    }),
}