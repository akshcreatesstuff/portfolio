import "./About.css";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-heading">
        <h2>/ about me</h2>
        <span className="about-divider"></span>
      </div>

      <div className="about-body">
         <div className="about-image-wrap">
          <img src="src/assets/apabout.jpg" alt="Aishwariya" className="about-image" />
        </div>

        <div className="about-text">
          <p>
            I am currently a <strong>Senior Consultant</strong> at{" "}
            <span className="highlight-green">Deloitte</span>, where I work on
            large-scale digital transformation projects. Previously, I have worked
            across consulting and tech domains.
          </p>

          <p>Here are some technologies I have been working with:</p>

          <div className="about-skills">
            <ul>
              <li>Salesforce</li>
              <li>Salesforce Marketing Cloud</li>
              <li>Salesforce Sales Cloud</li>
              <li>Apex</li>
              <li>Python</li>
              <li>Copado Robotics Tool</li>
              <li>SOQL</li>
            </ul>
          </div>

          <p>
            In my free time, I'm a{" "}
            <span className="highlight-blue">space enthusiast</span>, passionate
            about world economics, history nerd and loves playing Clash Royale.
          </p>
        </div>

      </div>

    </section>
  );
}

export default About;