import React from 'react'
import ProjectCard from './ProjectCard';
import './ProjectCard.css';

const Projects = () => {
  const projects = [{
    title: 'AI Chatbot',
    description: "A sophisticated AI chatbot that handles customer inquiries.",
    technologies: ['React', 'AI', 'Node.js'],
    image: "http://via.placeholder.com/400"
  },
  {
    title: 'E-commerce Dashboard',
    description: "Dashboard for e-commerce metrics visualization.",
    technologies: ["React", "D3.js", "Firebase"],
    image: "http://via.placeholder.com/400"
  },
  {
    title: 'E-commerce Dashboard',
    description: "Dashboard for e-commerce metrics visualization.",
    technologies: ["React", "D3.js", "Firebase"],
    image: "http://via.placeholder.com/400"
  },
  {
    title: 'E-commerce Dashboard',
    description: "Dashboard for e-commerce metrics visualization.",
    technologies: ["React", "D3.js", "Firebase"],
    image: "http://via.placeholder.com/400"
  }
  // Add more projects
]
  return (
    <div className='projects-page'>
      <h1 className='projects-container'>Projects</h1>
      <div className='projects-container'>
        {projects.map((project, index) => (<ProjectCard key={index} project={project} />
      ))}
      </div>
    </div>
  );
};

export default Projects;