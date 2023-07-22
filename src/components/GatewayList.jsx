import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GatewayDetail from './GatewayDetail';
import AddDeviceForm from './AddDeviceForm';

const GatewayList = () => {
  const [gateways, setGateways] = useState([]);
  const [selectedGateway, setSelectedGateway] = useState(null);
  const [showAddDeviceForm, setShowAddDeviceForm] = useState(false);
  
  const fetchGateways = async () => {
    try {
      const response = await axios.get('http://localhost:3000/gateways');
      setGateways(response.data);
    } catch (error) {
      console.error('Error fetching gateways:', error);
    }
  };

  useEffect(() => {
    fetchGateways();
  }, []);

  const handleGatewayClick = (gateway) => {
    setSelectedGateway(gateway);
    setShowAddDeviceForm(false); 
  };

  const handleShowAddDeviceForm = () => {
    setShowAddDeviceForm(true); 
  };

  const handleHideAddDeviceForm = () => {
    setShowAddDeviceForm(false); 
  };


  const handleAddDevice = async (device) => {
    try {
      await axios.put(`http://localhost:3000/gateways/${selectedGateway.serialNumber}/add-device`, device);
      fetchGateways();
      setShowAddDeviceForm(false); 
    } catch (error) {
      console.error('Error adding device:', error);
    }
  };

  return (
    <div>
      <h2>Gateway List</h2>
      <ul>
        {gateways.map((gateway) => (
          <li style={{cursor:"pointer"}} key={gateway.serialNumber} onClick={() => handleGatewayClick(gateway)}>
            <strong>{gateway.name}</strong> - {gateway.serialNumber} - {gateway.ipv4}
          </li>
        ))}
      </ul>
      {selectedGateway && <GatewayDetail gateway={selectedGateway} />}
      {selectedGateway && !showAddDeviceForm && (
        <button onClick={handleShowAddDeviceForm}>Add Device to Gateway</button>
      )}
      {showAddDeviceForm && (
        <div>
             <AddDeviceForm
            gatewaySerialNumber={selectedGateway.serialNumber}
            onAddDevice={handleAddDevice}
          />
          <button onClick={handleHideAddDeviceForm}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default GatewayList;
