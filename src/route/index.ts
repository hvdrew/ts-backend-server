// Dependency/Helper imports
import url = require('url');
import path = require('path');
import pug = require('pug');

// Interfaces
interface RequestData {
    trimmedPath: string;
    fullPath: string;
    parsedUrl: url.UrlWithParsedQuery;
}
interface HeaderData {
    payload: any;
    contentType: string;
};

const baseViewPath = path.join(__dirname, '../../client/views/');

// Let's make this into a key-object based map to allow for titles and other variables to be stored
const viewMap = {
    '/': 'index.pug',
    '/about': 'about.pug',
    '/contact': 'contact.pug'
};

const mainRouter = (data: RequestData) => {
    
    // Choose a view based on the requested path. If no view matches use the 404 handler
    let chosenView = typeof(viewMap[data.fullPath]) == 'string' ? viewMap[data.fullPath] : '404.pug';

    // Build out full path to view file
    let viewPath = path.join(baseViewPath, chosenView);

    // Render view with pug and prepare it as a payload
    let payload = pug.renderFile(viewPath);

    // Set up headerData
    let headerData: HeaderData = {
        'payload': payload,
        'contentType': 'text/html'
    };

    return headerData;
    
};

export default mainRouter;