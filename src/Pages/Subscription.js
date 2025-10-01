import React from 'react'

const packages = [
  {
    title: 'AstroSage Brihat Kundli',
    description: 'What will you get in 250+ pages Colored Brihat Kundli..',
    image:
      'https://cdn.astrosage.com/images/service-images/ic_brihat-horoscope.jpg',
    oldPrice: 2100,
    price: 399,
    link: '/service/astrosage-brihat-horoscope?language=en',
    ribbon: 'offers'
  }
]

const categories = [
  'Instant Reports',
  'Quick Questions',
  'Detailed Reports',
  'AstroSage Cloud',
  'CogniAstro Career Counselling',
  'Puja',
  'Spell'
]

function SubscriptionPage () {
  return (
    <div className='row f-card no-margin-b'>
      {/* Column 1: Single Package */}
      <div className='col s12 m6'>
        <div className='card-panel no-card-margin-t black-text text-darken-4 min-height-490'>
          {packages.map((pkg, idx) => (
            <div key={idx} className='package-item'>
              {pkg.ribbon && (
                <div className='ribbon-1'>
                  <span>{pkg.ribbon}</span>
                </div>
              )}
              <h2 className='f-card-title no-margin-b margin-t-32 center'>
                {pkg.title}
              </h2>
              <p className='center'>{pkg.description}</p>
              <div className='valign-wrapper margin-top-20'>
                <div className='col s6 m8 center'>
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className='responsive-img'
                  />
                </div>
                <div className='col s6 m4 center'>
                  <div className='margin-b'>
                    <p>
                      Price: <strike>₹ {pkg.oldPrice}</strike> ₹ {pkg.price}
                    </p>
                    <br />
                    <a
                      href={pkg.link}
                      className='btn waves-effect amber white-text darken-4'
                    >
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Column 2: Categories */}
      <div className='col s12 m6'>
        <div className='card-panel no-card-margin-t black-text text-darken-4 min-height-490'>
          <div className='body-content'>
            <h2 className='f-card-title truncate'>
              Find the best suitable report for all your problems!
            </h2>
            <p>
              Introducing just 6 categories, AstroSage has made it extremely
              easy for you to get answers of all your problems related to
              health, career, money, education, etc.
            </p>
            <h2 className='f-card-title truncate'>Categories are:</h2>
            <div className='collection margin-t'>
              {categories.map((cat, idx) => (
                <a key={idx} href={`#${idx}`} className='collection-item'>
                  {cat}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubscriptionPage
