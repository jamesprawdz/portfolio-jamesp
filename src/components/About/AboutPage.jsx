import React from "react";
// import './AboutPage.css'; // Make sure to create and import AboutPage.css for styling

const AboutPage = () => {
  return (
    <main>
      <section id="about" className="about-section">
        <h2>About Me</h2>
        <p>
          A seasoned Software Engineer with a passion for developing innovative
          programs that expedite the efficiency and effectiveness of
          organizational success.
        </p>
        <h3>Skills</h3>
        <ul className="skills-list">
          <li>
            Proficient in Backend Development with strong skills in Python,
            Flask, and PostgreSQL
          </li>
          <li>
            Expertise in Full-stack Development including JavaScript, React, and
            API Integration
          </li>
          <li>
            Proficient in Cloud Technologies and DevOps practices, including
            AWS, Docker, and Kubernetes
          </li>
          <li>
            Strong background in System Architecture Design and Object-Oriented
            Programming
          </li>

          {/* Additional skills can be added here */}
        </ul>
      </section>
    </main>
  );
};

export default AboutPage;
