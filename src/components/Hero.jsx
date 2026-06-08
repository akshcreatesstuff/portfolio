import { useEffect, useState, useRef } from "react";
import "./Hero.css";
import PixelCanvas from "./PixelCanvas";
const ASSET_BASE = import.meta.env.VITE_ASSET_BASE_URL;

function Hero() {
  const [email, setEmail] = useState("");

useEffect(() => {
  fetch(`${ASSET_BASE}/assets/PIAssets/info.json`)
    .then(res => res.json())
    .then(data => setEmail(data.email));
}, []);

  return (
    <section className="hero" id="hero">
      <div className="noise"></div>

      {/* Aurora Background */}
      <div className="aurora aurora1"></div>
      <div className="aurora aurora2"></div>
      <div className="aurora aurora3"></div>
      <div className="stars"></div>

      <div className="hero-left">
        <h1>
          <span className="typewriter">hi ! I'm <span className="name-highlight">Aishwariya.</span>
          </span>
        </h1>

        <p>Senior Consultant at Deloitte & Space Enthusiast.</p>
        <button className="contact-button"  onClick={() => {
            window.location.href = `mailto:${email}`}}>
              Say hi!
        </button>
      </div>

      <div className="hero-right">
        <div className="portrait-glow"></div>
        <PixelCanvas />
      </div>
    </section>
  );
}

export default Hero;