import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../ProductList.css';

function ProductList() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/products');
      setProducts(res.data);
    } catch (err) {
      console.error('Failed to fetch products:', err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await axios.delete(`http://localhost:5000/api/products/${id}`);
        fetchProducts();
      } catch (err) {
        console.error('Delete failed:', err);
      }
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

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
    </div>
  );
}

export default ProductList;
