// import chooseClientRoute = require('./client/index');
import renderHelper = require('../lib/render/index');

// Pass the trimmedPath into this function to filter traffic to it's designated handlers
const chooseRoute = (path, data) => {
    if (path.indexOf('api') === 0) {
        // Pass data into API handler for further processing
        let payload = {
            'Requested Path': data.trimmedPath
        };

        let payloadString = JSON.stringify(payload);
        let contentType = 'application/json';

        let returnValue = {
            'payload': payloadString,
            'contentType': contentType
        };
        
        return returnValue; 
    } else if (path.indexOf('admin') === 0) {
        // Pass data into Admin handler for further processing
    } else {
        // chooseClientRoute.default(path, data);
        let payload = renderHelper.default('index', {
            'path': path
        });
        let contentType = 'text/html';

        let returnValue = {
            'payload': payload,
            'contentType': contentType
        };

        return returnValue;
        // Render a template file for now
    }
};

export default chooseRoute;