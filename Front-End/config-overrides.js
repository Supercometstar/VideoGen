const path = require('path');

module.exports = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@pages': path.resolve(__dirname, 'src/app/pages'),
      '@components': path.resolve(__dirname, 'src/app/components'),
      '@routes': path.resolve(__dirname, 'src/app/routes'),
      '@store': path.resolve(__dirname, 'src/app/store'),
      '@utils': path.resolve(__dirname, 'src/app/utils'),
      '@styles': path.resolve(__dirname, 'src/app/styles'),
      '@layouts': path.resolve(__dirname, 'src/app/layouts'),
    };

    config.ignoreWarnings = [
      /Failed to parse source map/
    ]

    return config;
  },

  devServer: (configFunction) => {
    return (proxy, allowedHost) => {
      const config = configFunction(proxy, allowedHost);

      config.setupMiddlewares = (middlewares, devServer) => {
        if (devServer) {
          devServer.app.use((req, res, next) => {
            next();
          });
        }
        return middlewares;
      };

      return config;
    };
  },
};