var app = {
    initialize: function () {
        this.bindEvents();
    },
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function () {
        console.log('启动成功！');
        EVENT_BUS.emit('deviceReady');
    },
    request: function (url, params, callback) {

    }
};
app.initialize();

var BASE_URI = 'http://172.16.89.132/mobile/api';
// 初始化事件总线
var EVENT_BUS = new EventEmitter();
EVENT_BUS.addListener('login', function (params, callback) {
    app.request(BASE_URI + '/login', params, callback)
});