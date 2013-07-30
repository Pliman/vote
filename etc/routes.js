// 列表和保存均支持xhr和普通请求，使用m=data/page 指定xhr和普通请求
// delete只支持xhr方式

// 分页开始使用s(比如s=40)，分页条数使用sz(比如sz=20)

// 只有get后面接?类型参数，post后不接?参数

/**
 * route配置示例：
 * <pre>
 * {
 * "url" : ["/crawler", "/crawler/del"], // 监听地址，可以是数组，将数组中的url都绑定到controller进行处理，主要是为了pushstate直接访问方便
 * "path" : "./src/crawler/crawler.js", // 处理模块
 * "objName" : "listCrawler", // 处理方法
 * "method" : "get", // 监听请求类型
 * "models" : ["menu","crawler"], // 组装模型
 * "menu" : [ "management", "management_project" ] // 对应菜单(可以生成导航)
 * }
 * </pre>
 */

module.exports = [
	// index
	// get get index page
	{
		"url": ["/", "/vote"],
		"path": "./lib/index/index.js",
		"objName": "index",
		"method": "get"
	},
	// user
	// 1. get/get-xhr /users get users
	{
		"url": "/users",
		"path": "./lib/user/user-controller.js",
		"objName": "getUsers",
		"method": "get"
	},
	{
		"url": "/users",
		"path": "./lib/user/user-controller.js",
		"objName": "saveUser",
		"method": "post"
	},
	// team
	// 1. get/get-xhr /team get all team
	// 2. post/post-xhr /team save team by user
	{
		"url": ["/team"],
		"path": "./lib/team/team-controller.js",
		"objName": "getTeam",
		"method": "get"
	},
	{
		"url": "/team",
		"path": "./lib/team/team-controller.js",
		"objName": "saveTeam",
		"method": "post"
	},
	// session
	// 1. get/get-xhr /session get session
	// 2. post/post-xhr /session set session
	{
		"url": "/session",
		"path": "./lib/session/session-controller.js",
		"objName": "getSession",
		"method": "get"
	},
	{
		"url": ["/session"],
		"path": "./lib/session/session-controller.js",
		"objName": "setSession",
		"method": "post"
	}
];
