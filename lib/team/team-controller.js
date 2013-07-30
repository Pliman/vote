var teamController = module.exports = {};

var mongo = require('../mongo');

teamController.getTeam = function (req, res, next) {
	mongo.find('teams', {}, {}, function (err, r) {
		res.send(r);
	});
}

teamController.saveTeam = function (req, res, next) {
	var team = req.param("team");

	delete(team._id);
	mongo.update('teams', {"name": team.name}, team, function (err, r) {
		if (err) {
			logger.error("save team: %s failed error: %s", JSON.stringify(team), err);
			res.send({"result": "FAIL", "data": "", "msg": "保存失败，我好像出故障了，帮我喊下管理员嘛."});
		} else {
			res.send({"result": "SUCCESS", "data": "", "msg": "投票成功."});
		}
	});
};
