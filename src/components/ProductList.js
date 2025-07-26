import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import '../css/ProductList.css';

function ProductList() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    const res = await axios.get('http://localhost:5000/api/products');
    setProducts(res.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/products/${id}`);
    fetchProducts();
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/signin');
    } else {
      fetchProducts();
    }
  }, [navigate]);


  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/signin');
  };

  return (
    <div className="product-list-container">
      <div className="create-link">
        <Link style={{ textDecoration: 'none', color: 'black' }} to="/create">Create New Product</Link>
      </div>

      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <ul className="product-list">
          {products.map((p) => (
            <li key={p._id} className="product-card">
              {p.image && (
                <img
                  src={`http://localhost:5000/uploads/${p.image}`}
                  alt={p.name}
                  className="product-image"
                />

              )}
              <div className="product-details">
                <h3>{p.name}</h3>
                <p><strong>Price:</strong> {p.price}</p>
                <p><strong>Quantities:</strong></p>
                <li>Small: {p.quantities?.small ?? 0}</li>
                <li>Medium: {p.quantities?.medium ?? 0}</li>
                <li>Large: {p.quantities?.large ?? 0}</li>
                <p><strong>Category:</strong> {p.category}</p>
                <p><strong>Description:</strong> {p.description}</p>
                <div className="action-buttons">
                  <Link to={`/edit/${p._id}`}>Edit</Link>
                  <button onClick={() => handleDelete(p._id)}>Delete</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="action-footer">
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
        <button className="landing-btn" onClick={() => navigate('/')}>Landing Page</button>
      </div>
    </div>
  );
}

export default ProductList;
