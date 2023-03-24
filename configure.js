require("dotenv").config();

const app = require('./app');
const port = process.env.PORT;

app.on('ready', function() {
    app.listen(port, function() {
        console.log('Server running on port ' + port);
    });
});

(async function() {
    console.log('Initializing app');
    app.emit('ready');
})();

