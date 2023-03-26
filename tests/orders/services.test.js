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

    test('createOrder - failed to create order', async function () {
        console.log('Testing createOrder - 2');
        delete req.headers.customerId;
        let result = await orderService.createOrder(req);
        expect(result).toBeNull();
    });

    test('delete - successfully deleted', async function () {
        console.log('Testing deleteOrder - 1');
        let result = await orderService.deleteOrder("8ca71679769687");
        expect(result).toHaveProperty("orderId");
    });

    test('delete - failed to delete order', async function () {
        console.log('Testing deleteOrder - 2');
        let result = await orderService.deleteOrder(null);
        expect(result).toBeNull();
    });

    test('getAllOrders', async function () {
        console.log('Testing getAllOrders - 1');
        let result = await orderService.fetchAllOrders('b859887da51679768697');
        expect(result.length).toBeGreaterThan(0);
    });

})