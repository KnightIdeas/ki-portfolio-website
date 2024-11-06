import React, { useState } from 'react'
import ProjectCard from './ProjectCard';
import Modal from './Modal';
import './Projects.css';
import DOTDImageMain from '../assets/images/DOTD-g-project-image.png';
import TountraImageMain from '../assets/images/Tountra-g-project-image.png';
import LexFinalisImageMain from '../assets/images/LexFinalis-g-project-image.png';
import MovieAppImageMain from '../assets/images/KnightMovies-app-image.png';
import SimpleSlotImageMain from '../assets/images/SimpleSlotMachine-app-image.png';
import DrumMachineImageMain from '../assets/images/DrumMachine-app-image.png';
import BreakTimerImageMain from '../assets/images/JavaScriptBreakTimer-app-image.png';
import CalculatorImageMain from '../assets/images/JavaScriptCaluculator-app-image.png';
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
import CallToAction from './CallToAction';

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
    fullDescription: 'Led a team to create Draught of the Dungeon, a 3D dungeon crawler, for my first Game Jam. Using Unity, Blender, and Krita, I built a custom 3D map maker, designed levels, modeled assets, hand-drew textures, and added shaders and effects. The game features 8 unique potions, a 2D UI by Fixel, and immersive audio by DLG. Despite time constraints, we completed a polished, engaging experience, showcasing my leadership, asset creation, and problem-solving skills under pressure.',
    technologies: [
      unityIcon,
      blenderIcon,
      kritaIcon, 
      githubIcon
    ],
    image: DOTDImageMain,
    type: GAMES,
    link: 'https://knight-ideas.itch.io/draught-of-the-dungeon'
  },
  {
    title: 'Tountra - Cold Steel Vengence',
    description: 'MechJam IV entry Tountra, play as a brave freedom fighter on a frozen planet, featuring fully destructable buildings a weapon upgrade system and full 3D combat.',
    fullDescription: 'Led development of Tountra - Cold Steel Vengeance, a mech combat game, as an entry for Mech Jam IV 2023. Built in Unity with a team, I oversaw all Unity code and implemented tracked mech movement, destructible environments, and varied enemy AI. Collaborating closely with artists, I integrated 3D models from Blender and custom audio to enhance immersion. With engaging difficulty progression, explosive visuals, and strategic weapon upgrades, Tountra ranked #18 in Fun Factor on itch.io, earning positive player feedback.',
    technologies: [
      unityIcon,
      blenderIcon,
      githubIcon
    ],
    image: TountraImageMain,
    type: GAMES,
    link: 'https://knight-ideas.itch.io/mech-jam-iv-tountra-cold-steel-vengeance'
  },
  {
    title: 'Lex Finalis',
    description: 'An arcade space shooter, utilising endless runner techniques with three phases and an exciting boss encounter.',
    fullDescription: 'Lex Finalis, an endless-runner style game inspired by the classic Starfox SNES aesthetic, in Unity. Built to simulate forward movement by spawning 3D models that move toward the player, the game creates an immersive illusion of travel in a contained space. Features include full player control, laser shooting, missile lock-on, and three escalating difficulty levels, ending with a boss fight that combines enemy fighters and targeted attacks. Released on itch.io',
    technologies: [
      unityIcon,
      blenderIcon,
      githubIcon
    ],
    image: LexFinalisImageMain,
    type: GAMES,
    link: 'https://knight-ideas.itch.io/lex-finalis-demo'
  },
  {
    title: 'Movie App',
    description: 'Using the publicly available OMDb RESTful API to find and present all your favourite movies, with an attractive responsive UI',
    fullDescription: 'Built a responsive Movie App using React, NodeJS, and CSS, allowing users to search and filter films with the OMDb API. Enhanced search functionality using Regex for precise results. Features include a dark theme and a hover overlay displaying movie details like release year and poster visuals. While following a tutorial, I expanded it by adding comprehensive search capabilities and improving the overall user experience.',
    technologies: [
      nodeJSIcon,
      reactIcon,
      css3Icon,
    ],
    image: MovieAppImageMain,
    type: APPS,
    link: 'https://movie-app-nu-umber-22.vercel.app/'
  },
  {
    title: 'Drum Machine',
    description: 'A grid based drum machine, using keyinputs via JavaScript of mouse input to play different drum sound samples.',
    fullDescription: 'Built an interactive Drum Machine using React and CSS Grid, allowing users to trigger sounds via both keyboard presses and clicks. Each button activates unique audio from the FreeCodeCamp sound library, with the current sound name displayed on-screen. This project features a modular component structure, responsive design, and audio playback through useRef and useEffect hooks, providing a smooth and intuitive user experience.',
    technologies: [
      nodeJSIcon,
      reactIcon,
      css3Icon
    ],
    image: DrumMachineImageMain,
    type: APPS,
    link: 'https://drum-machine-virid-iota.vercel.app/'
  },
  {
    title: 'Break Timer',
    description: 'Handy break timer, allowing for Pomodoro style work, with an alarm and adjustable timers.',
    fullDescription: 'Developed a responsive Pomodoro-style Break Timer in JavaScript with a focus on mobile optimization. The timer enables users to set session and break durations, start/stop, and reset functions. Built using custom constructors, it seamlessly switches between work and break intervals, complete with audio alerts. This project showcases dynamic DOM manipulation and responsive design principles to create a functional, user-friendly experience.',
    technologies: [
      html5Icon,
      javaScriptIcon,
      css3Icon
    ],
    image: BreakTimerImageMain,
    type: APPS,
    link: 'https://knightideas.github.io/js-break-timer/'
  },
  {
    title: 'Simple Slot Machine',
    description: 'A JavaScript based slot machine that renders to a grid, place your bets!',
    fullDescription: 'Developed a simple yet engaging Slot Machine game in JavaScript, HTML, and CSS. The game features randomized reels with symbols, a betting input, and balance tracking, providing a dynamic user experience. With every spin, players can win or lose based on matching symbols, with winnings updating their balance. This project highlights my skills in DOM manipulation, event handling, and responsive design to create an interactive, user-friendly interface.',
    technologies: [
      html5Icon,
      javaScriptIcon,
      css3Icon
    ],
    image: SimpleSlotImageMain,
    type: APPS,
    link: 'https://knightideas.github.io/Slot_Machine/'
  },
  {
    title: 'Easy To Use Calculator',
    description: 'JavaScript calculator capable of most basic calculations with large easy to use buttons.',
    fullDescription: 'Created a responsive, grid-based Calculator using JavaScript, HTML, and CSS. This project handles real-time calculations and supports basic arithmetic operations, decimal points, and clear functions. Designed with modular arrays for input and operators, it uses DOM manipulation to display results dynamically. The interface is optimized for both desktop and mobile, ensuring smooth usability. This project highlights event handling, error handling, and layout design.',
    technologies: [
      html5Icon,
      javaScriptIcon,
      css3Icon
    ],
    image: CalculatorImageMain,
    type: APPS,
    link: 'https://knightideas.github.io/js-calculator/'
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

  const projectTypes = [APPS, AI_APPS, GAMES];

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
      <CallToAction />
    </div>
  );
};

export default Projects;