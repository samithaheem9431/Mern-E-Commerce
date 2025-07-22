import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import '../SignIn.css'

function SignIn() {
    const [data, setData] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!data.email || !data.password) {
            return alert('Please enter both email and password');
        }
        try {
            const res = await axios.post('http://localhost:5000/api/auth/signin', data);
            if (res.data.token) {
                localStorage.setItem('token', res.data.token);
                navigate('/dashboard');
            } else {
                alert(res.data.error || 'Sign in failed');
            }
        }catch (err) {
    if (err.response) {
        // Server responded with an error status
        alert(err.response.data?.error || 'Invalid credentials');
    } else if (err.request) {
        // Request made, but no response (maybe server is down)
        alert('Server not responding. Please try again later.');
    } else {
        // Something else (coding error?)
        alert('Something went wrong: ' + err.message);
    }
    console.error(err);
}
    };

    return (
        <div className="signin-wrapper"> {/* This ensures full-page centering */}
            <div className="signin-container">
                <h2>Sign In</h2>
                <form className="signin-form" onSubmit={handleSubmit}>
                    <input
                        className="form-control"
                        type="email"
                        placeholder="Email"
                        value={data.email}
                        onChange={e => setData({ ...data, email: e.target.value })}
                    />
                    <input
                        className="form-control"
                        type="password"
                        placeholder="Password"
                        value={data.password}
                        onChange={e => setData({ ...data, password: e.target.value })}
                    />
                    <button type='submit' className="btn">Sign In</button>
                    <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
                </form>
            </div>
        </div>

    );
}

export default SignIn;
