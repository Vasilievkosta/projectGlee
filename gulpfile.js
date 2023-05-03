const {
    src,
    dest,
    watch,
    parallel,
    series
} = require('gulp');
const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify-es').default;

// const imagemin = require('gulp-imagemin');

const browserSync = require('browser-sync').create();
const clean = require('gulp-clean');
const svgSprite = require('gulp-svg-sprite');
const fileInclude = require('gulp-file-include');

function browsersync() {
    browserSync.init({
        server: {
            baseDir: 'app/'
        },
        notify: false
    })
}

function styles() {
    return src('app/scss/style.scss')
		.pipe(autoprefixer({
            overrideBrowserslist: ['last 10 versions'],
            grid: true
        }))
		.pipe(concat('style.min.css'))
        .pipe(scss({
            outputStyle: 'expanded' // outputStyle: 'compressed'
        }))
        .pipe(dest('app/css'))
        .pipe(browserSync.stream())
}

function svgSprites() {
    return src('app/images/**/*.svg')
        .pipe(svgSprite({
            mode: {
                stack: {
                    sprite: 'sprite.svg'
                }
            }
        }))
        .pipe(dest('app/images'))
}

function scripts() {
    return src([
            'node_modules/jquery/dist/jquery.js',
            'node_modules/slick-carousel/slick/slick.js',
            'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js',
            'node_modules/mixitup/dist/mixitup.js',
            'node_modules/ion-rangeslider/js/ion.rangeSlider.js',
            'node_modules/rateyo/src/jquery.rateyo.js',
            'node_modules/jquery-form-styler/dist/jquery.formstyler.js',
            'app/js/main.js'
        ])
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(dest('app/js'))
        .pipe(browserSync.stream())
}

// function images() {
    // return src('app/images/**/*.*')
        // .pipe(imagemin({
            // interlaced: true,
            // progressive: true,
            // optimizationLevel: 5,
            // svgoPlugins: [{
                // removeViewBox: true
            // }]
        // }))
        // .pipe(dest('dist/images'))
// }

function images() {
    return src('app/images/**/*.*')
        // .pipe(imagemin())
        .pipe(dest('dist/images'))
}

function fileincludes() {
    return src('app/html/pages/*.html')
        .pipe(fileInclude())
        .pipe(dest('app'))
        .pipe(browserSync.stream())
}

function building() {
    return src([
            'app/**/*.html',
            'app/css/style.min.css',
            'app/js/main.min.js'
        ], {
            base: 'app'
        })
        .pipe(dest('dist'))
}

function cleanDist() {
    return src('dist')
		pipe(clean())
}

function watching() {
    watch(['app/**/*.scss'], styles);
    watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts);
    watch('app/html/**/*.html', fileincludes);
    watch(['app/**/*.html']).on('change', browserSync.reload);

    watch(['app/images/**/*.svg'], svgSprites);

}

exports.styles = styles;
exports.scripts = scripts;
exports.browsersync = browsersync;
exports.watching = watching;
exports.images = images;
exports.cleanDist = cleanDist;

exports.build = series(cleanDist, images, building);
// exports.build = series(cleanDist, build);

exports.fileincludes = fileincludes;
exports.svgSprites = svgSprites;

// exports.default = parallel(styles, scripts, svgSprites, browsersync, watching);
// exports.default = parallel(styles, scripts, browsersync, watching);
exports.default = parallel(fileincludes, styles, scripts, browsersync, watching);