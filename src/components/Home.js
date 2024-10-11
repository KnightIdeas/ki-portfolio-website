import React from 'react';
import Hero from './Hero';
import logo from '../assets/images/Logo V1.png';
import MissionStatement from './MissionStatement';
import Services from './Services';
import CallToAction from './CallToAction';
import ProjectOverview from './ProjectOverview';
// Font awesome import
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

const imageArrayA = [
  { icon: <FontAwesomeIcon icon={faHtml5} />, tooltip: 'HTML5', type: 'fontawesome'},
  { icon: <FontAwesomeIcon icon={faCss3} />, tooltip: 'CSS3', type: 'fontawesome'},
  { icon: <FontAwesomeIcon icon={faJs} />, tooltip: 'JavaScript', type: 'fontawesome'},
  { icon: <FontAwesomeIcon icon={faReact} />, tooltip: 'React', type: 'fontawesome'},
  { icon: <FontAwesomeIcon icon={faBootstrap} />, tooltip: 'Bootstrap', type: 'fontawesome'},
  { icon: <FontAwesomeIcon icon={faNodeJs} />, tooltip: 'NodeJS', type: 'fontawesome'},
  { icon: <img src={NextJSIcon} alt='Next.js' />, tooltip: 'Next.js', type: 'svg'},
];

const imageArrayB = [
  { icon: <FontAwesomeIcon icon={faUnity} />, tooltip: 'Unity', type: 'fontawesome'},
  { icon: <img src={GodotIcon} alt='Godot' />, tooltip: 'Godot', type: 'svg'},
  { icon: <img src={BlenderIcon} alt='Blender' />, tooltip: 'Blender', type: 'svg'},
  { icon: <img src={GameMakerIcon} alt='Game Maker' />,tooltip: 'Game GameMakerIcon', type: 'svg'},
  { icon: <FontAwesomeIcon icon={faGithub} />, tooltip: 'Github', type: 'fontawesome'}
  
];

function Home() {
  return (
    <main>
        <Hero 
        titleA='<Web Developer>'
        subtitleA='Using JavaScript, CSS, HTML, React and Next.js to build dynamic web experiences.'
        imgUrl={logo}
        imgAlt={''}
        titleB='*Game Developer*'
        subtitleB='Building exciting, fun experiences in Unity and Godot'
        imageArrayA={imageArrayA}
        imageArrayB={imageArrayB}
        />
        
        {/* Additional content */}
        <MissionStatement />
        <Services />
        <CallToAction />
    </main>
  );
}



export default Home;