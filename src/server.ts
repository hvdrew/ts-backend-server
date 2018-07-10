import url = require('url');

const serverHandler = (req, res) => {
    let parsedUrl = url.parse(req.url, true);
    let path = parsedUrl.pathname;

    // Not used yet, but will be utilized for regulating paths and routing requests
    let trimmedPath = path.replace(/^\/+|\/+$/g, '');

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