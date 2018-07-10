import http = require('http');
import config = require('./config');
import serverHandler = require('./server');

const server = http.createServer((req, res) => {
    serverHandler.default(req, res);
});

server.listen(config.default.PORT, (error) => {
    if (error) {
        return console.log('Something went wrong...', error);
    }

    console.log(`Server is listening on port ${config.default.PORT}`);
});