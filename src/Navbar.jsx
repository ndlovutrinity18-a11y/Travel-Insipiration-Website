
import './Navbar.css';
import image from './Terra-logo.png';
export default function Navbar() {
  return (
    <div className="navbar">
    <ul class="nav justify-content-end">
      <li class="nav-home">
        <img className="nav-logo" src={image} alt="logo" width="30" height="30" />
    <a class="nav-link" href="#">TERRA.T</a>
  </li>
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Explore</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Favourite</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Visa-Free</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#">About</a>
  </li>
  <button type="button" class="btn btn-outline-light">Saved(0)</button>
</ul>
    </div>
  )
}