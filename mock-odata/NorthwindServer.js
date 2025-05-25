// require("reflect-metadata");
const { ODataServer, odata } = require("odata-v4-server");
const ProductController = require("./ProductController");

class NorthwindServer extends ODataServer {}

NorthwindServer.controller(ProductController, true);

module.exports = NorthwindServer;
// 📝 You can also create CategoryController.js, OrderController.js, etc. and add them here.
