// // Dependencies
// import renderFile = require('../../lib/render/index');

// // Interfaces
// interface HandlerObject {
//     [key: string]: function;
// };

// const chooseRoute = (path, data) => {
//     let chosenRoute = typeof(router[path]) !== 'undefined' ? router[path] : 'notFound';
//     let chosenHandler = handlers[chosenRoute];

//     chosenHandler(data, (statusCode, payload) => {

//     });
// };


// // Handler Object Initialization
// const handlers: HandlerObject = {};

// // Not Found handler (default handler for any invalid route)
// handlers.notFound = (data, callback) => {
//     let payload = renderFile.default('not-found', {
//         'requested-path': data.path
//     });    
//     callback(404, payload);
// };

// handlers.index = (data, callback) => {
//     let payload = renderFile.default('index');
//     callback(200, payload);
// };

// // Router object to map view files to routes
// const router: Object = {
//     '': 'index'
// };

// // Preparing for export
// const exportContents = {
//     'router': router,
//     'handlers': handlers
// };

// export default exportContents;