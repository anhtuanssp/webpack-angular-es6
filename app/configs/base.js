var path = require('path');

const PATHS = {
    app: path.join(__dirname, './app'),
    build: path.join(__dirname, './build'),
    srcPath: path.join(__dirname, '/../')
};

const CONFIGS = {
    loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
            presets: ['es2015']
        }
    }, { test: /\.html/, loader: 'html' }],
    extensions: [
        '',
        '.js'
    ]
}

module.exports = {
    context: __dirname,
    debug: true,
    devServer: {
        outputPath: PATHS.build
    },
    output: {
        path: PATHS.build,
        filename: 'bundle.js'
    },
    module: {
        loaders: CONFIGS.loaders
    },
    resolve: {
        extensions: CONFIGS.extensions,
        alias: {
            root: PATHS.srcPath,
            utils: PATHS.srcPath + '/utils/'
        }
    },
}
