'use strict'

let path = require('path')

let BUILD_DIR = path.resolve(__dirname, 'dist')
let APP_DIR = path.resolve(__dirname, 'src')

let config = {
    entry: APP_DIR + '/App.js',
    cache: true,
    devtool: 'eval-source-map',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    stats: {
        warning: false
    },
    module: {
        loaders: [
            {
                test: /\.js?/,
                include: APP_DIR,
                loader: 'babel-loader'
            }],

    }
}

module.exports = config
