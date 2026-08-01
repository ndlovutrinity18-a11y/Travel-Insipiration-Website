import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Form from "./form";
export default function Home() {
  return (
    <div>
        <Navbar />
      <h1>Describe Your Perfect Trip let Terra.T find it for you!</h1>
        <Form />
      <Hero />
    </div>
  );
}