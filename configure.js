require("dotenv").config();

const app = require('./app');
const mongo = require('./mongo/connection');

const port = process.env.PORT;

app.on('ready', function() {
    app.listen(port, function() {
        console.log('Server running on port ' + port);
    });
});

(async function() {
    console.log('Initializing database');
    await mongo.intializeDatabase();
    app.emit('ready');
})();

