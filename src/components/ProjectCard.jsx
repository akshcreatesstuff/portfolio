function ProjectCard({ title, category, link, img }) {

  return (

    <div className="project-card">

      <div
        className="project-image"
        style={img ? { backgroundImage: `url('${img}')` } : {}}
      ></div>

      <div className="project-glow"></div>

      <div className="project-overlay">

        <p>{category}</p>

        <h2>{title}</h2>

      </div>

      <div className="view-project">
         <a href={link} target="_blank" rel="noopener noreferrer">
          VIEW PROJECT
        </a>
      </div>

    </div>
  );
}

export default ProjectCard;