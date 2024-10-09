import React, { useState } from 'react'
import ProjectCard from './ProjectCard';
import Modal from './Modal';
import './Projects.css';
import image1 from '../assets/images/DOTD-g-project-image.png';
import image2 from '../assets/images/Tountra-g-project-image.png';
import image3 from '../assets/images/KnightMovies-app-image.png';
import imageTemp from '../assets/images/ComingSoon-project-image.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Web dev icons
import { faHtml5} from '@fortawesome/free-brands-svg-icons/faHtml5';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons';
import NextJSIcon from '../assets/images/nextjs-icon.svg';
// Game dev icons
import { faUnity } from '@fortawesome/free-brands-svg-icons';
import GodotIcon from '../assets/images/godot-engine-icon.svg';
import BlenderIcon from '../assets/images/blender-icon.svg';
import GameMakerIcon from '../assets/images/gamemaker-icon.svg';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { type } from '@testing-library/user-event/dist/type';
import KritaIcon from '../assets/images/krita-icon.svg';

const GAMES = 'Games';
const APPS = 'Apps';
const AI_APPS = 'AI Apps';

const projects = [
  {
    title: 'Draught of The Dungeon',
    description: '"Apprentice, find thy master!" A potion throwing dungeon crawler/puzzle game',
    technologies: [
  { icon: <FontAwesomeIcon icon={faUnity} />, tooltip: 'Unity', type: 'fontawesome'},
  { icon: <img src={BlenderIcon} alt='Blender' />, tooltip: 'Blender', type: 'svg'},
  { icon: <img src={KritaIcon} alt='Krita' />, tooltip: 'Krita', type: 'svg'},
  { icon: <FontAwesomeIcon icon={faGithub} />, tooltip: 'GitHub', type: 'fontawesome'},
    ],
    image: image1,
    type: GAMES
  },
  {
    title: 'Tountra - Cold Steel Vengence',
    description: 'MechJam IV entry Tountra, play as a brave freedom fighter on a frozen planet, featuring fully destructable buildings a weapon upgrade system and full 3D combat',
    technologies: [],
    image: image2,
    type: GAMES
  },
  {
    title: 'Movie App',
    description: 'Using the publicly available X API to find and present all your favourite movies',
    technologies: [],
    image: image3,
    type: APPS
  },
  {
    title: 'Coming Soon App Project #3',
    description: 'A new project',
    technologies: [],
    image: imageTemp,
    type: APPS
  },
  {
    title: 'Coming Soon AI Project #1',
    description: 'A new project',
    technologies: [],
    image: imageTemp,
    type: AI_APPS
  },
  {
    title: 'Coming Soon AI Project #2',
    description: 'A new project',
    technologies: [],
    image: imageTemp,
    type: AI_APPS
  },
]

const Projects = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const handleProjectClick = project => {
    setCurrentProject(project);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

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
              <ProjectCard key={idx} project={project} onClick={() => handleProjectClick(project)} />
            ))}
          </div>
        </div>
      ))}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} project={currentProject} />
    </div>
  );
};

export default Projects;