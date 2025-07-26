import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/CreateProduct.css';

function CreateProduct() {
  const [image, setImage] = useState(null);
  const [form, setForm] = useState({
    name: '', price: '', description: '', image: '', category: '', quantities: {
      small: 0,
      medium: 0,
      large: 0
    }
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append('name', form.name);
    formData.append('price', form.price);
    formData.append('description', form.description);
    formData.append('category', form.category);

    // Append individual quantity fields
    formData.append('quantities[small]', form.quantities.small);
    formData.append('quantities[medium]', form.quantities.medium);
    formData.append('quantities[large]', form.quantities.large);

    if (image) {
      formData.append('image', image);
    }

    await axios.post('http://localhost:5000/api/products', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    navigate('/dashboard');
  };


  return (
    <form className="create-product-form" onSubmit={handleSubmit}>
      <h2>Create Product</h2>
      <input placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
      <input placeholder="Price" type="number" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} required />
      <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
      <input placeholder="Category" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} />
      <textarea placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })}></textarea>
      <label>Small Quantity</label>
      <input type="number" value={form.quantities.small} onChange={(e) => setForm({ ...form, quantities: { ...form.quantities, small: parseInt(e.target.value) || 0 } })} />
      <label>Medium Quantity</label>
      <input type="number" value={form.quantities.medium} onChange={(e) => setForm({ ...form, quantities: { ...form.quantities, medium: parseInt(e.target.value) || 0 } })} />
      <label>Large Quantity</label>
      <input type="number" value={form.quantities.large} onChange={(e) => setForm({ ...form, quantities: { ...form.quantities, large: parseInt(e.target.value) || 0 } })} />
      <button type="submit">Create</button>
    </form>
  );
}

export default CreateProduct;
