const path = require('path');

module.exports = {
    resolve: {
        extensions: ['.js'],
    },
    entry: {
        //application
        'application': path.resolve(__dirname, 'src/scripts/application.js'),
        //main page sections
        'section-hero': path.resolve(__dirname, 'src/scripts/mainPage/section-hero.js'),
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