import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import Explore from './Explore.jsx'
import Favourites from './Favourites.jsx'
import VisaFree from './Visa_free.jsx'
import About from './About.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/favourites" element={<Favourites />} />
      <Route path="/visa-free" element={<VisaFree />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>
);
