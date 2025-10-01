// content.js
export const siteContent = {
  hero: {
    title: 'Celestial Compass',
    subtitle: 'Your Guide to the Stars and Beyond'
  },
  intro: {
    subheading: 'WELCOME TO THE COSMOS',
    heading: 'Astrology literally means "The Study of the Stars."',
    paragraphs: [
      'Astrology is an ancient practice that explores the relationships between celestial bodies and human events on Earth. By studying the positions of the planets and stars at the time of your birth, we can create a birth chart to reveal your unique personality, potential, and life path.',
      'Celestial Compass is dedicated to providing you with the insights and guidance you seek. Our mission is to help you understand your place in the universe, empowering you to live a more harmonious and fulfilling life.'
    ]
  },
  cards: [
    {
      icon: '☀️',
      title: 'Your Sun Sign',
      description:
        'The core of your personality and identity. Your Sun sign reflects your fundamental character and ego.',
      url: 'https://example.com/sun-sign',
      readMoreText: 'Read more...'
    },
    {
      icon: '🌙',
      title: 'Your Moon Sign',
      description:
        'Represents your inner world, emotions, and intuition. It reveals your deepest feelings and how you react to life.',
      url: 'https://example.com/moon-sign',
      readMoreText: 'Read more...'
    },
    {
      icon: '⬆️',
      title: 'Your Rising Sign',
      description:
        'This is your astrological mask, representing how you appear to others and your first impressions.',
      url: 'https://example.com/rising-sign',
      readMoreText: 'Read more...'
    },
    {
      icon: '✨',
      title: 'Planetary Transits',
      description:
        'Explore how current planetary movements affect your life, opportunities, and challenges.',
      url: 'https://example.com/planetary-transits',
      readMoreText: 'Read more...'
    }
  ],
  sections: [
    {
      id: 'horoscopes',
      title: 'Daily Horoscopes',
      content:
        'Your daily forecast awaits. Select your zodiac sign for cosmic guidance.'
    },
    {
      id: 'zodiac-profiles',
      title: 'Zodiac Sign Profiles',
      content:
        'Explore the traits, strengths, and challenges of each of the twelve signs. Discover what makes each one unique.'
    },
    {
      id: 'articles',
      title: 'Astrology Blog',
      content:
        'Dive deep into topics like planetary retrogrades, moon phases, and how celestial events impact your life.'
    }
  ]
}
