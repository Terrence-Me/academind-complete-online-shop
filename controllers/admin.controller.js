const Product = require('../models/product.model');

function getProdcuts(req, res) {
  res.render('admin/products/all-products');
}

function getNewProduct(req, res) {
  res.render('admin/products/new-product');
}

async function createNewProduct(req, res, next) {
  const product = new Product({
    ...req.body,
    image: req.file.filename,
  });

  try {
    product.save();
  } catch (error) {
    next(error);
    return;
  }

  res.redirect('/admin/products');
}

module.exports = {
  getProdcuts: getProdcuts,
  getNewProduct: getNewProduct,
  createNewProduct: createNewProduct,
};
