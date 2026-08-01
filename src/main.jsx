import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Explore from './Explore.jsx'
import Favourites from './Favourites.jsx'
import VisaFree from './Visa_free.jsx'
import Home from './Home.jsx'
import App from './App.jsx'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/favourites" element={<Favourites />} />
      <Route path="/visa-free" element={<VisaFree />} />
      <Route path="/home" element={<Home />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>
);
