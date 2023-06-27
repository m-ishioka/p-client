export const SKILL_LIST = [
  {
    id: 'typescript',
    name: 'TypeScript ( JavaScript )',
    level: 3,
    experience: 3.5,
    weight: 100,
  },
  {
    id: 'jquery',
    name: 'jQuery',
    level: 3,
    experience: 3,
    weight: 30,
  },
  {
    id: 'threejs',
    name: 'threejs',
    level: 1,
    experience: 0.5,
    weight: 20,
  },
  {
    id: 'react',
    name: 'React / ReactNative',
    level: 4,
    experience: 3.5,
    weight: 70,
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    level: 2,
    experience: 2,
    weight: 80,
  },
  {
    id: 'nestjs',
    name: 'NestJS',
    level: 1,
    experience: 2,
    weight: 30,
  },
  {
    id: 'redux',
    name: 'redux',
    level: 2,
    experience: 1,
    weight: 50,
  },
  {
    id: 'flutter',
    name: 'Flutter (Dart)',
    level: 1,
    experience: 1,
    weight: 50,
  },
  {
    id: 'html5',
    name: 'HTML Living Standard（HTML5）',
    level: 3,
    experience: 4,
    weight: 10,
  },
  {
    id: 'pug',
    name: 'pug',
    level: 3,
    experience: 3.5,
    weight: 20,
  },
  {
    id: 'css3',
    name: 'CSS3',
    level: 3,
    experience: 4,
    weight: 20,
  },
  {
    id: 'tailwindcss',
    name: 'tailwindcss',
    level: 1,
    experience: 0.5,
    weight: 10,
  },
  {
    id: 'sass',
    name: 'Sass (SCSS記法)',
    level: 3,
    experience: 3.5,
    weight: 80,
  },

  {
    id: 'php',
    name: 'PHP',
    level: 3,
    experience: 3.5,
    weight: 80,
  },

  {
    id: 'symfony',
    name: 'Symfony',
    level: 2,
    experience: 2,
    weight: 60,
  },

  {
    id: 'laravel',
    name: 'Laravel',
    level: 1,
    experience: 1,
    weight: 50,
  },

  {
    id: 'cakephp',
    name: 'CakePHP',
    level: 1,
    experience: 0.5,
    weight: 10,
  },

  {
    id: 'smarty',
    name: 'Smarty',
    level: 3,
    experience: 3,
    weight: 60,
  },

  {
    id: 'wordpress',
    name: 'wordpress',
    level: 3,
    experience: 3,
    weight: 40,
  },
  {
    id: 'gcp',
    name: 'GCP (Google Cloud Platform)',
    level: 2,
    experience: 3,
    weight: 80,
  },
  {
    id: 'aws',
    name: 'AWS (Amazon Web Service)',
    level: 1,
    experience: 0.5,
    weight: 20,
  },

  {
    id: 'postgresql',
    name: 'PostgreSQL',
    level: 2,
    experience: 3,
    weight: 40,
  },

  {
    id: 'mysql',
    name: 'MySQL',
    level: 1,
    experience: 3,
    weight: 40,
  },

  {
    id: 'docker',
    name: 'Docker',
    level: 1,
    experience: 2,
    weight: 50,
  },

  {
    id: 'linux',
    name: 'linux',
    level: 1,
    experience: 1,
    weight: 20,
  },

  {
    id: 'github',
    name: 'GitHub',
    level: 2,
    experience: 4,
    weight: 30,
  },

  {
    id: 'svn',
    name: 'SVN (Subversion)',
    level: 1,
    experience: 1,
    weight: 10,
  },

  {
    id: 'nginx',
    name: 'nginx',
    level: 2,
    experience: 3,
    weight: 40,
  },
  {
    id: 'apache',
    name: 'Apache',
    level: 1,
    experience: 3,
    weight: 40,
  },
  {
    id: 'xd',
    name: 'Adobe XD',
    level: 3,
    experience: 4,
    weight: 50,
  },
  {
    id: 'photoshop',
    name: 'Adobe Photoshop',
    level: 2,
    experience: 4,
    weight: 30,
  },
  {
    id: 'illustrator',
    name: 'Adobe illustrator',
    level: 2,
    experience: 4,
    weight: 30,
  },
]

export const SKILL_TREE_MAP = SKILL_LIST.map(
  ({ id, name, level, experience, weight }) => ({
    name,
    key: id,
    size: level * (experience + 100) * weight,
  })
)
