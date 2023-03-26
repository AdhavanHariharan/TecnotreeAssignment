# TecnotreeAssignment
REST APIs for Online shopping 

TECHNOLOGIES AND LIBRARIES USED:
1. Node.JS
2. Express.JS
3. Mongo Atlas
4. Jest (Test cases)
5. Winston (Logging)
6. Mongoose (to connect to mongo database)

REQUIREMENTS TO RUN THE APPLICATION:
1. Any IDE to run Node.JS code
2. Node version - 14 and above is MANDATORY (optional chaining is used in code and also in mongoose).

STEPS TO RUN THE APPLICATION:
1. Install node modules.
2. After installing node modules open terminal and hit 'npm start'.

STEPS TO RUN TEST CASES:
1. Hit 'npm test'.

APIs:
1. singup - POST - to register customer
2. login - POST - to login and get JWT token
3. updateCustomer - PATCH (provide JWT in headers)
4. getCustomer - GET (no need to provide customerId as it can be obtained from JWT)
5. getAllCustomers - GET - Lists all customers

6. createOrder - POST (provide JWT in headers) - save order for the customerId in JWT
6. deleteOrder - DELETE (provide JWT in headers and orderId in query params) - delete order for the customerId in JWT
6. getOrders - GET (provide JWT in headers) - Lists all orders for the customerId in JWT

NOTE:
Added postman collection in the git. Please download and import it and run the APIs if needed.
