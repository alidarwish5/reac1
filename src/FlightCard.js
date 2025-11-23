import React from 'react';

function FlightCard({ flight }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '10px',
      marginBottom: '10px',
      borderRadius: '8px',
      maxWidth: '400px'
    }}>
      <h3>{flight.name}</h3>
      <p>From: {flight.from}</p>
      <p>To: {flight.to}</p>
      <p>Price: ${flight.price}</p>
     
    </div>
  );
}

export default FlightCard;