// src/components/Login.js
import React, { useState, useContext } from 'react';
import AuthContext from './context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import your custom styles

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(formData);
      navigate('/dashboard');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Email:</label>
          <input type="email" name="email" placeholder="Email" onChange={handleChange} value={formData.email} required />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input type="password" name="password" placeholder="Password" onChange={handleChange} value={formData.password} required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
