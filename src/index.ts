// Dependency Imports
import http = require('http');
import config = require('./config');
import serverHandler = require('./server');

// Initializing Server and letting serverHandler take care of the dirty work
const server = http.createServer((req, res) => {
    serverHandler.default(req, res);
});

// Listen on configuration port
server.listen(config.default.PORT, (error) => {
    if (error) {
        return console.log('Something went wrong...', error);
    }

    console.log(`Server is listening on port ${config.default.PORT}`);
});