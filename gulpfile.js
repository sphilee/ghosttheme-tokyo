// Gulpfile.js running on stratumui,
// a css framework available on npmjs.com
'use strict';

var gulp = require('gulp'),
  sass = require('gulp-sass'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify-es'),
  rename = require('gulp-rename'),
  handlebars = require('gulp-handlebars'),
  declare = require('gulp-declare'),
  cleanCSS = require('gulp-clean-css'),
  autoprefixer = require('gulp-autoprefixer'),
  postcss = require('gulp-postcss'),
  sourcemaps = require('gulp-sourcemaps'),
  precss = require('precss'),
  babel = require('gulp-babel'),
  resolveDependencies = require('gulp-resolve-dependencies'),
  livereload = require('gulp-livereload');


var paths = {
  styles: {
    src: 'src/sass/*.scss',
    dest: 'assets/css'
  },
  scripts: {
    src: 'src/js/*.js',
    dest: 'assets/js'
  }
};

function styles() {
  return gulp.src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write('.', { sourceRoot: '/' }))
    .pipe(rename({
      basename: 'main',
      suffix: '.min'
    }))
    .pipe(cleanCSS({
      debug: true
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(postcss([require('precss'), require('autoprefixer')]))
    .pipe(concat('main.min.css'))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(livereload())
}

function scripts() {
  return gulp.src(paths.scripts.src)
    .pipe(babel({
          presets: ['@babel/env'],
          plugins: ['@babel/transform-runtime', '@babel/plugin-syntax-dynamic-import']
    }))
    .on('error', console.error.bind(console))
    .pipe(resolveDependencies({
            pattern: /\* @requires [\s-]*(.*\.js)/g
        }))
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest(paths.scripts.dest));
}

function templates() {
  gulp.src('views/*.hbs')
    .pipe(handlebars())
    //.pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'MyApp.templates',
      noRedeclare: true, // Avoid duplicate declarations
    }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('assets/js/'));
}

function watch() {
  gulp.watch(paths.scripts.src, scripts);
  gulp.watch(paths.styles.src, styles);
}

var build = gulp.parallel(styles, scripts, templates, watch);

gulp.task(build);
gulp.task('default', build);
