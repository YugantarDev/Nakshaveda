// Hero.js
import React, { useEffect, useRef } from 'react'
import HeroCarousel from './HeroCarousel'
import { siteContent } from '../assets/data/content' // adjust path if needed

function Hero () {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current || !titleRef.current || !subtitleRef.current) return
      const scrollPosition = window.scrollY
      const heroHeight = heroRef.current.offsetHeight

      const scaleValue = Math.max(0.5, 1 - scrollPosition / (heroHeight * 0.7))
      const opacityValue = Math.max(0, 1 - scrollPosition / (heroHeight * 0.7))

      titleRef.current.style.transform = `scale(${scaleValue})`
      titleRef.current.style.opacity = opacityValue
      subtitleRef.current.style.transform = `scale(${scaleValue})`
      subtitleRef.current.style.opacity = opacityValue
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll) // recalc on resize

    // initial call
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return (
    <section id='home' className='hero' ref={heroRef}>
      {/* Carousel */}
      <HeroCarousel />

      {/* Hero Content */}
      <div className='hero-content'>
        <h1 className='hero-title' ref={titleRef}>
          {siteContent.hero.title}
        </h1>
        <p className='hero-subtitle' ref={subtitleRef}>
          {siteContent.hero.subtitle}
        </p>
      </div>
    </section>
  )
}

export default Hero
