const path = require('path');

module.exports = {
    resolve: {
        extensions: ['.js'],
    },
    entry: {
        //main
        'application': path.resolve(__dirname, 'src/scripts/application.js'),
        //sections
        'section-pwi': path.resolve(__dirname, 'src/scripts/sections/section-pwi.js'),
        'section-gallery': path.resolve(__dirname, 'src/scripts/sections/section-gallery.js'),
        'section-cart': path.resolve(__dirname, 'src/scripts/sections/section-cart.js'),
    },
    output: {
        path: path.resolve(__dirname, 'assets'),
        filename: '[name].js'
    }
};