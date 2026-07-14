
import './Navbar.css';
import image from './Terra-logo.png';
import { Link } from 'react-router';
export default function Navbar() {
  return (
    <div className="navbar">
    <ul class="nav justify-content-end">
      <li class="nav-home">
        <img className="nav-logo" src={image} alt="logo" width="30" height="30" />
        <Link to="/" className="nav-link">
          TERRA.T
        </Link>
      </li>
      <li class="nav-item">
        <Link to="/explore" className="nav-link active" aria-current="page">
          Explore
        </Link>
      </li>
      <li class="nav-item">
        <Link to="/favourites" className="nav-link">
          Favourites
        </Link>
      </li>
      <li class="nav-item">
        <Link to="/visa-free" className="nav-link">
          Visa-Free
        </Link>
      </li>
      <li class="nav-item">
        <Link to="/about" className="nav-link disabled">
          About
        </Link>
      </li>
      <button type="button" class="btn btn-outline-light">Saved(0)</button>
</ul>
    </div>
  )
}