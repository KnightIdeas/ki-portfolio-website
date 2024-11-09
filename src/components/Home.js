import React from 'react';
import Hero from './Hero';
import logo from '../assets/images/Logo V1.png';
import MissionStatement from './MissionStatement';
import Services from './Services';
import CallToAction from './CallToAction';
import About from './About';
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
        <About 
        titleA='continuous self improvement'
        blurbA1='My journey in technology started with a fascination for computers and IT, but everything changed when I discovered the world of game development. Driven by creativity and curiosity, I led two game jam teams, bringing ideas to life through code and collaborating with talented creators. This experience sparked a deeper passion for development and led me to pursue formal training and certifications in web development, including specialized skills in front-end libraries and JavaScript.'
        blurbA2='I’m deeply committed to continuous learning, and I’m always excited to broaden my horizons. Recently, I’ve completed certifications in front-end development and JavaScript, and I’m now exploring TypeScript and Vue to add new layers to my skill set. Looking ahead, I plan to dive into backend development and AI, where I see exciting potential for growth and innovation. Beyond technology, I believe that self-development is holistic. I stay balanced and mentally sharp through daily walks, reading, and prioritizing my physical and mental well-being. For me, self-development is an ongoing journey, and I’m motivated to see where it takes me.'
        imgUrl=''
        imgAlt={''}
        titleB='Inspiring future generations'
        blurbB1='Helping others discover their potential in technology is one of the most rewarding parts of my career. I began by volunteering at my children’s local school, supporting students’ learning, which eventually led to my current role as a coding and robotics instructor. Today, I teach in multiple primary schools, introducing students to coding, robotics, and the thrill of building something from scratch. It’s incredibly fulfilling to see young learners light up when they understand a new concept or complete a project; my aim is to inspire them with the same passion for learning that has driven me.'
        blurbB2='My dedication to nurturing a love for learning extends beyond the classroom. During the COVID-19 pandemic, I homeschooled my children, teaching my eldest coding and animation, while also focusing on physical activities with my youngest to support her well-being. This experience reinforced my belief in the power of personalized learning and the importance of adapting to each student’s needs. Whether it’s guiding students in class or fostering curiosity in my own children, I see every moment as a chance to help others grow and succeed.'
        />
        {/* Additional content */}
        <MissionStatement />
        <Services />
        <CallToAction />
    </main>
  );
}



export default Home;