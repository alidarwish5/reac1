
import React from 'react';
import myImage3 from'./screen3.jpg'
function Home() {
  return (
    <div className="container">
      <h1>Welcome to FlightBooking</h1>
        <img src={myImage3} alt="banner" style={{ width: '100%', borderRadius: '10px' }} />
      <p>Book your flights easily with our platform!</p>
    </div>
  );
}

export default Home;