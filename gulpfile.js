const { src, dest, watch, parallel, series } = require('gulp');

const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const clean = require('gulp-clean');
const avif = require('gulp-avif');
const webp = require('gulp-webp');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const fonter = require('gulp-fonter');
const ttf2woff2 = require('gulp-ttf2woff2');

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

function watching() {
    watch(['app/**/*.scss'], styles);
    watch(['app/images/**/*.*'], images);
    watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts);
    watch('app/html/**/*.html', fileincludes);
    watch(['app/**/*.html']).on('change', browserSync.reload);

    // watch(['app/images/**/*.svg'], sprites);
}

function sprites() {
    return src('app/images/**/*.svg')
        .pipe(svgSprite({
            mode: {
                stack: {
                    sprite: 'sprite.svg',
                    // example: true
                }
            }
        }))
        .pipe(dest('app/images'))
}

function fonts() {
    return src('app/fonts/src/*.*') // sources should be in src        
        .pipe(fonter({
            formats: ['woff', 'ttf']
        }))

        .pipe(src('app/fonts/*.ttf'))
        .pipe(ttf2woff2())
        .pipe(dest('app/fonts'))
}

function images() {
    return src(['app/images/**/*.*', '!app/images/**/*.svg'])
        // .pipe(newer('dist/images'))
        // .pipe(avif({ quality: 50 }))

        // .pipe(src('app/images/**/*.*'))
        // .pipe(newer('dist/images'))
        // .pipe(webp())

        .pipe(src('app/images/**/*.*'))
        .pipe(newer('dist/images'))
        .pipe(imagemin())

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
        'app/*.html',
        'app/css/style.min.css',
        'app/js/main.min.js',
        'app/fonts/*.*'
    ], {
        base: 'app'
    })
        .pipe(dest('dist'))
}

function cleanDist() {
    return src('dist')
        .pipe(clean())
}



exports.styles = styles;
exports.scripts = scripts;
exports.browsersync = browsersync;
exports.watching = watching;
exports.images = images;
exports.fonts = fonts;
exports.cleanDist = cleanDist;
exports.building = building;

exports.build = series(cleanDist, images, building);
// exports.build = series(cleanDist, building);

exports.fileincludes = fileincludes;
exports.sprites = sprites;

// exports.default = parallel(styles, scripts, browsersync, watching);
exports.default = parallel(fileincludes, styles, scripts, browsersync, watching);