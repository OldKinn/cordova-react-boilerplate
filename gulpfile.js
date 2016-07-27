const exec = require('child_process').exec;
const gulp = require('gulp');
const async = require('async');
const chalk = require('chalk');
const green = chalk.bold.green;

gulp.task('assets', function (callback) {
    const assets = [
        {
            component: 'bootstrap',
            src: [
                './bower_components/bootstrap/dist/css/bootstrap.min.css',
                './bower_components/bootstrap/dist/css/bootstrap.min.css.map',
                './bower_components/bootstrap/dist/fonts/**'
            ],
            base: './bower_components/bootstrap/dist',
            destination: './builder/public/assets/bootstrap'
        },
        {
            component: 'animate.css',
            src: './bower_components/animate.css/animate.min.css',
            destination: './builder/public/assets/css'
        },
        {
            component: 'require.js',
            src: './bower_components/requirejs/require.js',
            destination: './builder/public/assets/libs'
        },
        {
            component: 'eventEmitter',
            src: './bower_components/eventEmitter/EventEmitter.min.js',
            destination: './builder/public/assets/libs'
        }
    ];
    async.each(assets, function (item, callback) {
        console.time('extract ' + item.component);
        var options = item.base ? {base: item.base} : {};
        var stream = gulp.src(item.src, options);
        stream.on('end', function () {
            console.timeEnd('extract ' + item.component);
            console.log('extract %s success!', green(item.component));
            callback();
        });
        stream.pipe(gulp.dest(item.destination));
    }, function (error) {
        callback(error);
    });
});

gulp.task('copy:assets', function () {
    return gulp.src('./builder/public/**').pipe(gulp.dest('./www/public'));
});

gulp.task('copy:bundle', function () {
    return gulp.src('./builder/dist/**').pipe(gulp.dest('./www/public'));
});

gulp.task('copy', ['copy:assets', 'copy:bundle'], function () {
    console.log(green('copy static resources success!'));
});

gulp.task('app:platform', function (callback) {
    exec('cordova platform add android', function (error, stdout, stderr) {
        if (error) {
            console.error(error);
        } else {
            console.log(stdout);
            console.log(stderr);
        }
        callback();
    });
});

gulp.task('app:run', function (callback) {
    exec('cordova run android', function (error, stdout, stderr) {
        if (error) {
            console.log(error);
        } else {
            console.log(stdout);
            console.log(stderr);
        }
        callback();
    });
});