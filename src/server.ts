import url = require('url');
import router = require('./route/index');

// Test dependencies, remove for production
import pug = require('pug');
import path = require('path');

const serverHandler = (req, res) => {
    let parsedUrl = url.parse(req.url, true);
    let _path = parsedUrl.pathname;

    let trimmedPath = _path.replace(/^\/+|\/+$/g, '');

    let data = {
        'trimmedPath': trimmedPath,
        '_path': _path,
        'parsedUrl': parsedUrl
    };

    let headerData = router.default(data.trimmedPath, data);

    res.setHeader('Content-Type', headerData.contentType);
    res.writeHead(200);
    res.end(headerData.payload);

    // let payload = {
    //     'Requested Path': trimmedPath
    // };

    // let payloadString = JSON.stringify(payload);

    // res.setHeader('Content-Type', 'application/json');
    // res.writeHead(200);

    // res.end(payloadString);

    // console.log(payloadString);
};

export default serverHandler;