// src/components/AboutUs.js
import React from 'react'
import { aboutUsData } from '../assets/data/AboutUsData'
import sampleVideo from '../assets/videos/aboutus/sample.mp4'

function AboutUs () {
  const { title, subTitle, description } = aboutUsData

  return (
    <section className='zwc-banner-inner'>
      <div className='content-wrap bottom-animated middle-animated animated top-animated'>
        <div className='zwc-banner-content'>
          <span className='zwc-text-line'>{subTitle}</span>
          <h1>{title}</h1>
          {description.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      </div>

      <video
        className='zwc-banner-video'
        loop
        muted
        playsInline
        autoPlay
        poster={sampleVideo}
      >
        <source src={sampleVideo} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </section>
  )
}

export default AboutUs
