require.config({
    baseUrl: './',
    paths: {
        'EventEmitter': 'public/assets/libs/EventEmitter.min'
    }
});

require(['EventEmitter'], function (EventEmitter) {
    var app = {
        initialize: function () {
            this.bindEvents();
        },
        bindEvents: function () {
            document.addEventListener('deviceready', app.onDeviceReady, false);
        },
        onDeviceReady: function () {
            document.addEventListener('backbutton', app.handleBackButton, false);
            require(['public/bundle']);
        },
        handleBackButton: function () {
            app.confirm('确定退出程序？', ['退出', '取消'], function (btnIndex) {
                if (btnIndex == 1) navigator.app.exitApp();
            });
        },
        // 操作确认
        confirm: function (message, buttons, callback) {
            navigator.notification.confirm(message, function (buttonIndex) {
                callback(buttonIndex);
            }, '操作确认', buttons);
        },
        // 发起HTTP请求服务器的JSON数据，10S超时限制
        request: function (url, params, callback) {
            var timeout = false;
            var timer = setTimeout(function () {
                if (!timeout) {
                    timeout = true;
                    callback(new Error('服务器请求超时'));
                }
            }, 10000);
            cordovaHTTP.get(url, params, {}, function (response) {
                if (timeout) return false;
                clearTimeout(timer);
                try {
                    var data = JSON.parse(response.data);
                    callback(null, data);
                } catch (e) {
                    callback(e);
                }
            }, function (response) {
                if (timeout) return false;
                clearTimeout(timer);
                callback(new Error(response.error));
            });
        }
    };
    app.initialize();
    var bus = window.bus = new EventEmitter();
    // 监听登录事件
    bus.addListener('login', function (data, callback) {
        setTimeout(function () {
            callback(null, {
                success: true,
                message: '登录成功',
                content: {
                    userName: '张三'
                }
            });
        }, 1000);
    });
    // 监听拍照事件
    bus.addListener('take picture', function (options, callback) {
        camera.getPicture(function (data) {
            callback(null, data);
        }, function (message) {
            callback(new Error(message));
        }, options);
    });
});
