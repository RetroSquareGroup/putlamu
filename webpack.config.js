var webpack = require('webpack');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = {
    context: __dirname + '/site',
    entry: './js/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.min.js'
    },
    stats: {
        colors: true,
        modules: true,
        reasons: true
    },
    progress: false,
    plugins: [
        new ngAnnotatePlugin({
            add: true,
            singleQuotes: true
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    module: {
        preLoaders: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'jshint'
        }]
    },
    jshint: {
        camelcase: true,
        failOnHint: true,
        emitErrors: true,
        reporter: require('jshint-loader-stylish')({
            style : 'true-stylish'
        })
    }
};
