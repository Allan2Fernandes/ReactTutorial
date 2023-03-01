import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Components/Navbar.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>OUR LOGO</h3>
      <nav ref={navRef}>
        <a href="/">{<Home />}</a>
        <a href="/about">{<About />}</a>
        <a href="/contact">{<Contact />}</a>
        <a href="/ListOfMovies">List of Movies</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Contact() {
  return <h2>Contact</h2>;
}

export default Navbar;
