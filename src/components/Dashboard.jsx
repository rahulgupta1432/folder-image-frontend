// src/components/Dashboard.js

import React, { useState, useEffect, useContext } from 'react';
import { createFolder, getFolders, uploadImage, searchImages } from '../api';
import AuthContext from './context/AuthContext';
import FolderTree from './FolderTree';
import ImageUpload from './ImageUpload';
import Search from './Search';
import './Dashboard.css'; // Import your custom styles

const Dashboard = () => {
  const [folders, setFolders] = useState([]);
  const { user, logout } = useContext(AuthContext);

  useEffect(() => {
    const fetchFolders = async () => {
      try {
        const { data } = await getFolders(user.token);
        setFolders(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchFolders();
  }, [user.token]);

  const handleCreateFolder = async (name, parent) => {
    try {
      const { data } = await createFolder({ name, parent }, user.token);
      setFolders([...folders, data]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUploadImage = async (formData) => {
    try {
      await uploadImage(formData, user.token);
      // Refresh folder data
      const { data } = await getFolders(user.token);
      setFolders(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = async (query) => {
    try {
      const { data } = await searchImages(query, user.token);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <button onClick={logout} className="logout-btn">Logout</button>
      <h2 className="dashboard-title">Dashboard</h2>
      <FolderTree folders={folders} onCreateFolder={handleCreateFolder} />
      <ImageUpload onUpload={handleUploadImage} />
      <Search onSearch={handleSearch} />
    </div>
  );
};

export default Dashboard;
