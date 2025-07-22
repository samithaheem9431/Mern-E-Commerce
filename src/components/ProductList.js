import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import '../ProductList.css';

function ProductList() {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();


  const fetchProducts = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/products');
      setProducts(res.data);
    } catch (err) {
      console.error('Failed to fetch products:', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`);
      fetchProducts();
    } catch (err) {
      console.error('Delete failed:', err);
    }
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
        <Link to="/create">Create New Product</Link>
      </div>

      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <ul className="product-list">
          {products.map((p) => (
            <li key={p._id} className="product-card">
              {p.image && (
                <img
                  src={`http://localhost:5000/${p.image}`}
                  alt={p.name}
                  className="product-image"
                  type
                />
              )}
              <div className="product-details">
                <h3>{p.name}</h3>
                <p><strong>Price:</strong> {p.price}</p>
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
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default ProductList;
