import React, { useState } from 'react';

const BookFlight = ({ onBookFlight}) => {
  const [Name, setName] = useState('');
  const [from, setfrom] = useState('');
  const [to, setto] = useState('');
  const [date, setdate] = useState('');

  
  const [bookings, setBookings] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const FlightData = {
      Name,
      from,
      to,
      date,
    };

    alert(`Form Submitted!\n\nName: ${Name}\nfrom: ${from}\nto: ${to}\ndate: ${date}`);

    
    setBookings(prev => [...prev, FlightData]);
    if (typeof onBookFlight === 'function') {
      onBookFlight(FlightData);
    }

    setName('');
    setfrom('');
    setto('');
    setdate('');
  };

  return (
    
    <div style={{ padding: '20px', backgroundColor: '#eee', width: '600px', borderRadius: '8px' }}>
      <h2>Book your flight</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label></label><br />
          <input type="text" value={Name} placeholder='Your name' onChange={(e) => setName(e.target.value)} required />
        </div>

        <div>
          <label></label><br />
          <input type="text" value={from} placeholder='From' onChange={(e) => setfrom(e.target.value)} required />
        </div>

        <div>
          <label></label><br />
          <input type="text" value={to} placeholder='To' onChange={(e) => setto(e.target.value)} required />
        </div>

        <div>
          <label></label><br />
          <input type="date" value={date} placeholder='Date' onChange={(e) => setdate(e.target.value)} required />
        </div>

        <button type="submit" style={{ marginTop: '10px' }}>Book Flight</button>
      </form>
      
      {bookings.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h3>Booked Flights</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid #ccc', padding: '8px' }}>Name</th>
                <th style={{ border: '1px solid #ccc', padding: '8px' }}>From</th>
                <th style={{ border: '1px solid #ccc', padding: '8px' }}>To</th>
                <th style={{ border: '1px solid #ccc', padding: '8px' }}>Date</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b, i) => (
                <tr key={i}>
                  <td style={{ border: '1px solid #ccc', padding: '8px' }}>{b.Name}</td>
                  <td style={{ border: '1px solid #ccc', padding: '8px' }}>{b.from}</td>
                  <td style={{ border: '1px solid #ccc', padding: '8px' }}>{b.to}</td>
                  <td style={{ border: '1px solid #ccc', padding: '8px' }}>{b.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
    
    
  );
};

export default BookFlight;