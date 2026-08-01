import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
export default function Home() {
  return (
    <div>
        <Navbar />
      <h1>Home</h1>
      <p>Welcome to the Home page!</p>
      <Hero />
    </div>
  );
}