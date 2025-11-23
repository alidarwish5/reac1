import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from'react-router-dom';
import BookFlight from './BookFlight';
import Header from './Header';
import Footer from'./Footer';
import AvailableFlights from'./AvailableFlights';
import About from'./About';
import Home from './Home';
import Contact from'./Contact';
import Rate from './Rate';
import Navbar from'./Navbar';


function App() {
  const [BookFlightData, setBookFlight] = useState([]);

  const handleSubmit = (BookFlightsData) => {
    setBookFlight([...BookFlight, BookFlightData]);
  };

  return (
  

    <div style={{ padding: '40px' }}>
      <Router>
       <Header/>
        
       <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Flights" element={<AvailableFlights />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/rate" element={<Rate />} />
        <Route path="/BookFlight" element={<BookFlight />} />
      </Routes>
      
      <div/>
        
    </Router>

      
         
        <Footer />
       
      <div >

            
            
       </div>
       
         
    </div>
   
  );
}


export default App;