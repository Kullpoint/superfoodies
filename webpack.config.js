const path = require('path');

module.exports = {
    resolve: {
        extensions: ['.js'],
    },
    entry: {
        'section-gallery': path.resolve(__dirname, 'src/scripts/sections/section-gallery.js')
    },
    output: {
        path: path.resolve(__dirname, 'assets'),
        filename: '[name].js'
    }
};