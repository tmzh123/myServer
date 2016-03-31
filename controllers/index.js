
var controller = {};

controller.index = function(req,res) {
	var tmp = [1,2,3,4];
	res.render("index",{data:tmp});
};


controller.test = function(req,res) {
	res.send("test 123456789");
};

controller.submitForm = function(req,res) {
	
	var username = req.body.username;
	console.log(username);
	res.render("joe");
	
};



module.exports = controller;


