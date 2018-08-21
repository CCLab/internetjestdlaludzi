const gulp = require('gulp');  
const sass = require('gulp-sass');
const minifycss = require('gulp-clean-css');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

const config = {
  input: {
    css: [
      'src/css/*.css',
      'src/css/scss/*.scss',
    ],
    js: 'src/js/*.js',
  },
  output: {
    folder: 'dist',
    css: 'style.css',
    js: 'bundle.js',
  },
  options: {
    css: {
      outputStyle: 'expanded'
    }
  }
}

gulp.task('build-css', () => {
  return gulp
    .src(config.input.css)
    .pipe(sass(config.options.css).on('error', sass.logError))
    .pipe(concat(config.output.css))
    .pipe(minifycss())
    .pipe(gulp.dest(config.output.folder));
});

gulp.task('build-js', () => {
  return gulp
    .src(config.input.js)
    .pipe(concat(config.output.js))
    .pipe(babel({'presets': ['env']}))
    .pipe(uglify())
    .pipe(gulp.dest(config.output.folder));
});

gulp.task('watch', () => {
  gulp.watch(config.input.css, ['build-css']);
  gulp.watch(config.input.js, ['build-js']);
});

gulp.task('default', ['build-css', 'build-js']);