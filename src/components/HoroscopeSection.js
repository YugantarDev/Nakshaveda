import React from 'react'

function HoroscopeSection () {
  return (
    <div className='container'>
      {/* Astrologer Modal */}
      <div id='astrologerModal' className='modal'>
        <div className='modal-content'>
          <span className='close-button'>&times;</span>
          <div id='modal-details' className='astro-card'>
            {/* Example static content, will be replaced dynamically by JS */}
            <img src='astrologer-image.jpg' alt='Astrologer Name' />
            <h3>Astrologer Name</h3>
            <p>Specialty / Description</p>
            <p className='comment'>“Personal quote or testimonial.”</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HoroscopeSection
