import React from "react";
import './Navbar.css';
export default function Navbar() {
  return (
    <div className="navbar">
    <ul class="nav justify-content-end">
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
</ul>
    </div>
  )
}