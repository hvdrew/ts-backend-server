import pug = require('pug');
import path = require('path');

const resolveViewPath = (view) => {
    let viewPath = path.join(__dirname, `../../../client/views/${view}.pug`);
    return viewPath;
};

const renderView = (view: string, data = {}) => {
    let renderedFile = pug.renderFile(resolveViewPath(view), data);
    return renderedFile;
};

export default renderView;