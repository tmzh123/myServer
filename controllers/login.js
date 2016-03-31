
var controller = {};

//登录页
controller.index = function(req,res){
			res.render("login");
		};

//登录操作
controller.signin = function(req,res){
			var fs = require("fs");
			var userName;
			var password;
			var returnType;
			
			
			console.log(req.method + ":" + req.headers["user-agent"]);			
			console.log("--------------");
			
			if(req.method == "POST")
			{				
				userName = req.body["userName"];
				password = req.body["password"];
				returnType = req.body["returnType"];
			}
			else
			{	
				userName = req.query["userName"];
				password = req.query["password"];
				returnType = req.query["returnType"];				
			}
			
			var model = {};
			model.username = userName;
			model.password = password;
			if(returnType.toUpperCase() == "JSON")
			{
				res.send(JSON.stringify(model));								
			}
			else
			{
				var xml2js = require("xml2js");
				var builder = new xml2js.Builder();		
				var tmp = builder.buildObject(model);			
				res.send(tmp);				
			}	
		
		};

module.exports = controller;



