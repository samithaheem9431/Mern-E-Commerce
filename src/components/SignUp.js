import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import '../SignUp.css'

function SignUp() {
    const [data, setData] = useState({ name: '', email: '', password: '' });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post('http://localhost:5000/api/auth/signup', data);
        if (res.data.status === 'ok') {
            alert('Sign up successful');
            navigate('/');
        } else {
            alert(res.data.error || 'Signup failed');
        }

    };

    return (
        <div className="signup-wrapper">
            <div className="signup-container">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <input className="form-control" placeholder="Name" onChange={e => setData({ ...data, name: e.target.value })} />
                    <input className="form-control" type='email' placeholder="Email" onChange={e => setData({ ...data, email: e.target.value })} />
                    <input className="form-control" type="password" placeholder="Password" onChange={e => setData({ ...data, password: e.target.value })} />
                    <button className="btn">Sign Up</button>
                    <p>Already have an account? <Link to="/">Sign In</Link></p>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
