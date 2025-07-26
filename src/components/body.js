import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Body() {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const res = await axios.get('http://localhost:5000/api/products');
        setProducts(res.data);
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
                        <div className="col-md-3 position-relative" key={product._id}>
                            <div className="card shadow-sm">
                                <img
                                    src={`http://localhost:5000/uploads/${product.image}`}
                                    className="img-fluid w-100"
                                    alt={product.name}
                                    style={{ height: '300px', objectFit: 'cover', }}
                                />

                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <button class="btn btn-sm btn-outline-primary me-1 position-relative">
                                        S
                                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                                            {product.quantities?.small ?? 0}
                                        </span>
                                    </button>
                                    <button class="btn btn-sm btn-outline-primary me-1 position-relative">
                                        M
                                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                                            {product.quantities?.medium ?? 0}
                                        </span>
                                    </button>
                                    <button class="btn btn-sm btn-outline-primary me-1 position-relative">
                                        L
                                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                                            {product.quantities?.large ?? 0}
                                        </span>
                                    </button>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <span className="text-primary fw-bold fs-6">$ {product.price}</span>
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
