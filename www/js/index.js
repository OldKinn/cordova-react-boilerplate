var app={initialize:function(){this.bindEvents()},bindEvents:function(){document.addEventListener("deviceready",this.onDeviceReady,!1)},onDeviceReady:function(){console.log("启动成功！"),EVENT_BUS.emit("deviceReady")},request:function(e,i,n){}};app.initialize();var BASE_URI="http://172.16.89.132/mobile/api",EVENT_BUS=new EventEmitter;EVENT_BUS.addListener("login",function(e,i){app.request(BASE_URI+"/login",e,i)});