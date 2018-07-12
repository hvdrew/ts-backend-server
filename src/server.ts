// Dependencies
import url = require('url');
import router = require('./route/index');

// Interfaces
interface HeaderData {
    payload: any;
    contentType: string;
};

const serverHandler = (req, res) => {
    // Break up the requested URL, then pull the path from it
    let parsedUrl: url.UrlWithParsedQuery = url.parse(req.url, true);
    let _path: string = parsedUrl.pathname;

    // Trim up the path to make it clean and consistent
    let trimmedPath: string = _path.replace(/^\/+|\/+$/g, '');

    // Setup the data object to send into the router 
    let data = {
        'trimmedPath': trimmedPath,
        'fullPath': _path,
        'parsedUrl': parsedUrl
    };

    // Have the router determine what headers to use and prepare the payload
    let headerData: HeaderData = router.default(data);

    // Write Headers for the response
    res.writeHead(200, {
        'Content-Type': headerData.contentType,
        'Content-Encoding': 'identity',
        'charset': 'utf-8'
    });

    // Send the payload that was chosen by the router
    res.end(headerData.payload);
};

export default serverHandler;