import React from 'react'
import ProjectCard from './ProjectCard';
import './Projects.css';
import image1 from '../assets/images/DOTD-g-project-image.png';
import image2 from '../assets/images/Tountra-g-project-image.png';

const GAMES = 'Games';
const APPS = 'Apps';
const AI_APPS = 'AI Apps';

const projects = [
  {
    title: 'Draught of The Dungeon',
    description: '"Apprentice, find thy master!" A potion throwing dungeon crawler/puzzle game',
    technologies: ['Unity', 'Blender', 'Krita', 'Git', 'Materialize'],
    image: image1,
    type: GAMES
  },
  {
    title: 'Tountra - Cold Steel Vengence',
    description: 'MechJam IV entry Tountra, play as a brave freedom fighter on a frozen planet, featuring fully destructable buildings a weapon upgrade system and full 3D combat',
    technologies: ['Unity', 'Blender', 'Krita', 'Git'],
    image: image2,
    type: GAMES
  },
  {
    title: 'Movie App',
    description: 'Using the publicly available X API to find and present all your favourite movies',
    technologies: ['React', 'Node.js', 'Git'],
    image: image2,
    type: APPS
  },
  
]

const Projects = () => {
  const projectTypes = [GAMES, APPS, AI_APPS];

  const categorizedProjects = projectTypes.map(type => ({
    type,
    items: projects.filter(project => project.type === type)
  }));

  // Add more types as needed

  return (
    <div className='projects-page'>
      {categorizedProjects.map((category, index) => (
        <div key={index} className='project-category'>
          <h2>{category.type}</h2>
          <div className='projects-container'>
            {category.items.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;