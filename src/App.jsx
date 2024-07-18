import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Topbar from './Components/Topbar';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Aboutus from './Components/Aboutus';
import Ourservices from './Components/Ourservices';
import Loancalculator from './Components/Loancalculator';
import Contactus from './Components/Contactus';
import Addmember from './Components/Addmember';

function App() {
  const location = useLocation();

  

  return (
    <>
    <Topbar/>
    <Navbar/>
    
  <Routes>

  <Route path="/Home" element={<Home />} />
  <Route path="/Aboutus" element={<Aboutus/>} />
  <Route path="/Ourservices" element={<Ourservices/>} />
  <Route path="/Loancalculator" element={<Loancalculator/>} />
  <Route path="/Contactus" element={<Contactus/>} />
  <Route path="/Addmember" element={<Addmember/>} />
  

    
</Routes>
<Footer/>
   
   

    </>
  )
}

export default App
