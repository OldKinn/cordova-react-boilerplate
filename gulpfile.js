var gulp = require('gulp');
var async = require('async');

gulp.task('assets', function (callback) {
    var assets = [
        {
            module: 'bootstrap',
            desc: '视图层使用的UI框架',
            src: [
                './bower_components/bootstrap/dist/css/bootstrap.min.css',
                './bower_components/bootstrap/dist/fonts/**'
            ],
            base: './bower_components/bootstrap/dist',
            dest: './bundler/public/assets/bootstrap'
        },
        {
            module: 'requireJs',
            desc: 'RequireJS',
            src: './bower_components/requirejs/require.js',
            dest: './bundler/public/assets/libs'
        }
    ];
    async.each(assets, function (item, callback) {
        console.time('extract ' + item.module);
        var options = item.base ? {base: item.base} : {};
        var stream = gulp.src(item.src, options);
        stream.on('end', function () {
            console.timeEnd('extract ' + item.module);
            console.log('抽取 %s 已完成!', item.module);
            callback();
        });
        stream.pipe(gulp.dest(item.dest));
    }, function (error) {
        callback(error);
    });
});