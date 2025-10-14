import React from 'react';

const projects = [
  {
    title: "Automation Suite",
    description: "A collection of scripts and tools to automate repetitive web tasks, including testing and data extraction.",
    link: "#"
  },
  {
    title: "Portfolio Website",
    description: "This very site! Built with React and Vite for fast, modern web presence.",
    link: "#"
  },
  {
    title: "API Integrator",
    description: "A backend solution to integrate and sync data between multiple third-party APIs.",
    link: "#"
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div>
        {projects.map(project => (
          <div key={project.title} style={{marginBottom: '1.5rem'}}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {/* Uncomment if you have links */}
            {/* <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a> */}
          </div>
        ))}
      </div>
    </section>
  );
}