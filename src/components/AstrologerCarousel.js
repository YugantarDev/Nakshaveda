import React, { useState } from 'react'
import Astro1 from '../assets/images/astrologers/1.jpg'
import Astro2 from '../assets/images/astrologers/1.jpg'
import Astro3 from '../assets/images/astrologers/1.jpg'
import Astro4 from '../assets/images/astrologers/1.jpg'
import Astro5 from '../assets/images/astrologers/1.jpg'

const astrologers = [
  {
    id: 1,
    name: 'Pandit Sharma',
    title: 'Expert in Vedic Astrology',
    image: Astro1
  },
  {
    id: 2,
    name: 'Guru Mehta',
    title: 'Specialist in Numerology',
    image: Astro2
  },
  {
    id: 3,
    name: 'Jyotishi Rao',
    title: 'Tarot and Horoscope Expert',
    image: Astro3
  },
  { id: 4, name: 'Pandit Verma', title: 'Astrology Consultant', image: Astro4 },
  { id: 5, name: 'Guru Kapoor', title: 'Numerology & Horoscope', image: Astro5 }
]

function AstrologerSection () {
  const [index, setIndex] = useState(2) // middle card index

  const next = () => setIndex(prev => (prev + 1) % astrologers.length)
  const prev = () =>
    setIndex(prev => (prev === 0 ? astrologers.length - 1 : prev - 1))

  const getVisibleCards = () => {
    const total = astrologers.length
    const visible = []

    for (let i = -2; i <= 2; i++) {
      const pos = (index + i + total) % total
      visible.push({ ...astrologers[pos], offset: i })
    }

    return visible
  }

  return (
    <section className='astrologer-section'>
      <button className='astro-prev' onClick={prev}>
        &#10094;
      </button>

      <div className='astro-track-container'>
        <div className='astro-track'>
          {getVisibleCards().map(astro => {
            const scale = astro.offset === 0 ? 1 : 0.8
            const zIndex = 5 - Math.abs(astro.offset)
            const translateX = astro.offset * 150 // adjust spacing
            const opacity = astro.offset === 0 ? 1 : 0.5

            return (
              <div
                key={astro.id}
                className='astro-card'
                style={{
                  transform: `translateX(${translateX}px) scale(${scale})`,
                  zIndex,
                  opacity,
                  transition: 'transform 0.3s ease, opacity 0.3s ease'
                }}
              >
                <img src={astro.image} alt={astro.name} />
                <h3>{astro.name}</h3>
                <p>{astro.title}</p>
              </div>
            )
          })}
        </div>
      </div>

      <button className='astro-next' onClick={next}>
        &#10095;
      </button>
    </section>
  )
}

export default AstrologerSection
