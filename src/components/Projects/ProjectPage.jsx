import React from "react";
// import './Project.css'; // Make sure to create and import Project.css for project-specific styles

const ProjectPage = () => {
  return (
    <main>
      <section id="portfolio">
        <h2>My Work</h2>

        {/* MediEncryptor Project Item */}
        <div className="portfolio-item">
          <img
            src="https://healthitsecurity.com/images/site/features/_normal/2018-02-09data-encryption.jpg"
            alt="MediEncryptor Project"
          />
          <h3>MediEncryptor</h3>
          <p>
            MediEncryptor is a Flask-based web application designed to securely
            encrypt and decrypt medical data using advanced encryption
            techniques.
          </p>
          <p>
            <strong>Technologies:</strong> Python, Flask, AES-256 Encryption
          </p>
          <p>
            <strong>Role:</strong> Full-stack Developer
          </p>
          <p>
            <strong>Features:</strong> Secure key management, Automated testing
          </p>
          <p>
            <strong>Compliance:</strong> Adheres to healthcare data protection
            standards
          </p>
          <a
            href="https://github.com/jamesprawdz/MediEncryptor"
            target="_blank"
          >
            View on GitHub
          </a>
          {/* Replace '#' with the actual link */}
          <a href="#" target="_blank">
            Live Project
          </a>
        </div>

        {/* Example Portfolio Item */}
        <div className="portfolio-item">
          <img src="path_to_placeholder_image.jpg" alt="Placeholder Project" />
          <h3>Placeholder Project</h3>
          <p>This is a placeholder for a future project.</p>
          <p><strong>Technologies:</strong> Tech Stack Used</p>
          <p><strong>Role:</strong> Your Role</p>
          <p><strong>Features:</strong> Key Features</p>
          <p><strong>Compliance:</strong> Any Compliance Notes</p>
          <a href="#" target="_blank">View on GitHub</a>
          <a href="#" target="_blank">Live Project</a>
        </div>

        {/* Additional portfolio items can be added here */}
      </section>
    </main>
  );
};

export default ProjectPage;
