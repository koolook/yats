var webpack = require('webpack'),
    path = require('path'),
    yargs = require('yargs');

var libraryName = 'MyLib',
    plugins = [],
    outputFile;

if (yargs.argv.p) {
    plugins.push(new webpack.optimize.UglifyJsPlugin({ minimize: true }));
    outputFile = libraryName + '.min.js';
} else {
    outputFile = libraryName + '.js';
}

plugins.push(new webpack.LoaderOptionsPlugin({
    options: {
        tslint: {
            emitErrors: true,
            failOnHint: true
        }
    }
}));

var config = {
    entry: [
        __dirname + '/src/index.ts'
    ],
    // devtool: 'source-map',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: outputFile,
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        loaders: [
            // {
            //     enforce: 'pre',
            //     test: /\.ts$/,
            //     loader: 'tslint-loader',
            //     exclude: /node_modules/,
            // },
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: [
                    /node_modules/
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.ts'],
        modules: [
            'node_modules',
            'src',
        ]
    },
    plugins: plugins,

};

module.exports = config;
