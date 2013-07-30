var UserController = module.exports = {};

var mongo = require('../mongo');

UserController.getUsers = function (req, res, next) {
	mongo.find('users', {}, {}, function (err, r) {
		res.send(r);
	});
}

UserController.saveUser = function (req, res, next) {
	var user = req.param("user");

	mongo.find('users', {"name": user.name}, {}, function (err, r) {
		if (err) {
			logger.error("save user: %s failed error: %s", JSON.stringify(team), err);
			res.send({"result": "FAIL", "data": "", "msg": "保存失败，我好像出故障了，帮我喊下管理员嘛."});
		} else {
			res.send({"result": "SUCCESS", "data": "", "msg": "保存用户成功."});
		}
	});
};
