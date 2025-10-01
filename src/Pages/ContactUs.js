// src/Pages/ContactUs.js
import React from 'react'
import { contactUsData } from '../assets/data/ContactUsData'

function ContactUs () {
  const { title, subTitle, description, contactDetails } = contactUsData

  return (
    <section className='contactus-section'>
      <div className='contactus-content'>
        <span className='contactus-subtitle'>{subTitle}</span>
        <h1 className='contactus-title'>{title}</h1>
        {description.map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}

        <div className='contactus-details'>
          <p>
            <strong>Email:</strong> {contactDetails.email}
          </p>
          <p>
            <strong>Phone:</strong> {contactDetails.phone}
          </p>
          <p>
            <strong>Address:</strong> {contactDetails.address}
          </p>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
