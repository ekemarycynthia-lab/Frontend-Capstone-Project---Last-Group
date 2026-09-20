import logo from "../assets/hero.svg";
import earth from "../assets/Image.svg";

export default function Header() {
  return (
    <header id="hero">
      <img src={logo} alt="Planet logo" />

      <div>
        <h1>Explore Our Solar System Through Data</h1>
        <p>Understand the planets not just by name, but by measurable facts. From size and mass to gravity and density, this page breaks the solar system in a clear, data-driven way.</p>
        <a href="#planets">Explore the Data</a>
        <a href="#contact">Contact Us</a>
      </div>

      <img src={earth} alt="Earth from space" />
    </header>
  );
}