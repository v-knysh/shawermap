/**
 * Created by knyshv on 14.09.17.
 */

const path = require('path');

module.exports = {
    entry: './client/index.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public/js')
    },

    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            '/usr/lib/node_modules',
            'node_modules',
        ],
    },
    //
    // resolveLoader: {
    //     modules: [
    //         '/usr/lib/node_modules',
    //     ],
    // },

    module: {
        rules: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/,
                query: {
                    // presets: ['es2015', 'react'],
                    // presets: ['env', 'es2015', 'react'],
                    presets: ['env', 'stage-2', 'react'],
                }
            },
            {
                test: /\.css$/,
                // loader:'style!css!',
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.styl$/,
                use: [
                    // 'style-loader',
                    // 'css-loader',

                    {
                        loader: 'style-loader',
                    },
                    {
                        loader:'css-loader',
                    },
                    {
                        loader: 'stylus-loader',
                        // options: {
                        //     import: [
                        //         path.join(__dirname,
                        //             'client/config/variables.styl'),
                        //     ],
                        // },
                    },
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '../images/[name].[ext]',
                        }
                    },
                ]
            },
        ]
    }
};
