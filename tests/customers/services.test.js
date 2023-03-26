const customerService = require('../../services/customers');
const constants = require('../../utils/constantUtils');

jest.mock('../../mongo/cust-store', () => require('../__mocks__/cust-store'));
jest.mock('../../utils/jwtUtils', () => require('../__mocks__/utils/jwtUtils'));

describe('Customers service', function () {
  let req = {
    body: {
      phone: 9000000001
    },
    headers: {

    }
  }

  test('signUp - successfully created', async function () {
    console.log('Testing signUp - 1');
    req.body.email = "akaash2@gmail.com";
    req.body.password = "password";
    let result = await customerService.signUp(req);
    expect(result).toHaveProperty("email");
  });

  test('signUp - email already present', async function () {
    console.log('Testing signUp - 2');
    req.body.email = "akaash@gmail.com";
    req.body.password = "password";
    try {
      await customerService.signUp(req);
    } catch (err) {
      expect(err.message).toBe(constants.EMAIL_ALREADY_PRESENT);
    }
  });

  test('login - valid password', async function () {
    console.log('Testing login - 1');
    req.body.email = "akaash@gmail.com";
    req.body.password = "password";
    let result = await customerService.login(req);
    expect(result).toHaveProperty("token");
  });

  test('login - invalid password', async function () {
    console.log('Testing login - 2');
    req.body.email = "akaash@gmail.com";
    req.body.password = "passwordd";
    try {
      await customerService.login(req);
    } catch (err) {
      expect(err.message).toBe(constants.INVALID_PWD);
    }
  });

  test('login - invalid body', async function () {
    console.log('Testing login - 3');
    req.body.password = "passwordd";
    try {
      await customerService.login(req);
    } catch (err) {
      expect(err.message).toBe(constants.INVALID_BODY);
    }
  });

  test('getCustomer', async function () {
    console.log('Testing getcustomer');
    req.headers.customerId = "b859887da51679768697";
    let result = await customerService.fetchCustomer(req);
    expect(result).toHaveProperty("email");
  });

  test('getAllCustomers', async function () {
    console.log('Testing getAllcustomers');
    let result = await customerService.fetchAllCustomers(req);
    expect(result.length).toBeGreaterThan(0);
  });

})