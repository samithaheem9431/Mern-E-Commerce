const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();


app.use(cors());
app.use(express.json());
const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/auth');

// MongoDB Connection-----------------------------------------------
const connectionString = "mongodb://127.0.0.1:27017/Mern-E-Commerce";
mongoose.connect(connectionString)
  .then(() => console.log(`Connected to ${connectionString}`))
  .catch(() => console.log("MongoDB connection error"));

// Root Route---------------------------------------------------------
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);
app.listen(5000, () => console.log('Server running on http://localhost:5000'));