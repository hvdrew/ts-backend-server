import http = require('http');
import config = require('./config');

const server = http.createServer((req, res) => {
    res.end(`Hello! You visited the ${req.url} path of this api.`);
});

server.listen(config.default.PORT, (error) => {
    if (error) {
        return console.log('Something went wrong...', error);
    }

    console.log(`Server is listening on port ${config.default.PORT}`);
});