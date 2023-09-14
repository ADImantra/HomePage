const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        home:'./src/home.js',
        projects: './src/projects.js'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.css/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'ADI3 // HOME',
            template: './src/pages/home.html',
            inject: 'body',
            chunks: ['home'],
            filename: 'home.html',
        }),
        new HtmlWebpackPlugin({
            title: 'ADI3 // PROJECTS',
            template: './src/pages/projects.html',
            inject: 'body',
            chunks: ['projects'],
            filename: 'projects.html',
        }),
    ],
    output: {
        filename: '[name].main.js',
        path: path.resolve(__dirname, `dist`),
        clean: true,
    },
};