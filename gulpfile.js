var gulp = require('gulp');
var async = require('async');
var chalk = require('chalk');
var green = chalk.bold.green;

gulp.task('assets', function (callback) {
    var assets = [
        {
            component: 'bootstrap',
            src: [
                './bower_components/bootstrap/dist/css/bootstrap.min.css',
                './bower_components/bootstrap/dist/fonts/**'
            ],
            base: './bower_components/bootstrap/dist',
            destination: './bundler/public/assets/bootstrap'
        },
        {
            component: 'require.js',
            src: './bower_components/requirejs/require.js',
            destination: './bundler/public/assets/libs'
        },
        {
            component: 'animate.css',
            src: './bower_components/animate.css/animate.min.css',
            destination: './bundler/public/assets/css'
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

gulp.task('build', function () {

});