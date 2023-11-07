const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const imagemin = require('gulp-imagemin')
const uglify = require('gulp-uglify')

function compilaSASS(){
    return gulp.src('./source/styles/main.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('./build/styles'))
}

function comprimeImg(){
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'))
}

function comprimeJS(){
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'))
}

exports.default = function(){
    gulp.watch('source/styles/*.scss', {ignoreInitial:false}, gulp.series(compilaSASS))
    gulp.watch('source/images/*', {ignoreInitial:false}, gulp.series(comprimeImg))
    gulp.watch('source/scripts/*.js', {ignoreInitial:false}, gulp.series(comprimeJS))
}