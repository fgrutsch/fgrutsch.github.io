// gitprofile.config.js

const config = {
  github: {
    username: 'fgrutsch', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
    include: {
      repos: ['emergence', 'pekko-persistence-mapdb', 'sbt-swagger-ui'],
    },
  },
  social: {
    linkedin: 'fgrutsch',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://fgrutsch.github.io',
    phone: '',
    email: '',
  },
  resume: {
    fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Kotlin',
    'Kotlin Multiplatform',
    'Scala',
    'Java',
    'Micronaut',
    'Play Framework',
    'Akka',
    'PostgreSQL',
    'Kafka',
    'Gradle',
    'SBT',
    'React.js',
    'CSS',
    'Git',
    'Docker',
    'Kubernetes',
    'AWS',
    'Digital Ocean',
    'Hetzner',
  ],
  experiences: [
    {
      company: 'Lovely Systems',
      position: 'Senior Backend Developer',
      from: 'December 2022',
      to: 'Present',
      companyLink: 'https://lovelysystems.com',
    },
    {
      company: 'Randancy DACH',
      position: 'Senior Backend Developer',
      from: 'August 2016',
      to: 'November 2022',
      companyLink: 'https://firstbird.com',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'University of Applied Sciences Technikum Wien',
      degree: 'BSc',
      from: '2013',
      to: '2016',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'light',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: ['light', 'dark'],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
