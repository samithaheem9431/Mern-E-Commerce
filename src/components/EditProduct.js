import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../css/EditProduct.css';

function EditProduct() {
  const { id } = useParams();
  const [form, setForm] = useState({ name: '', price: '', description: '', image: '', category: '', quantities: { small: 0, medium: 0, large: 0 } });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`).then((res) => setForm(res.data));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/api/products/${id}`, form);
    navigate('/dashboard');
  };

  return (
    <form className="edit-product-form" onSubmit={handleSubmit}>
      <h2>Edit Product</h2>
      <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
      <input type="number" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} required />
      <input value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} />
      <input value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} />
      <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })}></textarea>
      <label>Small Quantity</label>
      <input type="number" value={form.quantities.small} onChange={(e) => setForm({ ...form, quantities: { ...form.quantities, small: parseInt(e.target.value) || 0 } })} />
      <label>Medium Quantity</label>
      <input type="number" value={form.quantities.medium} onChange={(e) => setForm({ ...form, quantities: { ...form.quantities, medium: parseInt(e.target.value) || 0 } })} />
      <label>Large Quantity</label>
      <input type="number" value={form.quantities.large} onChange={(e) => setForm({ ...form, quantities: { ...form.quantities, large: parseInt(e.target.value) || 0 } })} />
      <button type="submit">Update</button>
    </form>
  );
}

export default EditProduct;
