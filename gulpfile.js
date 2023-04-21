
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const clean = require('gulp-clean-css');

const sassFiles = [
    //application
    'src/styles/application.scss',
    //sections
    //main page
    'src/styles/sections/mainPage/section-hero.scss',
    //product page
    'src/styles/sections/productPage/productPage.scss',
    'src/styles/sections/productPage/section-product.scss',
    'src/styles/sections/productPage/section-pd.scss',
    'src/styles/sections/productPage/section-pii.scss',
    //collection page
    'src/styles/sections/collectionPage/section-collection.scss',
    //all reusable sections
    'src/styles/sections/section-pwi.scss',
    'src/styles/sections/section-iwi.scss',
    'src/styles/sections/section-articles.scss',
    'src/styles/sections/section-ambassadors.scss',
    'src/styles/sections/section-categories.scss',
    'src/styles/sections/section-video.scss',
    'src/styles/sections/section-ii.scss',
    'src/styles/sections/section-gallery.scss',
    'src/styles/sections/section-collections.scss',
    'src/styles/sections/section-reviews.scss',
    'src/styles/sections/section-recipes.scss',
    'src/styles/sections/section-subscribe.scss',
    'src/styles/sections/section-iwv.scss',
    'src/styles/sections/section-fiwt.scss',
    'src/styles/sections/section-fiwi.scss',
    'src/styles/sections/section-fiwi-2.scss',
    'src/styles/sections/section-questions.scss',
    'src/styles/sections/section-cart.scss',
    'src/styles/sections/section-contact.scss',
    'src/styles/sections/section-contact.scss',
    'src/styles/sections/section-blog.scss',
    'src/styles/sections/section-article.scss',
    'src/styles/sections/section-hero-2.scss',
    'src/styles/sections/section-aiwt.scss',
    'src/styles/sections/section-ats.scss',
    'src/styles/sections/section-ats-2.scss',
];

gulp.task('dev', () => {
    return gulp.src(sassFiles)
        .pipe(sass())
        .pipe(clean({ compatibility: 'ie11' }))
        .pipe(gulp.dest('assets'));
});

gulp.task('watch', () => {
    gulp.watch('src/styles/**/*.scss', gulp.series('dev'));
});
