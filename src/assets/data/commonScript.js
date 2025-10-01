import { siteContent } from './content' // your content.js
import astrologerData from './astrologers' // your astrologers data

export function initSiteScripts () {
  // ====== Populate Sections ======
  const container = document.querySelector('.container')
  if (container && siteContent) {
    siteContent.sections.forEach(section => {
      const sec = document.createElement('div')
      sec.id = section.id
      sec.classList.add('section')
      sec.innerHTML = `
        <h2 class="section-title">${section.title}</h2>
        <p>${section.content}</p>
      `
      container.appendChild(sec)
    })
  }

  // ====== Scroll Animations ======
  const contentSections = document.querySelectorAll(
    '.intro-section, .cards-container, .form-section, .section'
  )

  function animateSections () {
    requestAnimationFrame(() => {
      contentSections.forEach(section => {
        const rect = section.getBoundingClientRect()
        const viewportCenter = window.innerHeight / 2
        const elementCenter = rect.top + rect.height / 2
        const distance = Math.abs(viewportCenter - elementCenter)
        const maxDistance = window.innerHeight / 2 + rect.height / 2
        const progress = 1 - Math.min(1, distance / maxDistance)

        const scale = 0.85 + progress * 0.15
        const opacity = 0.4 + progress * 0.6

        // directly set without CSS transitions
        section.style.transform = `scale(${scale})`
        section.style.opacity = opacity
      })
    })
  }

  window.addEventListener('scroll', animateSections)
  window.addEventListener('resize', animateSections)
}
