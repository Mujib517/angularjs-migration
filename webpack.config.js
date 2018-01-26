module.exports = {
    entry: {
        'ng1': __dirname + "/src/angular1.ts"
    },
    output: {
        path: __dirname + "/dist",
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    module: {
        loaders: [{ test: /\.ts$/, loader: 'ts-loader' }]
    }
}