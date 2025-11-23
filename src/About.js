import React from 'react';
import myImage2 from'./screen2.jpg';
function About() {
  return (
    <div className="container">
      <h2>About Us</h2>
      <img src={myImage2} alt="about" style={{ width: '30%', borderRadius: '20px', marginBottom: '50px' }} />
      <p>
        Welcome to FlightBooking! We are dedicated to making your flight booking experience
        fast, simple, and secure. Our platform allows you to browse flights, compare prices,
        and book tickets easily. Customer satisfaction is our priority, and we strive to provide
        excellent service.
      </p>
      <p>
        Our team consists of aviation enthusiasts and tech experts who believe in
        seamless travel experience for everyone. Whether you are booking for business or leisure,
        FlightBooking ensures convenience and reliability.
      </p>
    </div>
  );
}

export default About;