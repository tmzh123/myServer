
var controller = {};
var userDao = require("./../proxy/user");
//登录页
controller.getAll = function(req,res){
			console.log("123");
			userDao.base.getList(function(err,results) {
				res.send(JSON.stringify(results));
			});	
		};

module.exports = controller;



