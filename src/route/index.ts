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

const baseViewPath = path.join(__dirname, '../../client/views/');

const renderedViews = {
    'index': pug.renderFile(baseViewPath + 'index.pug'),
    '404': pug.renderFile(baseViewPath + '404.pug')
};

const mainRouter = (data: RequestData) => {
    switch ( data.fullPath ) {
        case '/':
            return {
                'payload': renderedViews['index'],
                'contentType': 'text/html'
            }
        default:
            return {
                'payload': renderedViews['404'],
                'contentType': 'text/html'
            }
    }
};

export default mainRouter;