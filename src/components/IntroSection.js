import React, { useEffect, useRef } from 'react'
import { siteContent } from '../assets/data/content'

function IntroSection () {
  const { intro } = siteContent
  const sectionRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const viewportCenter = window.innerHeight / 2

      if (window.innerWidth <= 768) {
        // MOBILE: strict thresholds
        if (rect.bottom < 0 || rect.top > viewportCenter) {
          // Section above or below threshold: hide
          sectionRef.current.style.opacity = 0.3
          sectionRef.current.style.transform = 'scale(0.8)'
        } else {
          // Section crossed threshold: show fully
          sectionRef.current.style.opacity = 1
          sectionRef.current.style.transform = 'scale(1)'
        }
      } else {
        // DESKTOP: smooth fade
        const elementCenter = rect.top + rect.height / 2
        const distance = Math.abs(viewportCenter - elementCenter)
        const maxDistance = window.innerHeight / 2 + rect.height / 2
        const progress = 1 - Math.min(1, distance / maxDistance)

        const opacity = 0.3 + progress * 0.7
        const scale = 0.8 + progress * 0.2

        sectionRef.current.style.opacity = opacity
        sectionRef.current.style.transform = `scale(${scale})`
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)
    handleScroll() // initial

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return (
    <section
      className='intro-section'
      ref={sectionRef}
      style={{
        opacity: 0.3,
        transform: 'scale(0.8)',
        transition: 'opacity 0.2s ease-out, transform 0.2s ease-out'
      }}
    >
      <div className='intro-section-left'>
        <div className='subheading'>{intro.subheading}</div>
        <h2 className='heading'>{intro.heading}</h2>
      </div>

      <div className='intro-section-right'>
        {intro.paragraphs.map((para, idx) => (
          <p key={idx} style={{ marginBottom: '1em', lineHeight: '1.6' }}>
            {para}
          </p>
        ))}
      </div>
    </section>
  )
}

export default IntroSection
