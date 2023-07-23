import React from 'react';

const GatewayDetail = ({ gateway, onRemoveDevice }) => {
  return (
    <div>
      <h3>Gateway Details</h3>
      <p>
        <strong>Name:</strong> {gateway.name}
      </p>
      <p>
        <strong>Serial Number:</strong> {gateway.serialNumber}
      </p>
      <p>
        <strong>IPv4:</strong> {gateway.ipv4}
      </p>
      {gateway.devices && gateway.devices.length > 0 ? (
        <div>
          <h4>Associated Devices</h4>
          <ul>
            {gateway.devices.map((device) => (
              <li key={device.uid}>
                UID: {device.uid}, Vendor: {device.vendor}, Date Created: {device.dateCreated}, Status: {device.status}
                <button onClick={() => onRemoveDevice(device.uid)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No associated devices.</p>
      )}
    </div>
  );
};

export default GatewayDetail;
