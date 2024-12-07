import React, { useState } from 'react'
import './Gallery.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import TempImage from '../assets/images/ComingSoon-project-image.png';

import Image1 from '../assets/images/ComingSoon-project-image.png';


export default function Gallery() {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);

    class Image {
        constructor(src, alt, title) {
            this.src = src;
            this.alt = alt;
            this.title = title;
        }
    }

    const gallery = [
        new Image(TempImage,'image coming soon', 'temp image title'),
        new Image(TempImage,'image coming soon', 'temp image title'),
    ];

    const openLightbox = (index) => {
        setCurrentImage(index);
        setLightboxOpen(true);
    };
    

  return (
    <section className="gallery-container">
                <h2 className='section-title'>Gallery</h2>
                <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    loop={true}
                    className='gallery-swiper'>
                {gallery.map((item, index) => (
                    <SwiperSlide 
                    key={index}
                    className='gallery-item'>
                    
                    <img 
                        src={item.src}
                        alt={item.alt}
                        title={item.title}
                        className='gallery-image'
                        onClick={() => openLightbox(index)}
                        style={{ cursor: 'pointer' }} 
                        />
                </SwiperSlide>
                ))}
                </Swiper>

                {lightboxOpen && (
                    <Lightbox
                    open={lightboxOpen}
                    close={() => setLightboxOpen(false)}
                    slides={gallery.map(item => ({
                        src: item.src, alt: item.alt
                    }))}
                    index={currentImage}
                    styles={{
                        container: { backgroundColor: 'rgba(0, 0, 0, 0.8)' },
                        caption: { color: '#fff' },
                    }}
                    />
                )}
                
            </section>
  )
}
