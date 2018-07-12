import url = require('url');
import router = require('./route/index');

const serverHandler = (req, res) => {
    // Break up the requested URL, then pull the path from it
    let parsedUrl = url.parse(req.url, true);
    let _path = parsedUrl.pathname;

    // REMOVE LINE BELOW - TESTING ONLY
    console.log(_path);
    // REMOVE LINE ABOVE - TESTING ONLY

    // Trim up the path to make it clean and consistent
    let trimmedPath = _path.replace(/^\/+|\/+$/g, '');

    // Setup the data object to send into the router
    let data = {
        'trimmedPath': trimmedPath,
        '_path': _path,
        'parsedUrl': parsedUrl
    };

    // Have the router determine what headers to use and prepare the payload
    let headerData = router.default(data.trimmedPath, data);

    // Write Headers for the response
    res.writeHead(200, {
        'Content-Type': 'text/html',
        'Content-Encoding': 'identity',
        'charset': 'utf-8'
    });

    // Send the payload that was chosen by the router
    res.end(headerData.payload);
};

export default serverHandler;