// src/components/ImageUpload.js
import React, { useState } from 'react';

const ImageUpload = ({ onUpload }) => {
  const [imageName, setImageName] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [folderName, setFolderName] = useState('');

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('name', imageName);
    formData.append('image', imageFile);
    formData.append('folder', folderName);
    onUpload(formData);
    setImageName('');
    setImageFile(null);
  };

  return (
    <div>
      <h3>Upload Image</h3>
      <input
        type="text"
        placeholder="Image name"
        value={imageName}
        onChange={(e) => setImageName(e.target.value)}
      />
      <input
        type="input"
        onChange={(e) => setFolderName(e.target.value)}
      placeholder='Enter Folder Name'/>
       <input
        type="file"
        onChange={(e) => setImageFile(e.target.files[0])}
      />
      <button onClick={handleUpload}>Upload Image</button>
    </div>
  );
};

export default ImageUpload;
