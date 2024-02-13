import React, { useState } from 'react';

const FolderExplorer = () => {
  const [optionsVisible, setOptionsVisible] = useState(false);
  const [folderName, setFolderName] = useState('Default Folder');

  const handleFolderClick = () => {
    setOptionsVisible(true);
  };

  const handleAddFolder = () => {
    const newFolderName = prompt('Enter folder name:');
    if (newFolderName) {
      setFolderName(newFolderName);
    }
    setOptionsVisible(false);
  };

  const handleAddFile = () => {
    const fileName = prompt('Enter file name:');
    if (fileName) {
      // Handle adding file logic here
      console.log(`Adding file: ${fileName}`);
    }
    setOptionsVisible(false);
  };

  return (
    <div style={{ padding: '16px', border: '1px solid #ccc', marginBottom: '16px' }}>
      <div style={{ cursor: 'pointer' }} onClick={handleFolderClick}>
        {folderName}
      </div>
      {optionsVisible && (
        <div style={{ marginTop: '8px' }}>
          <div style={{ cursor: 'pointer', marginBottom: '4px' }} onClick={handleAddFolder}>
            Add Folder
          </div>
          <div style={{ cursor: 'pointer' }} onClick={handleAddFile}>
            Add File
          </div>
        </div>
      )}
    </div>
  );
};

export default FolderExplorer;
