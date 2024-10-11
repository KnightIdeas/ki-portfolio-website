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
import KritaIcon from '../assets/images/krita-icon.svg';

const GAMES = 'Games';
const APPS = 'Apps';
const AI_APPS = 'AI Apps';

class Icon {
  constructor(icon, tooltip, type) {
    this.icon = icon;
    this.tooltip = tooltip;
    this.type = type;
  }
}
// Game based icons
let unityIcon = new Icon(<FontAwesomeIcon icon={faUnity} />, 'Unity', 'fontawesome');
let blenderIcon = new Icon(<img src={BlenderIcon} alt='Blender' />, 'Blender', 'svg');
let kritaIcon = new Icon(<img src={KritaIcon} alt='Krita' />, 'Krita', 'svg');
let githubIcon = new Icon(<FontAwesomeIcon icon={faGithub} />, 'GitHub', 'fontawesome');
// Web app based icons
let html5Icon = new Icon(<FontAwesomeIcon icon={faHtml5} />, 'HTML5', 'fontawesome');
let css3Icon = new Icon (<FontAwesomeIcon icon={faCss3} />, 'CSS3', 'fontawesome');
let javaScriptIcon = new Icon (<FontAwesomeIcon icon={faJs} />, 'JavaScript', 'fontawesome');
let reactIcon = new Icon (<FontAwesomeIcon icon={faReact} />, 'React', 'fontawesome');
let Bootstrap = new Icon (<FontAwesomeIcon icon={faBootstrap} />, 'BootStrap', 'fontawesome');
let nodeJSIcon = new Icon (<FontAwesomeIcon icon={faNodeJs} />, 'NodeJS', 'fontawesome');
let nextJSIcon = new Icon (<img src={NextJSIcon} alt='NextJS'/>, 'NextJS', 'svg');

const projects = [
  {
    title: 'Draught of The Dungeon',
    description: '"Apprentice, find thy master!" A potion throwing dungeon crawler/puzzle game.',
    technologies: [
      unityIcon,
      blenderIcon,
      kritaIcon, 
      githubIcon
    ],
    image: image1,
    type: GAMES,
    link: 'https://knight-ideas.itch.io/draught-of-the-dungeon'
  },
  {
    title: 'Tountra - Cold Steel Vengence',
    description: 'MechJam IV entry Tountra, play as a brave freedom fighter on a frozen planet, featuring fully destructable buildings a weapon upgrade system and full 3D combat.',
    technologies: [
      unityIcon,
      blenderIcon,
      githubIcon
    ],
    image: image2,
    type: GAMES,
    link: 'https://knight-ideas.itch.io/mech-jam-iv-tountra-cold-steel-vengeance'
  },
  {
    title: 'Lex Finalis',
    description: 'An arcade space shooter, utilising endless runner techniques with three phases and an exciting boss encounter.',
    technologies: [
      unityIcon,
      blenderIcon,
      githubIcon
    ],
    image: image2,
    type: GAMES,
    link: 'https://knight-ideas.itch.io/lex-finalis-demo'
  },
  {
    title: 'Movie App',
    description: 'Using the publicly available X API to find and present all your favourite movies, with an attractive responsive UI',
    technologies: [
      nodeJSIcon,
      reactIcon,
      css3Icon,
    ],
    image: image3,
    type: APPS
  },
  {
    title: 'Drum Machine',
    description: 'A button based drum machine, using keyinputs via JavaScript of mouse input to play different drum sound samples.',
    technologies: [
      nodeJSIcon,
      reactIcon,
      css3Icon
    ],
    image: imageTemp,
    type: APPS
  },
  {
    title: 'Break Timer',
    description: 'Handy break timer, allowing for Pomodoro style work, with an alarm and adjustable timers.',
    technologies: [
      html5Icon,
      javaScriptIcon,
      css3Icon
    ],
    image: imageTemp,
    type: APPS
  },
  {
    title: 'Simple Slot Machine',
    description: 'A new project',
    technologies: [
      html5Icon,
      javaScriptIcon,
      css3Icon
    ],
    image: imageTemp,
    type: APPS
  },
  {
    title: 'JavaScript Calculator',
    description: 'A new project',
    technologies: [
      html5Icon,
      javaScriptIcon,
      css3Icon
    ],
    image: imageTemp,
    type: APPS
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

  const handleProjectLink = () => {
    window.open(currentProject.link);
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
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} onLink={handleProjectLink} project={currentProject} />
    </div>
  );
};

export default Projects;