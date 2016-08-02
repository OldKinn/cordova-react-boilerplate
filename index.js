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
        confirm: function (message, buttons, callback) {
            navigator.notification.confirm(message, function (buttonIndex) {
                callback(buttonIndex);
            }, '操作确认', buttons);
        },
        request: function (url, params, callback) {

        }
    };
    app.initialize();
    var bus = window.bus = new EventEmitter();
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
});
