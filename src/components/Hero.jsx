import "./Hero.css";
import PixelCanvas from "./PixelCanvas";

function Hero() {
  return (
    <section className="hero">
      <div className="noise"></div>

      {/* Aurora Background */}
      <div className="aurora aurora1"></div>
      <div className="aurora aurora2"></div>
      <div className="aurora aurora3"></div>
      <div className="stars"></div>

      <div className="hero-left">
        <h1>Hi ! I'm Aishwariya.</h1>

        <p>Senior Consultant at Deloitte & Space Enthusiast.</p>
        
      </div>

      <div className="hero-right">
        <div className="portrait-glow"></div>
          <PixelCanvas />
      </div>

    </section>
  );
}

export default Hero;