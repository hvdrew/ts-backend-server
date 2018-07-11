const placeholder = {};

// Not finished
// Pass the trimmedPath into this function to filter traffic to it's designated handlers
const chooseRoute = (path, data) => {
    if (path.indexOf('api') === 0) {
        // Pass data into API handler for further processing
    } else if (path.indexOf('admin') === 0) {
        // Pass data into Admin handler for further processing
    } else {
        // Pass data into Client handler for further processing
    }
};

export default placeholder;