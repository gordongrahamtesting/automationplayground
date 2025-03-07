const path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'webapp'),
    entry: './src/index.ts',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'webapp/dist'),
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'webapp'),
        },
        port: 3000,
    },
};