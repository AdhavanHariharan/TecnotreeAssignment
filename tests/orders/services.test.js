const orderService = require('../../services/orders');
const constants = require('../../utils/constantUtils');

jest.mock('../../mongo/order-store', () => require('../__mocks__/order-store'));
jest.mock('../../utils/jwtUtils', () => require('../__mocks__/utils/jwtUtils'));

describe('Orders service', function () {
  let req = {
    body: {
        "name": "Iphone 13 mini",
        "quantity": 1,
        "paymentType": "Online",
        "address": {
            "city": "Chennai",
            "state": "Tamil Nadu"
        }
    },
    headers: {}
  }

  test('createOrder - successfully created', async function () {
    console.log('Testing createOrder - 1');
    req.headers.customerId = "b859887da51679768697";
    let result = await orderService.createOrder(req);
    expect(result).toHaveProperty("orderId");
  });

  test('createOrder - successfully created', async function () {
    console.log('Testing createOrder - 1');
    delete req.headers.customerId;
    let result = await orderService.createOrder(req);
    expect(result).toBeNull();
  });

})