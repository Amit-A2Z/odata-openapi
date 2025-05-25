const { ODataController, Edm, odata } = require("odata-v4-server");
const Product = require("./ProductModel");

class ProductController extends ODataController {
  @odata.GET
  async getProducts() {
    return [
      { Id: 1, Name: "Chai", Price: 18 },
      { Id: 2, Name: "Chang", Price: 19 },
    ];
  }

  @odata.GET
  async getOne(@odata.key key) {
    return { Id: key, Name: "Mock Product", Price: 42 };
  }
}

module.exports = ProductController;
// 📝 You can also create CategoryController.js, OrderController.js, etc. if needed.
