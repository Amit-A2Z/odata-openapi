const { Edm } = require("odata-v4-server");

class Product {
  @Edm.Key
  @Edm.Int32
  Id;

  @Edm.String
  Name;

  @Edm.Double
  Price;
}

module.exports = Product;
//📝 You can also create Category.js, Order.js, etc. if needed.
