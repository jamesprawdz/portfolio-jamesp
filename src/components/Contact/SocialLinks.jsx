import React from 'react';

const SocialLinks = () => {
  return (
    <div className="social-links-container">
      <h2 className="social-heading">Or feel free to connect with me on</h2>
      <div className="social-links">
        <a href="https://github.com/jamesprawdz" target="_blank" rel="noopener noreferrer" className="social-link">
          <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.755-1.333-1.755-1.09-.745.082-.73.082-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.305 3.492.998.108-.776.42-1.305.763-1.605-2.665-.305-5.467-1.332-5.467-5.93 0-1.31.468-2.38 1.235-3.22-.125-.303-.535-1.524.115-3.176 0 0 1.005-.322 3.3 1.23.957-.266 1.983-.4 3-.405 1.017.005 2.043.14 3 .405 1.76-1.193 2.532-.945 2.532-.945a3.31 3.31 0 0 1 .092 2.438 3.562 3.562 0 0 1 .947 2.474c0 3.54-2.155 4.32-4.208 4.548a2.195 2.195 0 0 1 .625 1.706c0 1.232-.011 2.227-.011 2.529 0 .32.22.694.825.577C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z"/></svg>
        </a>
        <a href="https://www.linkedin.com/in/james-prawdzik/" target="_blank" rel="noopener noreferrer" className="social-link">
          <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.025-3.037-1.85-3.037-1.85 0-2.134 1.447-2.134 2.942v5.664H9.356V9h3.414v1.56h.05c.475-.9 1.637-1.85 3.37-1.85 3.602 0 4.267 2.37 4.267 5.452v6.29zM5.337 7.501a2.063 2.063 0 1 1 0-4.126 2.063 2.063 0 0 1 0 4.126zm2.032 13.001H3.356V9h4.013v11.502z"/></svg>
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
