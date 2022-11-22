import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './HeroCarousel.module.scss'
import IconArrowBack from '../IconArrowBack/IconArrowBack';
import IconArrowForward from '../IconArrowForward/IconArrowForward';

export default function HeroCarousel() {
  const slides = [
    '/images/hero/hero-01.jpg',
    '/images/hero/hero-02.jpg',
    '/images/hero/hero-03.jpg',
    '/images/hero/hero-04.jpg',
    '/images/hero/hero-05.jpg',
  ];
  const [activeSlide, setActiveSlide] = useState(0);  

  const updateSlides = (slide: number) => {
    if(slide < 0) {
      setActiveSlide(slides.length - 1);
    } else if (slide >= slides.length) {
      setActiveSlide(0);
    } else {
      setActiveSlide(slide);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      updateSlides(activeSlide + 1);
    }, 5000);
    return () => {
      if(interval) { 
        clearInterval(interval);
      }
    }
  })

  return (
    <div className={styles.carousel}>
      {slides.map((slide, index) => {
        return (
          <div key={index} className={`${styles.slideWrapper} ${activeSlide === index ? `${styles.current}` : ''}`}>
            <Image src={slide} alt="" fill sizes="(max-width: 700px) 100vw, 700px" />
          </div>
        )
      })}
      <button 
        type="button" 
        className={styles.btnPrev}
        aria-label="Previous Slide"
        onClick={() => {updateSlides(activeSlide - 1)}}
      >
        <IconArrowBack/>
      </button>
      <button 
        type="button" 
        className={styles.btnNext}
        aria-label="Next Slide"
        onClick={() => {updateSlides(activeSlide + 1)}}
      >
        <IconArrowForward/>
      </button>
    </div>
  )
}