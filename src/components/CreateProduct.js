import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/CreateProduct.css';

function CreateProduct() {
  const [image, setImage] = useState(null);
  const [form, setForm] = useState({ name: '', price: '', description: '', image: '', category: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let key in form) {
      formData.append(key, form[key]);
    }
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
      <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])}/>
      <input placeholder="Category" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} />
      <textarea placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })}></textarea>
      <button type="submit">Create</button>
    </form>
  );
}

export default CreateProduct;
