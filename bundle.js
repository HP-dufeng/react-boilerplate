const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackconfig = require('./webpack.config.js');

const webpackcompiler = webpack(webpackconfig);
 
//enable webpack middleware for hot-reloads in development
module.exports = function (app) {
    app.use(webpackDevMiddleware(webpackcompiler, {
        publicPath: webpackconfig.output.publicPath,
        
        // The rest is terminal configurations
        quiet: false,
        noInfo: true,
        stats: {
            colors: true,
            // this reduces the amount of stuff I see in my terminal; configure to your needs
            chunks: false, 
            'errors-only': true
        }
    }));
    app.use(webpackHotMiddleware(webpackcompiler, {
        log: console.log
    }));
 
    return app;
};
