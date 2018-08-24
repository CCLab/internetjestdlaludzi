const gulp = require('gulp');  
const sass = require('gulp-sass');
const minifycss = require('gulp-clean-css');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const replace = require('gulp-replace');
const rename = require('gulp-rename');
const package = require('./package.json');

const config = {
  input: {
    css: [
      'node_modules/bootstrap/scss/bootstrap.scss',
      'src/scss/*.scss',
    ],
    js: [
      'node_modules/jquery/dist/jquery.js',
      'src/js/*.js',
    ],
    html: 'index.html',
  },
  output: {
    folder: {
      js: 'dist/js',
      css: 'dist/css',
      html: 'dist'
    },
    css: `${package.name}.css`,
    js: `${package.name}.js`,
    html: `template-${package.name}.php`,
  },
  sassOptions: {
    dev: {
      outputStyle: 'expanded',
    },
    prod: {
      outputStyle: 'compressed',
    }
  }
}
const livedist = proccess.env.LIVE_DIST_FOLDER || 'dist/';
const replacements = {
  assets: ['/assets/', livedist + 'images/' + package.name + '/'],
  depend: ['dist/', livedist],
  footer: ['<footer></footer>','<?php get_footer(); ?>'],
  header: ['<!',`<?php
/*
 * Template name: Internet jest dla ludzi landing
 */
?><!`],
}

gulp.task('build-css', () => {
  return gulp
    .src(config.input.css)
    .pipe(sass(config.sassOptions.dev).on('error', sass.logError))
    .pipe(concat(config.output.css))
    .pipe(gulp.dest(config.output.folder.css));
});

gulp.task('build-js', () => {
  return gulp
    .src(config.input.js)
    .pipe(concat(config.output.js))
    .pipe(babel({'presets': ['env']}).on('error', console.error.bind(console)))
    .pipe(uglify())
    .pipe(gulp.dest(config.output.folder.js));
});
gulp.task('prod-css', () => {
  return gulp
    .src(config.input.css)
    .pipe(sass(config.sassOptions.prod).on('error', sass.logError))
    .pipe(replace(replacements.assets[0], replacements.assets[1]))
    .pipe(concat(config.output.css))
    .pipe(minifycss())
    .pipe(gulp.dest(config.output.folder.css));
});
gulp.task('deploy', ['prod-css', 'build-js'], () => {
  return gulp
    .src(config.input.html)
    .pipe(rename(config.output.html))
    .pipe(replace(replacements.depend[0], replacements.depend[1]))
    .pipe(replace(replacements.assets[0], replacements.assets[1]))
    .pipe(replace(replacements.header[0], replacements.header[1]))
    .pipe(replace(replacements.footer[0], replacements.footer[1]))
    .pipe(gulp.dest(config.output.folder.html))
})
gulp.task('watch', ['build-css', 'build-js'], () => {
  gulp.watch(config.input.css, ['build-css']);
  gulp.watch(config.input.js, ['build-js']);
});

gulp.task('default', ['build-css', 'build-js']);
