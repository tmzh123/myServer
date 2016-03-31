
var express = require('express');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();


//视图引擎
app.set('views', 'views');
app.set('view engine', 'html');
app.engine('html', require('ejs-mate'));
app.enable('trust proxy');

//指定静态资源
app.use(express.static(path.join(__dirname, 'public')));


//http请求体中间件
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: '50mb',extended: false }));


app.get("/",function(req,res){
	res.send("ok");
});

var userControll = require('./controllers/user');
app.get("/user/getAll",userControll.getAll);

var indexController = require('./controllers/index');
app.get("/joe",indexController.test);
app.post("/submitForm",indexController.submitForm);
app.get("/test",indexController.test);

var loginController = require('./controllers/login');
app.get("/login/index",loginController.index);
app.get("/login/signin",loginController.signin);
app.post("/login/signin",loginController.signin);

var port = 8000;
var server = http.createServer(app);
server.listen(port);
console.log("server listen to port:%s",port);
