import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../css/EditProduct.css';

function EditProduct() {
  const { id } = useParams();
  const [form, setForm] = useState({ name: '', price: '', description: '', image: '', category: '' });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`).then((res) => setForm(res.data));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/api/products/${id}`, form);
    navigate('/');
  };

  return (
    <form className="edit-product-form" onSubmit={handleSubmit}>
      <h2>Edit Product</h2>
      <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
      <input type="number" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} required />
      <input value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} />
      <input value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} />
      <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })}></textarea>
      <button type="submit">Update</button>
    </form>
  );
}

export default EditProduct;
