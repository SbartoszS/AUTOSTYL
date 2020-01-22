var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify-es').default;
var rename = require('gulp-rename');

gulp.task('sass', function () {
    return gulp.src('../scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('../css'))
});

gulp.task('watch', function () {
    gulp.watch('../scss/**/*.scss', ['sass']);
});

gulp.task('css', function () {
    return gulp.src('../scss/**/*.scss')
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('../css'))
});

gulp.task('js', function () {
    return gulp.src('../js/**/*.js')
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uglify())
        .pipe(gulp.dest('../js'))
});

gulp.task('minify', ['js', 'css']);