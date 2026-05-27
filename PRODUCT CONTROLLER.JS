const Product = require("../models/Product");

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.json(products);
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const { name, price, description } = req.body;

    if (!name || !price || !description) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const product = await Product.create({
      name,
      price,
      description,
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.json(product);
  } catch (error) {
    res.status(500).json({
      message: "Update failed",
    });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);

    res.json({
      message: "Product deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: "Delete failed",
    });
  }
};
