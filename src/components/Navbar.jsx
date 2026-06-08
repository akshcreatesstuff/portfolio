import { useState } from "react";
import "./Navbar.css";

const ASSET_BASE = import.meta.env.VITE_ASSET_BASE_URL;

const linkedinImg = ASSET_BASE + "/assets/linkedin.png";
const githubImg = ASSET_BASE + "/assets/git.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="logo">

        <div className="logo-glow">
          <a href="#hero">Aishwariya P S</a>
        </div>

        <a
          className="external-link"
          href="https://www.linkedin.com/in/aishps/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinImg} alt="LinkedIn" />
        </a>

        <a
          className="external-link"
          href="https://github.com/akshcreatesstuff"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubImg} alt="GitHub" />
        </a>

      </div>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a href="#hero" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#podcasts" onClick={() => setMenuOpen(false)}>Podcasts</a>
      </div>

    </nav>
  );
}

export default Navbar;