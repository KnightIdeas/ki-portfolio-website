import React from 'react';
import Hero from './Hero';
import logo from '../assets/images/Logo V1.png';

function Home() {
  return (
    <main>
        <Hero 
        title='This is a title'
        subtitle='This is a subtitle'
        imgUrl={logo}
        imgAlt={''}
        />
        {/* Additional content */}
    </main>
  );
}

export default Home;