const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const DIST_PATH = path.resolve(__dirname, 'src', 'dist');

module.exports = {
    entry: './src/app/app.tsx',
    output: {
        filename: 'bundle.js',
        path: DIST_PATH
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js", "scss"],
        alias: {
            'mini-toastr': path.resolve( __dirname, 'node_modules/mini-toastr', 'dist/mini-toastr.es5.js')
        }
    },
    module: {

        loaders: [
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
            { test: /\.tsx?$/, loader: "babel-loader!ts-loader" },
            { test: /\.scss?$/, loader: "style-loader!css-loader!sass-loader" },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ],
    },
    plugins: [
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, 'src', 'assets'),
            to: path.resolve(DIST_PATH, 'assets')
        }]),
        //todo:uncomment for production mode
        // new webpack.DefinePlugin({
        //     'process.env': {
        //         NODE_ENV: JSON.stringify('production')
        //     }
        // })
        new HtmlWebpackPlugin({
            inject: true,
            hash: true,
            template: 'src/index.html'
        })
    ]
};
