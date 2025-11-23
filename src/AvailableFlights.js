
import React from 'react';
import BookFlight from './BookFlight';

const AvailableFlights = ({ onBookFlight }) => {
  const flights = [
    { from: 'Beirut', to: 'Paris', time: '10:00 AM', price: '$300' },
    { from: 'Beirut', to: 'London', time: '2:00 PM', price: '$250' },
    { from: 'Beirut', to: 'Dubai', time: '6:00 PM', price: '$400' },
  ];

  return (
    <section className="container available-flights" style={{ padding: '20px' }}>
      <h2>Available Flights</h2>

      <table className="flights-table">
        <thead>
          <tr style={{ backgroundColor: '#187be6ff', color: 'white' }}>
            <th style={{ padding: '10px', border: '1px solid #ccc' }}>From</th>
            <th style={{ padding: '10px', border: '1px solid #ccc' }}>To</th>
            <th style={{ padding: '10px', border: '1px solid #ccc' }}>Time</th>
            <th style={{ padding: '10px', border: '1px solid #ccc' }}>Price</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight, index) => (
            <tr key={index}>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>{flight.from}</td>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>{flight.to}</td>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>{flight.time}</td>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>{flight.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: '30px' }}>
        
        <BookFlight onBookFlight={onBookFlight} />
      </div>
    </section>
  );
};

export default AvailableFlights;
