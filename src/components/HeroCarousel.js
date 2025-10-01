import React, { useState, useEffect, useRef } from 'react'
import carouselContent from '../assets/data/carosuelContent'

function HeroCarousel () {
  const [index, setIndex] = useState(0)
  const trackRef = useRef()

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => setIndex(prev => (prev + 1) % carouselContent.length)
  const prevSlide = () =>
    setIndex(prev => (prev === 0 ? carouselContent.length - 1 : prev - 1))

  useEffect(() => {
    const track = trackRef.current
    if (track && track.children.length > 0) {
      const slideWidth = track.children[0].offsetWidth
      track.style.transform = `translateX(-${index * slideWidth}px)`
      track.style.transition = 'transform 0.5s ease-in-out'
    }
  }, [index])

  useEffect(() => {
    carouselContent.forEach(slide => {
      if (slide.type === 'video') {
        const video = document.createElement('video')
        video.src = slide.src
        video.preload = 'auto'
      }
    })
  }, [])

  return (
    <section className='carousel-section hero-carousel'>
      <div className='carousel-container'>
        {/* Slide Track */}
        <div className='carousel-track' ref={trackRef}>
          {carouselContent.map((slide, idx) => (
            <div
              key={idx}
              className={`carousel-slide ${idx === index ? 'active' : ''}`}
            >
              {slide.type === 'image' ? (
                <img src={slide.src} alt={`Slide ${idx + 1}`} />
              ) : (
                <video
                  src={slide.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload='auto'
                  style={{ width: '100%', display: 'block' }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Chat Now Button above dots */}
        <button
          style={{
            position: 'absolute',
            bottom: '50px', // adjust as needed, above the dots
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: '16px',
            fontFamily: 'Roboto, sans-serif',
            color: '#fff',
            backgroundColor: '#000',
            padding: '12px 25px',
            borderRadius: '25px',
            border: 'none',
            cursor: 'pointer',
            zIndex: 10
          }}
        >
          Chat Now
        </button>

        {/* Dots Navigation */}
        <div className='carousel-dots'>
          {carouselContent.map((_, idx) => (
            <button
              key={idx}
              className={idx === index ? 'active' : ''}
              onClick={() => setIndex(idx)}
            />
          ))}
        </div>

        {/* Chat Now Button below dots */}
      </div>
    </section>
  )
}

export default HeroCarousel
