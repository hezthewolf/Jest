let { products } = require("../data");

const getProducts = (req, res) => {
  res.status(200).json({ success: true, data: products });
};

module.exports = getProducts;