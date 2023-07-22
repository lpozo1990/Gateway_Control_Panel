import React from 'react';

const GatewayDetail = ({ gateway }) => {
  return (
    <div>
      <h2>Gateway Details</h2>
      <p>Serial Number: {gateway.serialNumber}</p>
      <p>Name: {gateway.name}</p>
      <p>IPv4 Address: {gateway.ipv4}</p>
      {gateway.devices && gateway.devices.length > 0 ? (
        <div>
          <h3>Devices:</h3>
          <ul>
            {gateway.devices.map((device) => (
              <li key={device.uid}>
                UID: {device.uid} - Vendor: {device.vendor} - Date Created: {device.dateCreated} - Status: {device.status}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No devices associated with this gateway.</p>
      )}
    </div>
  );
};

export default GatewayDetail;
