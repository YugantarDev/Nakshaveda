import React, { useState, useEffect } from 'react'

function StickyContent () {
  const [active, setActive] = useState(false)

  useEffect(() => {
    // Show sticky form after 200ms
    const timer = setTimeout(() => setActive(true), 200)
    return () => clearTimeout(timer)
  }, [])

  const handleJoinClick = () => {
    setActive(false) // hide the form
    alert('Thanks for joining!')
  }

  return (
    <div id='stickyForm' className={`sticky-form ${active ? 'active' : ''}`}>
      <img
        id='stickyImage'
        src='./assets/images/astrologers/1.jpg'
        alt='Astrologer'
      />
      <p>Click to discover about yourself</p>
      <button id='stickyJoinBtn' onClick={handleJoinClick}>
        Join
      </button>
    </div>
  )
}

export default StickyContent
