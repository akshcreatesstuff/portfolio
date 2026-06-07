import "./Navbar.css";
const ASSET_BASE = import.meta.env.VITE_ASSET_BASE_URL;
const linkedinImg = ASSET_BASE + "/assets/linkedin.png";
const githubImg = ASSET_BASE + "/assets/git.png";

function Navbar() {
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
      

      <div className="nav-links">
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#podcasts">Podcasts</a>
      </div>

    </nav>
  );
}

export default Navbar;