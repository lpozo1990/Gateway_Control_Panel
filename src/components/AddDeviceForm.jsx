import React, { useState } from 'react';
import axios from 'axios';

const AddDeviceForm = ({ gatewaySerialNumber, onAddDevice }) => {
  const [uid, setUID] = useState('');
  const [vendor, setVendor] = useState('');
  const [dateCreated, setDateCreated] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`http://localhost:3000/gateways/${gatewaySerialNumber}/add-device`, {
        uid,
        vendor,
        dateCreated,
        status,
      });
      console.log('New device added:', response.data);
      const newDevice = {
        uid,
        vendor,
        dateCreated,
        status,
      };
  
      onAddDevice(newDevice);
      setUID('');
      setVendor('');
      setDateCreated('');
      setStatus('');
    } catch (error) {
      console.error('Error adding device:', error);
    }
  };

  

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Device to Gateway {gatewaySerialNumber}</h2>
      <div>
        <label>UID:</label>
        <input type="text" value={uid} onChange={(e) => setUID(e.target.value)} required />
      </div>
      <div>
        <label>Vendor:</label>
        <input type="text" value={vendor} onChange={(e) => setVendor(e.target.value)} required />
      </div>
      <div>
        <label>Date Created:</label>
        <input type="date" value={dateCreated} onChange={(e) => setDateCreated(e.target.value)} required />
      </div>
      <div>
        <label>Status:</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)} required>
          <option value="">Select Status</option>
          <option value="online">Online</option>
          <option value="offline">Offline</option>
        </select>
      </div>
      <button type="submit">Add Device</button>
    </form>
  );
};

export default AddDeviceForm;
