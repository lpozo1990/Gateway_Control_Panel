import React, { useState } from 'react';

const GatewayForm = ({ onAddGateway }) => {
  const [serialNumber, setSerialNumber] = useState('');
  const [name, setName] = useState('');
  const [ipv4, setIpv4] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newGateway = {
      serialNumber,
      name,
      ipv4,
    };

    onAddGateway(newGateway);

    setSerialNumber('');
    setName('');
    setIpv4('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Serial Number:</label>
        <input type="text" value={serialNumber} onChange={(e) => setSerialNumber(e.target.value)} required />
      </div>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>IPv4 Address:</label>
        <input type="text" value={ipv4} onChange={(e) => setIpv4(e.target.value)} required />
      </div>
      <button type="submit">Add Gateway</button>
    </form>
  );
};

export default GatewayForm;
