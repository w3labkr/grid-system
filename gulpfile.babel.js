/**
 * Initialize Gulp
 * 
 * @Install
 * $ sudo npm install -g gulp-cli
 * $ sudo npm install -g gulp
 * 
 * @link https://gulpjs.com/
 * @link https://css-tricks.com/gulp-for-beginners/
 * @link https://www.sitepoint.com/fast-gulp-wordpress-theme-development-workflow/
 */
const pkg = require("./package.json");
const { gulp, task, src, dest, series, parallel, watch } = require('gulp');

/**
 * Load all plugins in devDependencies into the $ variable
 */
const $ = require("gulp-load-plugins") ({
  pattern: ["*"],
  scope: ["devDependencies"],
  rename: {
    'gulp-typescript': 'ts',
    'gulp-jshint': 'jslint'
  }
});



/**
 * devDependencies
 * 
 * @Install
 * $ npm init
 * $ sudo npm install --save-dev gulp
 * $ sudo npm install --save-dev gulp-load-plugins gulp-watch gulp-newer gulp-sourcemaps 
 * $ sudo npm install --save-dev gulp-concat gulp-rename gulp-if gulp-header gulp-size 
 * $ sudo npm install --save-dev del moment git-rev-sync
 * $ sudo npm install --save-dev gulp-babel @babel/register @babel/core @babel/preset-env
 * 
 * @Dependency
 * gulp-load-plugins: Loads gulp plugins from package dependencies and attaches them to an object of your choice.
 * gulp-watch: File watcher that uses super-fast chokidar and emits vinyl objects.
 * gulp-newer: A Gulp plugin for passing through only those source files that are newer than corresponding destination files.
 * gulp-sourcemaps: Inline source maps are embedded in the source file.
 * 
 * gulp-concat: This will concat files by your operating systems newLine. 
 * gulp-rename: gulp-rename is a gulp plugin to rename files easily.
 * gulp-if: Conditionally run a task.
 * gulp-header: gulp-header is a Gulp extension to add a header to file(s) in the pipeline.
 * gulp-size: Logs out the total size of files in the stream and optionally the individual file-sizes.
 * 
 * del: Cleaning up generated files automatically
 * moment: A lightweight JavaScript date library for parsing, validating, manipulating, and formatting dates.
 * git-rev-sync: Synchronously get the current git commit hash, tag, count, branch or commit message.
 * 
 * gulp-babel: Use next generation JavaScript, today, with Babel.
 * @babel/register: babel require hook.
 * @babel/core: Babel compiler core.
 * @babel/preset-env: A Babel preset for each environment.
 * 
 */
const banner = [
  "/**",
  " * @project        <%= pkg.name %>",
  " * @author         <%= pkg.author %>",
  " * @build          " + $.moment().format("llll") + " ET",
  " * @release        " + $.gitRevSync.long() + " [" + $.gitRevSync.branch() + "]",
  " * @copyright      Copyright (c) " + $.moment().format("YYYY") + ", <%= pkg.copyright %>",
  " */",
  ""
].join("\n");

// ENVELOPMENT
const DEVELOPMENT = (pkg.envelopment == 'development');
const PRODUCTION = (pkg.envelopment == 'production');

// CONSTANTS
const BASE = {
  SRC: 'src',
  DEST: 'dist'
};

const DIR = {
  SCSS: {
    SRC: BASE.SRC + '/build/**/*.scss',
    DEST: BASE.DEST
  },
  TS: {
    SRC: BASE.SRC + '/build/**/*.ts',
    DEST: BASE.DEST
  }
};





/**
 * SCSS processing
 * 
 * @Install
 * $ sudo npm install --save-dev gulp-postcss gulp-csscomb gulp-autoprefixer gulp-cssnano css-mqpacker
 * $ sudo npm install -g sass
 * $ sudo npm install --save-dev gulp-sass 
 * 
 * @Dependency
 * gulp-sass: A pure JavaScript implementation of Sass.
 * gulp-postcss: Tool for transforming styles with JS plugins.
 * gulp-csscomb: CSScomb is a coding style formatter for CSS.
 * gulp-autoprefixer: Parse CSS and add vendor prefixes to CSS rules using values from the Can I Use website.
 * gulp-cssnano: A modular minifier, built on top of the PostCSS ecosystem.
 * css-mqpacker: Literally just css-mqpacker reuploaded to npm. --- Pack same CSS media query rules into one using PostCSS.
 */
