
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './Home';

import Contact from './Contact';
import Login from './Login';
import AboutUs from './AboutUs';
import Signup from './Signup';
import Dashboard from './Dashboard';
 



function Routers() {
 

 
 







  return (
    <div>

    


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />

          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
        
         


        </Routes>
      </BrowserRouter>


     







    </div>
  );
}

export default Routers
