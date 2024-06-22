// src/components/FolderTree.js
import React, { useState } from 'react';

const FolderTree = ({ folders, onCreateFolder }) => {
  const [folderName, setFolderName] = useState('');
  const [parentFolder, setParentFolder] = useState('');

  const handleCreateFolder = () => {
    onCreateFolder(folderName, parentFolder);
    setFolderName('');
    setParentFolder('');
  };

  return (
    <div>
      <h3>Folders</h3>
      <input
        type="text"
        placeholder="Folder name"
        value={folderName}
        onChange={(e) => setFolderName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Parent folder"
        value={parentFolder}
        onChange={(e) => setParentFolder(e.target.value)}
      />
      <button onClick={handleCreateFolder}>Create Folder</button>
      <ul>
        {folders.map((folder) => (
          <li key={folder._id}>{folder.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FolderTree;
