import "./App.css";
import Navbar from "./Navbar";
export default function Explore() {
  return (
    <div className="explore">
      <Navbar />
        <div className="hero">
      <h1>Discover your next destination.</h1>
      <p>Describe your dream trip — Terra finds destinations that match you.</p>
      <form>
        <input type="text" placeholder="eg. warm beach,under $500,not too crowded" />
        <button type="submit">Ask Terra.T</button>
      </form>
      </div>
      <p>SEE YOU IN THE CLOUD</p>
    </div>
  )
}