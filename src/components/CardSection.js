// CardSection.js
import React, { useEffect, useRef } from 'react'
import { siteContent } from '../assets/data/content' // adjust path if needed

function CardSection () {
  const { cards } = siteContent
  const cardRefs = useRef([])

  useEffect(() => {
    let viewportHeight = window.innerHeight

    const animateCards = () => {
      cardRefs.current.forEach(card => {
        if (!card) return
        const rect = card.getBoundingClientRect()
        const cardCenter = rect.top + rect.height / 2
        const viewportCenter = viewportHeight / 2

        if (rect.bottom < 0 || rect.top > viewportHeight) {
          // Off-screen
          card.style.transform = `perspective(1000px) translateY(40px) rotateX(-90deg) rotateY(-45deg) rotateZ(-45deg)`
          card.style.transition = 'transform 0.3s ease-in-out'
          card.style.opacity = 0
          return
        }

        let progress =
          cardCenter > viewportCenter
            ? Math.min((viewportHeight - cardCenter) / (viewportHeight / 2), 1)
            : 1
        progress = Math.max(progress, 0)

        const rotateX = -90 * (1 - progress)
        const rotateY = -45 * (1 - progress)
        const rotateZ = -45 * (1 - progress)
        const translateY = 40 * (1 - progress)
        const opacity = 0.3 + progress * 0.7

        card.style.transform = `perspective(1000px) translateY(${translateY}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`
        card.style.transition = 'transform 0.3s ease-out'
        card.style.opacity = opacity
      })
    }

    // Initial animation
    animateCards()

    const handleScrollResize = () => {
      viewportHeight = window.innerHeight
      animateCards()
    }

    window.addEventListener('scroll', handleScrollResize)
    window.addEventListener('resize', handleScrollResize)

    return () => {
      window.removeEventListener('scroll', handleScrollResize)
      window.removeEventListener('resize', handleScrollResize)
    }
  }, [])

  return (
    <section className='card-section'>
      <div className='cards-container'>
        {cards.map((card, idx) => (
          <div
            key={idx}
            className='card'
            ref={el => (cardRefs.current[idx] = el)}
            style={{
              transition: 'transform 0.3s ease-out, opacity 0.3s ease-out',
              transform:
                'perspective(1000px) translateY(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)',
              opacity: 1
            }}
          >
            <div className='card-icon'>{card.icon}</div>
            <h3 className='card-title'>{card.title}</h3>
            <p className='card-description'>{card.description}</p>
            <button
              className='card-readmore'
              onClick={() => window.open(card.url, '_blank')}
            >
              {card.readMoreText}
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CardSection
