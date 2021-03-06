module.exports = {
    cache: true,

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    context: __dirname,

    entry: {
        app: [
            'webpack/hot/dev-server',
            './index.jsx'
        ]
    },

    output: {
        path: './build',
        filename: 'bundle.js',
        publicPath: '/build/'
    },

    devServer: {
        host: '0.0.0.0',
        port: 8080,
        inline: true
    },

    module: {
        loaders: [{
            test: /(\.js|\.jsx)$/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'stage-0', 'react']
            }
        }]
    }
};
