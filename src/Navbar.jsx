
import './Navbar.css';
import {useState} from 'react';
import image from './Terra-logo.png';
import { Link } from 'react-router-dom';
export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <div className="navbar">
    <ul className="nav-list">
      <li className="nav-home">
        <img className="nav-logo" src={image} alt="logo" width="30" height="30" />
        <Link to="/home" className="nav-link">
          TERRA.T
        </Link>
      </li>
      <li className="nav-items">
        <button 
          className="nav-link dropdown-btn" 
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          Explore
        </button>
        {isDropdownOpen && (
        <ul className="dropdown-menu">
          <li>
            <Link to="/explore/last-minute" className="dropdown-link">
              Last Minute Travel
            </Link>
          </li>
          <li>
            <Link to="/explore/friends" className="dropdown-link">
              Friends Getaways
            </Link>
          </li>
          <li>
            <Link to="/explore/honeymoon" className="dropdown-link">
              Honeymoon Destinations
            </Link>
          </li>
          <li>
            <Link to="/explore/beach" className="dropdown-link">
              Beach Escapes
            </Link>
          </li>
          <li>
            <Link to="/explore/safari" className="dropdown-link">
              Safari Adventures
            </Link>
          </li>
          <li>
            <Link to="/explore/budget" className="dropdown-link">
              Budget-Friendly Getaways
            </Link>
          </li>
        </ul>
        )}
      <li className="nav-item">
        <Link to="/favourites" className="nav-link">
          Favourites
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/visa-free" className="nav-link">
          Visa-Free
        </Link>
      </li>
      <li className="nav-item">
        <button type="button" className="btn btn-outline-light">Saved(0)
        </button>
      </li>
      </li>
</ul>
 </div>
  )
}