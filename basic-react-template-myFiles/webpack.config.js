//Load the plugin in webpack.config.js file
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader", 'eslint-loader']
            },

            //Add HTML loader to server HTML files
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            //Add CSS loader
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            }
            
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        })
    ] 
}