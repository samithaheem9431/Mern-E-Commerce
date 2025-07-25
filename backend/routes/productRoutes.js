const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const upload = require('./multer');


// GET all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

///For edit
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// CREATE product
router.post('/', upload.single('image'), async (req, res) => {
  const { name, price, description, category } = req.body;
  const imagePath = req.file ? req.file.filename : '';

  const newProduct = new Product({ name, price, description, category, image: imagePath });

  try {
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// UPDATE product
router.put('/:id', async (req, res) => {
  const { name, price, description, image, category } = req.body;
  try {
    const updated = await Product.findByIdAndUpdate(
      req.params.id, { name, price, description, image, category }, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});



// DELETE product
router.delete('/:id', async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
