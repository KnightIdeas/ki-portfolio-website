import React from 'react'

import TempImage from '../assets/images/ComingSoon-project-image.png'

export default function Gallery() {

    class Image {
        constructor(src, alt, title) {
            this.src = src;
            this.alt = alt;
            this.title = title;
        }
    }

    const gallery = [];

    // Method for adding images
    gallery.push(new Image(TempImage,'image coming soon', 'temp image title'));

  return (
    <section className="gallery-container">
                <h2 className='section-title'>Gallery</h2>
                {gallery.map((item, index) => (
                    <img 
                    key={index}
                    src={item.src}
                    alt={item.alt}
                    title={item.title}
                    />
                ))}
            </section>
  )
}
