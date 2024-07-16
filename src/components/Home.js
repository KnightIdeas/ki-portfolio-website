import React from 'react';
import Hero from './Hero';
import logo from '../assets/images/Logo V1.png';
import MissionStatement from './MissionStatement';
import Services from './Services';
import CallToAction from './CallToAction';
import ProjectOverview from './ProjectOverview';

function Home() {
  return (
    <main>
        <Hero 
        titleA='<Web Developer>'
        subtitleA='Using JavaScript, CSS, HTML, React and Next.js to build dynamic web experiences.'
        imgUrl={logo}
        imgAlt={''}
        titleB='Game Developer'
        subtitleB='Building exciting, fun experiences in Unity and Unreal'
        />
        <ProjectOverview />
        {/* Additional content */}
        <MissionStatement />
        <Services />
        <CallToAction />
    </main>
  );
}

export default Home;