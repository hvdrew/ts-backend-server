import http = require('http');
import config = require('./config');

const server = http.createServer((req, res) => {
    
    let payload = {
        'Requested Path': req.url
    };
    let payloadString = JSON.stringify(payload);

    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);

    res.end(payloadString);
});

server.listen(config.default.PORT, (error) => {
    if (error) {
        return console.log('Something went wrong...', error);
    }

    console.log(`Server is listening on port ${config.default.PORT}`);
});