task('scss', () => {
  return src([DIR.SCSS.SRC, '!./node_modules/**'])
  .pipe($.newer(DIR.SCSS.DEST))
  .pipe($.if(DEVELOPMENT, $.sourcemaps.init())) // Initialize sourcemaps before compilation starts
  .pipe($.sass({
    outputStyle: 'nested', // nested, expanded, compact, compressed
    indentType: 'space',
    indentWidth: 2,
    precision: 7
  }).on('error', $.sass.logError))
  .pipe($.autoprefixer())
  .pipe($.csscomb()) // config: zen, yandex, csscomb
  .pipe($.postcss([
    // $.autoprefixer, // autoprefixer is not working in the postcss
    $.cssMqpacker // cssMqpacker is only working in the postcss
  ])) // Use postcss with autoprefixer and compress the compiled file using cssnano
  // .pipe($.if(PRODUCTION, $.concat('combined.css')))
  .pipe($.if(PRODUCTION, $.cssnano()))
  .pipe($.if(PRODUCTION, $.header(banner, {pkg: pkg})))
  .pipe($.if(PRODUCTION, $.rename({ suffix: ".min" })))
  .pipe($.if(DEVELOPMENT, $.sourcemaps.write())) // Now add/write the sourcemaps
  .pipe($.size({gzip: true, showFiles: true}))
  .pipe(dest(DIR.SCSS.DEST));
});

task('scss:watch', () => {
  watch(DIR.SCSS.SRC, parallel('scss'));
});





/**
 * TypeScript processing
 * 
 * @Install
 * $ sudo npm install --save-dev jshint gulp-jshint gulp-jsdoc3 gulp-header gulp-uglify
 * $ sudo npm install --save-dev typescript gulp-typescript
 * 
 * @Dependency
 * typescript: TypeScript is a language for application scale JavaScript development.
 * gulp-typescript: A typescript compiler for gulp with incremental compilation support.
 */
task('ts', () => {
  return src([DIR.TS.SRC, '!./node_modules/**'])
  .pipe($.newer(DIR.TS.DEST))
  .pipe($.ts({
    noImplicitAny: true,
    target: "ES3"
  }))
  .pipe($.jslint()) // notice the stream function has not been called!
  .pipe($.jslint.reporter())
  .pipe($.babel({
    presets: ['@babel/env']
  }))
  .pipe($.if(DEVELOPMENT, $.sourcemaps.init())) // Initialize sourcemaps before compilation starts
  // .pipe($.if(PRODUCTION, $.concat('combined.js')))
  .pipe($.if(PRODUCTION, $.uglify({
    ie8: true,
    output: {
      comments: "/^!/" // pass true or "all" to preserve all comments, "some" to preserve some comments, a regular expression string (e.g. /^!/) or a function.
    }
  })))
  .pipe($.if(PRODUCTION, $.header(banner, {pkg: pkg})))
  .pipe($.if(PRODUCTION, $.rename({ suffix: ".min" })))
  .pipe($.if(DEVELOPMENT, $.sourcemaps.write())) // Now add/write the sourcemaps
  .pipe($.size({gzip: true, showFiles: true}))
  .pipe(dest(DIR.TS.DEST));
});

task('ts:watch', () => {
  watch(DIR.TS.SRC, parallel('ts'));
});





/**
 * Copy
 */
task('copy:license', () => {
  return src('./LICENSE')
  .pipe($.newer(BASE.DEST))
  .pipe(dest(BASE.DEST));
});

task('copy:changelog', () => {
  return src('./CHANGELOG')
  .pipe($.newer(BASE.DEST))
  .pipe(dest(BASE.DEST));
});

task('copy:readme', () => {
  return src('./README.md')
  .pipe($.newer(BASE.DEST))
  .pipe(dest(BASE.DEST));
});

task('copy', parallel('copy:license', 'copy:changelog', 'copy:readme'));





/**
 * Watcher processing
 */
task('watch', parallel('scss:watch', 'ts:watch'));





/**
 * Cleaning up generated files automatically
 */
task('clean', (cb) => {
  return $.del([BASE.DEST], cb);
});





/**
 * Combining Gulp tasks
 */
task('work', parallel('scss', 'ts', 'copy'));
task('build', series('clean', 'work'));
task('default', parallel('work'));