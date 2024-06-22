// src/components/Signup.js
import React, { useState, useContext } from 'react';
import AuthContext from './context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const { signup } = useContext(AuthContext);
  const history = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(formData);
      history.push('/login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" onChange={handleChange} value={formData.username} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} value={formData.email} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} value={formData.password} required />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
