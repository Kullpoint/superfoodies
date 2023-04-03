
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const clean = require("gulp-clean-css");

const sassFiles = [
    //application
    "src/styles/application.scss",
    //sections
    "src/styles/sections/section-hero.scss",
];

gulp.task("dev", () => {
    return gulp.src(sassFiles)
        .pipe(sass())
        .pipe(clean({ compatibility: "ie11" }))
        .pipe(gulp.dest("assets"));
});

gulp.task("watch", () => {
    gulp.watch("src/styles/**/*.scss", gulp.series("dev"));
});
