import React from 'react';
import '../styles/Portfolio.css';

const projects = [
  {
    title: 'Project 1: E-commerce Store',
    description: 'A full-stack e-commerce application built with React and Node.js. It features user authentication, a shopping cart, and a secure checkout process.',
    image: 'https://via.placeholder.com/600x400/3498db/fff?text=Project+1'
  },
  {
    title: 'Project 2: Portfolio Website',
    description: 'A personal portfolio website showcasing my skills and projects. This site was built from scratch using modern HTML, CSS, and JavaScript.',
    image: 'https://via.placeholder.com/600x400/2ecc71/fff?text=Project+2'
  },
  {
    title: 'Project 3: Travel Blog',
    description: 'A responsive travel blog with a content management system. Users can create, edit, and publish their own travel articles.',
    image: 'https://via.placeholder.com/600x400/9b59b6/fff?text=Project+3'
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-container">
        <h2>My Projects</h2>
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.title} />
              <div className="card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
