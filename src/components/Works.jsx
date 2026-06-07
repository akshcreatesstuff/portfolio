import { useEffect, useState } from "react";
import "./Works.css";
import ProjectCard from "./ProjectCard";
const ASSET_BASE = import.meta.env.VITE_ASSET_BASE_URL;


const projectItems = [
  {
    title: "Lead Intelligence",
    category: "Salesforce Automation leveraging VertexAI",
    link: "https://github.com/akshcreatesstuff/Lead-Intelligence",
    img: ASSET_BASE + "/assets/leadintelprojimg.png",
  },
  {
    title: "Salesforce Data Clean & Upload",
    category: "A lightweight Flask microservice that cleans, validates, and uploads data to Salesforce",
    link: "https://github.com/akshcreatesstuff/salesforce-data-cleaner",
    img: "",
  }
];

function Works() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevProject = () => {
    setActiveIndex((current) =>
      current === 0 ? projectItems.length - 1 : current - 1
    );
  };

  const nextProject = () => {
    setActiveIndex((current) =>
      current === projectItems.length - 1 ? 0 : current + 1
    );
  };

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setActiveIndex((current) =>
        current === projectItems.length - 1 ? 0 : current + 1
      );
    }, 6000);

    return () => clearInterval(slideTimer);
  }, []);

  return (
    <section className="works" id="projects">

      <div className="works-header">
        <p className="section-tag">/ selected work</p>
        <span className="section-divider"></span>
        <div className="carousel-controls">
          <button type="button" className="carousel-nav prev" onClick={prevProject}>
            ‹
          </button>
          <button type="button" className="carousel-nav next" onClick={nextProject}>
            ›
          </button>
        </div>
      </div>

      <div className="carousel">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {projectItems.map((project) => (
            <div className="carousel-slide" key={project.title}>
              <ProjectCard
                title={project.title}
                category={project.category}
                link={project.link}
                img={ASSET_BASE + "/assets/leadintelprojimg.png"}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-dots">
        {projectItems.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`carousel-dot ${index === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Show project ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Works;