interface ConfigCollection {
    development: Config;
    production: Config;
};

interface Config {
    PORT: number;
    envName: string;
};

let configurations: ConfigCollection = {
    // Development Configuration
    development: {
        PORT: 3000,
        envName: 'development'
    },
    
    // Production Configuration
    production: {
        PORT: 8080,
        envName: 'production'
    }
};

// ================ //

// Check if a configuration was set when the application started, if not then use development
const chosenConfig = typeof(process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : 'development';

// Use the config if it exists, or use the development
const activeConfiguration = typeof(configurations[chosenConfig]) !== 'undefined' ? configurations[chosenConfig] : configurations.development;

// Export the active configuration
export default activeConfiguration;