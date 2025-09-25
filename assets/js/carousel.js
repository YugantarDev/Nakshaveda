document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('carouselTrack')
  const dotsContainer = document.getElementById('carouselDots')
  const container = document.querySelector('.carousel-container')

  const carouselItems = carouselContent // use global variable
  const totalItems = carouselItems.length
  let currentIndex = 0

  // --- Create slides ---
  carouselItems.forEach(item => {
    let slide
    if (item.type === 'image') {
      slide = document.createElement('img')
      slide.src = item.src
    } else if (item.type === 'video') {
      slide = document.createElement('video')
      slide.src = item.src
      slide.autoplay = false
      slide.loop = true
      slide.muted = true
      slide.controls = false
    }
    track.appendChild(slide)
  })

  const slides = Array.from(track.children)

  // --- Dots ---
  const dots = []
  for (let i = 0; i < totalItems; i++) {
    const dot = document.createElement('button')
    if (i === 0) dot.classList.add('active')
    dot.addEventListener('click', () => moveToSlide(i))
    dotsContainer.appendChild(dot)
    dots.push(dot)
  }

  function updateTrackPosition () {
    const slideWidth = container.clientWidth
    track.style.transition = 'transform 0.5s ease-in-out'
    track.style.transform = `translateX(${-currentIndex * slideWidth}px)`
    updateDots()

    slides.forEach((slide, i) => {
      if (slide.tagName === 'VIDEO') {
        if (i === currentIndex) slide.play()
        else {
          slide.pause()
          slide.currentTime = 0
        }
      }
    })
  }

  function moveToSlide (index) {
    currentIndex = (index + totalItems) % totalItems
    updateTrackPosition()
  }
  function updateDots () {
    dots.forEach((dot, i) => dot.classList.toggle('active', i === currentIndex))
  }
  function moveNext () {
    currentIndex = (currentIndex + 1) % totalItems
    updateTrackPosition()
  }
  function movePrev () {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems
    updateTrackPosition()
  }

  let intervalId = setInterval(moveNext, 3000)
  container.addEventListener('mouseenter', () => clearInterval(intervalId))
  container.addEventListener(
    'mouseleave',
    () => (intervalId = setInterval(moveNext, 3000))
  )

  let startX = 0,
    isDragging = false
  container.addEventListener('touchstart', e => (startX = e.touches[0].clientX))
  container.addEventListener('touchend', e =>
    handleSwipe(startX, e.changedTouches[0].clientX)
  )
  container.addEventListener('mousedown', e => {
    isDragging = true
    startX = e.clientX
  })
  container.addEventListener('mouseup', e => {
    if (!isDragging) return
    isDragging = false
    handleSwipe(startX, e.clientX)
  })
  container.addEventListener('mouseleave', () => (isDragging = false))

  function handleSwipe (start, end) {
    if (start - end > 50) moveNext()
    else if (end - start > 50) movePrev()
  }

  window.addEventListener('resize', () => updateTrackPosition())
  updateTrackPosition()

  // --- Add Chat Button ---
  const chatBtn = document.createElement('button')
  chatBtn.textContent = carouselChatButton.text
  chatBtn.style.position = 'absolute'
  chatBtn.style.bottom = '50px'
  chatBtn.style.left = '50%'
  chatBtn.style.transform = 'translateX(-50%)'
  chatBtn.style.fontSize = carouselChatButton.fontSize
  chatBtn.style.fontFamily = carouselChatButton.fontFamily
  chatBtn.style.color = carouselChatButton.color
  chatBtn.style.backgroundColor = carouselChatButton.backgroundColor
  chatBtn.style.padding = carouselChatButton.padding
  chatBtn.style.borderRadius = carouselChatButton.borderRadius
  chatBtn.style.border = 'none'
  chatBtn.style.cursor = 'pointer'
  chatBtn.style.zIndex = '10'

  chatBtn.addEventListener('click', () => {
    window.open(carouselChatButton.url, '_self')
  })

  container.style.position = 'relative' // make container the positioning context
  container.appendChild(chatBtn)
})
