function ProjectCard({ title, category }) {

  return (

    <div className="project-card">

      <div className="project-image"></div>

      <div className="project-glow"></div>

      <div className="project-overlay">

        <p>{category}</p>

        <h2>{title}</h2>

      </div>

      <div className="view-project">
        VIEW PROJECT
      </div>

    </div>
  );
}

export default ProjectCard;