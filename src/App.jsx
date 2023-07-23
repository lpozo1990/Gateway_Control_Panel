import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GatewayForm from './components/GatewayForm';
import GatewayList from './components/GatewayList';
import "./App.css"
const App = () => {
  const [gateways, setGateways] = useState([]);

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


  
  const handleAddGateway = async (newGateway) => {
    try {
      await axios.post('http://localhost:3000/gateways', newGateway);
      fetchGateways();
    } catch (error) {
      console.error('Error adding gateway:', error);
    }
  };

  return (
    <div>
      <h1>Gateway Service API UI</h1>
      <GatewayForm onAddGateway={handleAddGateway} />
      <GatewayList gateways={gateways} />
    </div>
  );
};

export default App;
