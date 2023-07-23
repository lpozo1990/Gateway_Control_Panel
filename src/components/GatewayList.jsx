import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GatewayDetail from './GatewayDetail';
import AddDeviceForm from './AddDeviceForm';

const GatewayList = ({ gateways }) => {
  const [selectedGateway, setSelectedGateway] = useState(null);
  const [showAddDeviceForm, setShowAddDeviceForm] = useState(false);
  const [selectedGatewaySerialNumber, setSelectedGatewaySerialNumber] = useState(null);


  useEffect(() => {
    if (selectedGateway) {
      fetchGateway(selectedGateway.serialNumber); 
    }
  }, []);

  const fetchGateway = async (serialNumber) => {
    try {
      const response = await axios.get(`http://localhost:3000/gateways/${serialNumber}`);
      setSelectedGateway(response.data);
    } catch (error) {
      console.error('Error fetching gateway details:', error);
      setSelectedGateway(null);
    }
  };

  const handleGatewayClick = (gateway) => {
    if (selectedGateway && selectedGateway.serialNumber === gateway.serialNumber) {
      setSelectedGateway(null);
      setShowAddDeviceForm(false);
      setSelectedGatewaySerialNumber(null); 
    } else {
      setSelectedGateway(gateway);
      setShowAddDeviceForm(false);
      setSelectedGatewaySerialNumber(null); 
    }
  };
  const handleShowAddDeviceForm = () => {
    setShowAddDeviceForm(true);
  };

  const handleHideAddDeviceForm = () => {
    setShowAddDeviceForm(false);
  };

  const handleAddDevice = async (device) => {
    try {
      fetchGateway(selectedGateway.serialNumber); 
      setShowAddDeviceForm(false);
    } catch (error) {
      console.error('Error adding device:', error);
    }
  };

  const handleRemoveDevice = async (uid) => {
    try {
      await axios.delete(`http://localhost:3000/gateways/${selectedGateway.serialNumber}/remove-device/${uid}`);
      fetchGateway(selectedGateway.serialNumber); 
    } catch (error) {
      console.error('Error removing device:', error);
    }
  };

  return (
    <div>
      <h2>Gateway List</h2>
      <ul>
        {gateways.map((gateway) => (
          <li style={{ cursor: 'pointer' }} key={gateway.serialNumber} onClick={() => handleGatewayClick(gateway)}>
            <strong>{gateway.name}</strong> - {gateway.serialNumber} - {gateway.ipv4}
          </li>
        ))}
      </ul>
      {selectedGateway && <GatewayDetail gateway={selectedGateway} onRemoveDevice={handleRemoveDevice} />}
      {selectedGateway && !showAddDeviceForm && (
        <button onClick={handleShowAddDeviceForm}>Add Device to Gateway</button>
      )}
      {showAddDeviceForm && (
        <div>
          <AddDeviceForm
            gatewaySerialNumber={selectedGatewaySerialNumber || selectedGateway.serialNumber}
            onAddDevice={handleAddDevice}
          />
          <button onClick={handleHideAddDeviceForm}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default GatewayList;
