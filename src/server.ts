import url = require('url');
import router = require('./route/index');

// Test dependencies, remove for production
import pug = require('pug');
import path = require('path');

const serverHandler = (req, res) => {
    let parsedUrl = url.parse(req.url, true);
    let _path = parsedUrl.pathname;

    // Not used yet, but will be utilized for regulating paths and routing requests
    let trimmedPath = _path.replace(/^\/+|\/+$/g, '');

    // TESTING PUG ENGINE, REMOVE ON PRODUCTION
    // if (trimmedPath === 'test') {
    //     console.log('test path triggered');
    //     let file = path.join(__dirname, '../client/views/index.pug');
    //     let renderedFile = pug.renderFile(file, {test: 'Hayo'});

    //     res.setHeader('Content-Type', 'text/html');
    //     res.writeHead(200);
        
    //     res.end(renderedFile);

    //     return console.log('Rendered template for test path.');
    // }
    // END OF TESTS

    let payload = {
        'Requested Path': trimmedPath
    };

    let payloadString = JSON.stringify(payload);

    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);

    res.end(payloadString);

    console.log(payloadString);
};

export default serverHandler;