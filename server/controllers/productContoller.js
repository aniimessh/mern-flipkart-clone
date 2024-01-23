import { Product } from "../model/productSchema.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const id  = req.params.id;
    const productDetails = await Product.findOne({ id: id });
    res.status(200).json({
      message: "Product fetched",
      productDetails,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
