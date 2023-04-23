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
        //product page sections
        'section-product': path.resolve(__dirname, 'src/scripts/productPage/section-product.js'),
        'section-pd': path.resolve(__dirname, 'src/scripts/productPage/section-pd.js'),
        //sections
        'section-pwi': path.resolve(__dirname, 'src/scripts/sections/section-pwi.js'),
        'section-gallery': path.resolve(__dirname, 'src/scripts/sections/section-gallery.js'),
        'section-questions': path.resolve(__dirname, 'src/scripts/sections/section-questions.js'),
        'section-cart': path.resolve(__dirname, 'src/scripts/sections/section-cart.js'),
        'section-collection': path.resolve(__dirname, 'src/scripts/sections/section-collection.js'),
        'section-blog': path.resolve(__dirname, 'src/scripts/sections/section-blog.js'),
        'section-search': path.resolve(__dirname, 'src/scripts/sections/section-search.js'),
    },
    output: {
        path: path.resolve(__dirname, 'assets'),
        filename: '[name].js'
    }
};