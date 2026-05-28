import "./Works.css";
import ProjectCard from "./ProjectCard";

function Works() {
  return (
    <section className="works" id="projects">

      <p className="section-tag">
        /SELECTED WORK
      </p>

      <ProjectCard
        title="Lead Intelligence"
        category="Salesforce Automation leveraging VertexAI"
      />

    </section>
  );
}

export default Works;