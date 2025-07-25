import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CreateProduct from './components/CreateProduct';
import EditProduct from './components/EditProduct';
import Signup from './components/SignUp';
import Signin from './components/SignIn';
import Dashboard from './components/Dashboard';
import Landing from './components/Landing';

function App() {
  const isLoggedIn = !!localStorage.getItem('token');

  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/signin" />} />
          <Route path="/create" element={isLoggedIn ? <CreateProduct /> : <Navigate to="/signin" />} />
          <Route path="/edit/:id" element={isLoggedIn ? <EditProduct /> : <Navigate to="/signin" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
