import React from 'react';
import Hero from './Hero';
import logo from '../assets/images/Logo V1.png';
import MissionStatement from './MissionStatement';
import Services from './Services';
import CallToAction from './CallToAction';

function Home() {
  return (
    <main>
        <Hero 
        title='Upgrade Your Business with Cutting-Edge AI'
        subtitle='Leveraging the power of AI to revolutionize your web applications and streamline your processes.'
        imgUrl={logo}
        imgAlt={''}
        />
        {/* Additional content */}
        <MissionStatement />
        <Services />
        <CallToAction />
    </main>
  );
}

export default Home;