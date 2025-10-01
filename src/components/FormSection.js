import React, { useState } from 'react'

function FormSection () {
  const [username, setUsername] = useState('')
  const [mobile, setMobile] = useState('')
  const [purpose, setPurpose] = useState('')
  const [otpSent, setOtpSent] = useState(false)
  const [otp, setOtp] = useState(['', '', '', '', ''])

  const handleSubmit = e => {
    e.preventDefault()
    if (!otpSent) {
      if (!username || !mobile || !purpose) {
        alert('Please fill all fields.')
        return
      }
      setOtpSent(true)
    } else {
      const otpCode = otp.join('')
      if (otpCode.length === 5) {
        alert(
          `OTP Verified! Form Submitted!\nUsername: ${username}\nMobile: ${mobile}\nPurpose: ${purpose}`
        )
        // reset form
        setUsername('')
        setMobile('')
        setPurpose('')
        setOtp(['', '', '', '', ''])
        setOtpSent(false)
      } else {
        alert('Please enter the complete 5-digit OTP.')
      }
    }
  }

  const handleOtpChange = (value, index) => {
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp]
      newOtp[index] = value
      setOtp(newOtp)
      if (value && index < 4) {
        const nextInput = document.getElementById(`otp-${index}`)
        nextInput && nextInput.focus()
      }
    }
  }

  const handleOtpKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`)
      prevInput && prevInput.focus()
    }
  }

  return (
    <section className='form-section'>
      <div className='form-left'>
        <h2 className='heading'>Sign up and Discover Your Cosmic Path</h2>
        <p>
          Unlock the secrets of the stars. By joining our community, you'll gain
          access to personalized insights, daily horoscopes, and exclusive
          articles designed to help you navigate life with the wisdom of the
          cosmos.
        </p>
      </div>
      <div className='form-right'>
        <h3 className='form-title'>Sign Up - It's Free.</h3>
        <form id='signup-form' onSubmit={handleSubmit}>
          {!otpSent && (
            <>
              <div className='form-group'>
                <input
                  type='text'
                  id='username'
                  placeholder='Username'
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className='form-group'>
                <input
                  type='tel'
                  id='mobile-number'
                  placeholder='Mobile Number'
                  value={mobile}
                  onChange={e => setMobile(e.target.value)}
                  required
                />
              </div>
              <div className='form-group'>
                <select
                  id='purpose-select'
                  name='purpose'
                  value={purpose}
                  onChange={e => setPurpose(e.target.value)}
                  required
                >
                  <option value='' disabled>
                    Select Purpose
                  </option>
                  <option value='marriage'>Marriage</option>
                  <option value='kundali'>Kundali</option>
                  <option value='career'>Career</option>
                  <option value='other'>Other</option>
                </select>
              </div>
              <div className='form-group'>
                <button
                  type='button'
                  id='form-submit-btn'
                  onClick={handleSubmit}
                >
                  Send OTP
                </button>
              </div>
            </>
          )}
          {otpSent && (
            <>
              <div
                className='form-group otp-group'
                style={{ display: 'flex', gap: '5px' }}
              >
                {otp.map((digit, idx) => (
                  <input
                    key={idx}
                    id={`otp-${idx}`}
                    type='text'
                    maxLength='1'
                    value={digit}
                    onChange={e => handleOtpChange(e.target.value, idx)}
                    onKeyDown={e => handleOtpKeyDown(e, idx)}
                  />
                ))}
              </div>
              <div className='form-group'>
                <button type='submit' id='form-submit-btn'>
                  Verify OTP
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </section>
  )
}

export default FormSection
