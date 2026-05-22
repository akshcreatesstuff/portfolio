import "./Works.css";
import ProjectCard from "./ProjectCard";

function Works() {
  return (
    <section className="works" id="projects">

      <p className="section-tag">
        /SELECTED WORK
      </p>

      <ProjectCard
        title="Image Matrix"
        category="Creative Coding"
      />

    </section>
  );
}

export default Works;