import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Body() {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/products');
            setProducts(res.data);
        } catch (err) {
            console.error('Failed to fetch products:', err);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                {products.length === 0 ? (
                    <p>No products available.</p>
                ) : (
                    products.map((product) => (
                        <div className="col-md-4 mb-4" key={product._id}>
                            <div className="card shadow-sm">
                                <img
                                    src={`http://localhost:5000/uploads/${product.image}`}
                                    className="card-img-top"
                                    alt={product.name}
                                    style={{ height: '300px', objectFit: 'cover' }}
                                />

                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <span className="text-primary fw-bold fs-5">${product.price}</span>
                                        <button className="btn btn-success">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Body;
