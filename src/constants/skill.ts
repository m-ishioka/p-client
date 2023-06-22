import apache from './md/apache.md'
import aws from './md/aws.md'
import cakephp from './md/cakephp.md'
import css3 from './md/css3.md'
import docker from './md/docker.md'
import flutter from './md/flutter.md'
import gcp from './md/gcp.md'
import github from './md/github.md'
import html5 from './md/html5.md'
import illustrator from './md/illustrator.md'
import jquery from './md/jquery.md'
import typescript from './md/typescript.md'
import threejs from './md/threejs.md'
import react from './md/react.md'
import nextjs from './md/nextjs.md'
import nestjs from './md/nestjs.md'
import redux from './md/redux.md'
import pug from './md/pug.md'
import tailwindcss from './md/tailwindcss.md'
import sass from './md/sass.md'
import php from './md/php.md'
import symfony from './md/symfony.md'
import laravel from './md/laravel.md'
import smarty from './md/smarty.md'
import wordpress from './md/wordpress.md'
import postgresql from './md/postgresql.md'
import mysql from './md/mysql.md'
import linux from './md/linux.md'
import svn from './md/svn.md'
import nginx from './md/nginx.md'
import xd from './md/xd.md'
import photoshop from './md/photoshop.md'

export const SKILL_LIST = [
  {
    id: 'typescript',
    iconName: 'devicon-typescript-plain',
    name: 'TypeScript ( JavaScript )',
    level: 3,
    experience: 3.5,
    weight: 100,
    projects: ['プロジェクト１', 'プロジェクト２'],
    content: typescript,
  },
  {
    id: 'jquery',
    iconName: 'devicon-jquery-plain',
    name: 'jQuery',
    level: 3,
    experience: 3,
    weight: 30,
    projects: ['プロジェクト１', 'プロジェクト２'],
    content: jquery,
  },
  {
    id: 'threejs',
    iconName: 'devicon-threejs-original',
    name: 'threejs',
    level: 1,
    experience: 0.5,
    weight: 20,
    projects: ['プロジェクト１', 'プロジェクト２'],
    content: threejs,
  },
  {
    id: 'react',
    iconName: 'devicon-react-original',
    name: 'React / ReactNative',
    level: 4,
    experience: 3.5,
    weight: 70,
    projects: ['プロジェクト１', 'プロジェクト２'],
    content: react,
  },
  {
    id: 'nextjs',
    iconName: 'devicon-nextjs-original',
    name: 'Next.js',
    level: 2,
    experience: 2,
    weight: 80,
    projects: ['プロジェクト１', 'プロジェクト２'],
    content: nextjs,
  },
  {
    id: 'nestjs',
    iconName: 'devicon-nestjs-plain',
    name: 'NestJS',
    level: 1,
    experience: 2,
    weight: 30,
    projects: ['プロジェクト１', 'プロジェクト２'],
    content: nestjs,
  },
  {
    id: 'redux',
    iconName: 'devicon-redux-original',
    name: 'redux',
    level: 2,
    experience: 1,
    weight: 50,
    projects: ['プロジェクト１', 'プロジェクト２'],
    content: redux,
  },
  {
    id: 'flutter',
    iconName: 'devicon-flutter-plain',
    name: 'Flutter (Dart)',
    level: 1,
    experience: 1,
    weight: 50,
    projects: ['プロジェクト１', 'プロジェクト２'],
    content: flutter,
  },
  {
    id: 'html5',
    iconName: 'devicon-html5-plain',
    name: 'HTML Living Standard（HTML5）',
    level: 3,
    experience: 4,
    weight: 10,
    projects: ['プロジェクト１', 'プロジェクト２'],
    content: html5,
  },
  {
    id: 'pug',
    iconName: '',
    name: 'pug',
    level: 3,
    experience: 3.5,
    weight: 20,
    projects: ['プロジェクト１', 'プロジェクト２'],
    content: pug,
  },
  {
    id: 'css3',
    iconName: 'devicon-css3-plain',
    name: 'CSS3',
    level: 3,
    experience: 4,
    weight: 20,
    projects: ['プロジェクト１', 'プロジェクト２'],
    content: css3,
  },
  {
    id: 'tailwindcss',
    iconName: 'devicon-tailwindcss-original-wordmark',
    name: 'tailwindcss',
    level: 1,
    experience: 0.5,
    weight: 10,
    projects: ['プロジェクト１', 'プロジェクト２'],
    content: tailwindcss,
  },
  {
    id: 'sass',
    iconName: 'devicon-sass-original',
    name: 'Sass (SCSS記法)',
    level: 3,
    experience: 3.5,
    weight: 80,
    projects: ['プロジェクト１', 'プロジェクト２'],
    content: sass,
  },

  {
    id: 'php',
    iconName: 'devicon-php-plain',
    name: 'PHP',
    level: 3,
    experience: 3.5,
    weight: 80,
    projects: ['プロジェクト１', 'プロジェクト２'],
    content: php,
  },

  {
    id: 'symfony',
    iconName: 'devicon-symfony-original',
    name: 'Symfony',
    level: 2,
    experience: 2,
    weight: 60,
    projects: ['プロジェクト１', 'プロジェクト２'],
    content: symfony,
  },

  {
    id: 'laravel',
    iconName: 'devicon-laravel-plain',
    name: 'Laravel',
    level: 1,
    experience: 1,
    weight: 50,
    projects: ['プロジェクト１', 'プロジェクト２'],
    content: laravel,
  },

  {
    id: 'cakephp',
    iconName: 'devicon-cakephp-plain',
    name: 'CakePHP',
    level: 1,
    experience: 0.5,
    weight: 10,
    projects: ['プロジェクト１', 'プロジェクト２'],
    content: cakephp,
  },

  {
    id: 'smarty',
    iconName: '',
    name: 'Smarty',
    level: 3,
    experience: 3,
    weight: 60,
    projects: ['プロジェクト１', 'プロジェクト２'],
    content: smarty,
  },

  {
    id: 'wordpress',
    iconName: 'devicon-wordpress-plain',
    name: 'wordpress',
    level: 3,
    experience: 3,
    weight: 40,
    projects: ['プロジェクト１', 'プロジェクト２'],
    content: wordpress,
  },
  // {
  //   id: 'eccube',
  //   iconName: '',
  //   name: 'ec-cube',
  //   level: 2,
  //   experience: 1.5,
  //   weight: 50,
  //   projects: ['プロジェクト１', 'プロジェクト２'],
  //   content: eccube,
  // },
  {
    id: 'gcp',
    iconName: 'devicon-googlecloud-plain',
    name: 'GCP (Google Cloud Platform)',
    level: 2,
    experience: 3,
    weight: 80,
    projects: ['プロジェクト１', 'プロジェクト２'],
    content: gcp,
  },
  {
    id: 'aws',
    iconName: 'devicon-amazonwebservices-original',
    name: 'AWS (Amazon Web Service)',
    level: 1,
    experience: 0.5,
    weight: 20,
    projects: ['プロジェクト１', 'プロジェクト２'],
    content: aws,
  },

  {
    id: 'postgresql',
    iconName: 'devicon-postgresql-plain',
    name: 'PostgreSQL',
    level: 2,
    experience: 3,
    weight: 40,
    projects: ['プロジェクト１', 'プロジェクト２'],
    content: postgresql,
  },

  {
    id: 'mysql',
    iconName: 'devicon-mysql-plain',
    name: 'MySQL',
    level: 1,
    experience: 3,
    weight: 40,
    projects: ['プロジェクト１', 'プロジェクト２'],
    content: mysql,
  },

  {
    id: 'docker',
    iconName: 'devicon-docker-plain',
    name: 'Docker',
    level: 1,
    experience: 2,
    weight: 50,
    projects: ['プロジェクト１', 'プロジェクト２'],
    content: docker,
  },

  {
    id: 'linux',
    iconName: 'devicon-linux-plain',
    name: 'linux',
    level: 1,
    experience: 1,
    weight: 20,
    projects: ['プロジェクト１', 'プロジェクト２'],
    content: linux,
  },

  {
    id: 'github',
    iconName: 'devicon-github-original',
    name: 'GitHub',
    level: 2,
    experience: 4,
    weight: 30,
    projects: ['プロジェクト１', 'プロジェクト２'],
    content: github,
  },

  {
    id: 'svn',
    iconName: 'devicon-subversion-original',
    name: 'SVN (Subversion)',
    level: 1,
    experience: 1,
    weight: 10,
    projects: ['プロジェクト１', 'プロジェクト２'],
    content: svn,
  },

  {
    id: 'nginx',
    iconName: 'devicon-nginx-original',
    name: 'nginx',
    level: 2,
    experience: 3,
    weight: 40,
    projects: ['プロジェクト１', 'プロジェクト２'],
    content: nginx,
  },
  {
    id: 'apache',
    iconName: 'devicon-apache-plain',
    name: 'Apache',
    level: 1,
    experience: 3,
    weight: 40,
    projects: ['プロジェクト１', 'プロジェクト２'],
    content: apache,
  },
  {
    id: 'xd',
    iconName: 'devicon-xd-plain',
    name: 'Adobe XD',
    level: 3,
    experience: 4,
    weight: 50,
    projects: ['プロジェクト１', 'プロジェクト２'],
    content: xd,
  },
  {
    id: 'photoshop',
    iconName: 'devicon-photoshop-plain',
    name: 'Adobe Photoshop',
    level: 2,
    experience: 4,
    weight: 30,
    projects: ['プロジェクト１', 'プロジェクト２'],
    content: photoshop,
  },
  {
    id: 'illustrator',
    iconName: 'devicon-illustrator-plain',
    name: 'Adobe illustrator',
    level: 2,
    experience: 4,
    weight: 30,
    projects: ['プロジェクト１', 'プロジェクト２'],
    content: illustrator,
  },
]

export const SKILL_TREE_MAP = SKILL_LIST.map(
  ({ id, name, level, experience, projects, weight }) => ({
    name,
    key: id,
    size: level * (experience + 100) * (projects?.length || 1) * weight,
  })
)

// const _SKILL_LIST = [
//   {
//     name: 'Front End',
//     children: [
//       {
//         name: 'JavaScript / TypeScript',
//         children: [
//           {
//             id: 'typescript',
//             iconName: 'devicon-javascript-plain',
//             name: 'JavaScript',
//             level: 3,
//             experience: 3.5,
//             projects: ['プロジェクト１', 'プロジェクト２'],
//             content:
//               '技術に対する知見や、得意な領域、技術におけるこだわりなど使った際の知見を記述していきます。',
//           },
//           {
//             id: 'typescript',
//             iconName: 'devicon-typescript-plain',
//             name: 'TypeScript',
//             level: 3,
//             experience: 3.5,
//             projects: ['プロジェクト１', 'プロジェクト２'],
//             content:
//               '技術に対する知見や、得意な領域、技術におけるこだわりなど使った際の知見を記述していきます。',
//           },
//         ],
//       },
//       {
//         id: 'html5',
//         iconName: 'devicon-html5-plain',
//         name: 'HTML5',
//         level: 1,
//         experience: 1,
//         projects: ['プロジェクト１', 'プロジェクト２'],
//         content:
//           '技術に対する知見や、得意な領域、技術におけるこだわりなど使った際の知見を記述していきます。',
//       },
//       {
//         id: 'pug',
//         iconName: '',
//         name: 'pug',
//         level: 1,
//         experience: 1,
//         projects: ['プロジェクト１', 'プロジェクト２'],
//         content:
//           '技術に対する知見や、得意な領域、技術におけるこだわりなど使った際の知見を記述していきます。',
//       },
//       {
//         name: 'Frame Work',
//         children: [
//           {
//             id: 'threejs',
//             iconName: 'devicon-threejs-original',
//             name: 'threejs',
//             level: 1,
//             experience: 1,
//             projects: ['プロジェクト１', 'プロジェクト２'],
//             content:
//               '技術に対する知見や、得意な領域、技術におけるこだわりなど使った際の知見を記述していきます。',
//           },
//           {
//             id: 'react',
//             iconName: 'devicon-react-original',
//             name: 'React',
//             level: 4,
//             experience: 3,
//             projects: ['プロジェクト１', 'プロジェクト２'],
//             content:
//               '技術に対する知見や、得意な領域、技術におけるこだわりなど使った際の知見を記述していきます。',
//           },
//           {
//             id: 'react-native',
//             iconName: 'devicon-react-original',
//             name: 'ReactNative',
//             level: 1,
//             experience: 1,
//             projects: ['プロジェクト１', 'プロジェクト２'],
//             content:
//               '技術に対する知見や、得意な領域、技術におけるこだわりなど使った際の知見を記述していきます。',
//           },
//           {
//             id: 'flutter',
//             iconName: 'devicon-flutter-plain',
//             name: 'Flutter (Dart)',
//             level: 1,
//             experience: 1,
//             projects: ['プロジェクト１', 'プロジェクト２'],
//             content:
//               '技術に対する知見や、得意な領域、技術におけるこだわりなど使った際の知見を記述していきます。',
//           },
//           {
//             id: 'next-js',
//             iconName: 'devicon-nextjs-original',
//             name: 'Next.js',
//             level: 1,
//             experience: 1,
//             projects: ['プロジェクト１', 'プロジェクト２'],
//             content:
//               '技術に対する知見や、得意な領域、技術におけるこだわりなど使った際の知見を記述していきます。',
//           },
//           {
//             id: 'tailwindcss',
//             iconName: 'devicon-tailwindcss-original-wordmark',
//             name: 'tailwindcss',
//             level: 1,
//             experience: 1,
//             projects: ['プロジェクト１', 'プロジェクト２'],
//             content:
//               '技術に対する知見や、得意な領域、技術におけるこだわりなど使った際の知見を記述していきます。',
//           },
//         ],
//       },
//     ],
//   },
//   {
//     name: 'Back End',
//     children: [
//       {
//         name: 'language',
//         children: [
//           {
//             id: 'php',
//             iconName: 'devicon-php-plain',
//             name: 'PHP',
//             level: 3,
//             experience: 3,
//             projects: ['プロジェクト１', 'プロジェクト２'],
//             content:
//               '技術に対する知見や、得意な領域、技術におけるこだわりなど使った際の知見を記述していきます。',
//           },
//           {
//             id: 'ruby',
//             iconName: 'devicon-ruby-plain',
//             name: 'Ruby',
//             level: 3,
//             experience: 3,
//             projects: ['プロジェクト１', 'プロジェクト２'],
//             content:
//               '技術に対する知見や、得意な領域、技術におけるこだわりなど使った際の知見を記述していきます。',
//           },
//         ],
//       },
//       {
//         name: 'Frame Work',
//         children: [
//           {
//             id: 'symfony',
//             iconName: 'devicon-symfony-original',
//             name: 'Symfony',
//             level: 1,
//             experience: 1,
//             projects: ['プロジェクト１', 'プロジェクト２'],
//             content:
//               '技術に対する知見や、得意な領域、技術におけるこだわりなど使った際の知見を記述していきます。',
//           },
//           {
//             id: 'nest-js',
//             iconName: 'devicon-nestjs-plain',
//             name: 'NestJS',
//             level: 1,
//             experience: 1,
//             projects: ['プロジェクト１', 'プロジェクト２'],
//             content:
//               '技術に対する知見や、得意な領域、技術におけるこだわりなど使った際の知見を記述していきます。',
//           },
//           {
//             id: 'smarty',
//             iconName: '',
//             name: 'Smarty',
//             level: 1,
//             experience: 1,
//             projects: ['プロジェクト１', 'プロジェクト２'],
//             content:
//               '技術に対する知見や、得意な領域、技術におけるこだわりなど使った際の知見を記述していきます。',
//           },
//           {
//             id: 'laravel',
//             iconName: 'devicon-laravel-plain',
//             name: 'Laravel',
//             level: 1,
//             experience: 1,
//             projects: ['プロジェクト１', 'プロジェクト２'],
//             content:
//               '技術に対する知見や、得意な領域、技術におけるこだわりなど使った際の知見を記述していきます。',
//           },
//           {
//             id: 'cakephp',
//             iconName: 'devicon-cakephp-plain',
//             name: 'CakePHP',
//             level: 1,
//             experience: 1,
//             projects: ['プロジェクト１', 'プロジェクト２'],
//             content:
//               '技術に対する知見や、得意な領域、技術におけるこだわりなど使った際の知見を記述していきます。',
//           },
//           {
//             id: 'wordpress',
//             iconName: 'devicon-wordpress-plain',
//             name: 'wordpress',
//             level: 1,
//             experience: 1,
//             projects: ['プロジェクト１', 'プロジェクト２'],
//             content:
//               '技術に対する知見や、得意な領域、技術におけるこだわりなど使った際の知見を記述していきます。',
//           },
//           {
//             id: 'ec-cube',
//             iconName: '',
//             name: 'ec-cube',
//             level: 1,
//             experience: 1,
//             projects: ['プロジェクト１', 'プロジェクト２'],
//             content:
//               '技術に対する知見や、得意な領域、技術におけるこだわりなど使った際の知見を記述していきます。',
//           },
//         ],
//       },
//     ],
//   },
//   {
//     name: 'Infra / MW',
//     children: [
//       {
//         name: 'db',
//         children: [
//           {
//             id: 'postgressql',
//             iconName: 'devicon-postgresql-plain',
//             name: 'PostgreSQL',
//             level: 1,
//             experience: 1,
//             projects: ['プロジェクト１', 'プロジェクト２'],
//             content:
//               '技術に対する知見や、得意な領域、技術におけるこだわりなど使った際の知見を記述していきます。',
//           },
//           {
//             id: 'mysql',
//             iconName: 'devicon-mysql-plain',
//             name: 'MySQL',
//             level: 1,
//             experience: 1,
//             projects: ['プロジェクト１', 'プロジェクト２'],
//             content:
//               '技術に対する知見や、得意な領域、技術におけるこだわりなど使った際の知見を記述していきます。',
//           },
//         ],
//       },
//       {
//         name: 'Iaas',
//         children: [
//           {
//             id: 'gcp',
//             iconName: 'devicon-googlecloud-plain',
//             name: 'GCP (Google Cloud Platform)',
//             level: 1,
//             experience: 1,
//             projects: ['プロジェクト１', 'プロジェクト２'],
//             content:
//               '技術に対する知見や、得意な領域、技術におけるこだわりなど使った際の知見を記述していきます。',
//           },
//           {
//             id: 'aws',
//             iconName: 'devicon-amazonwebservices-original',
//             name: 'AWS (Amazon Web Service)',
//             level: 1,
//             experience: 1,
//             projects: ['プロジェクト１', 'プロジェクト２'],
//             content:
//               '技術に対する知見や、得意な領域、技術におけるこだわりなど使った際の知見を記述していきます。',
//           },
//         ],
//       },
//       {
//         name: 'MW',
//         children: [
//           {
//             id: 'nginx',
//             iconName: 'devicon-nginx-original',
//             name: 'nginx',
//             level: 1,
//             experience: 1,
//             projects: ['プロジェクト１', 'プロジェクト２'],
//             content:
//               '技術に対する知見や、得意な領域、技術におけるこだわりなど使った際の知見を記述していきます。',
//           },
//           {
//             id: 'apache',
//             iconName: 'devicon-apache-plain',
//             name: 'Apache',
//             level: 1,
//             experience: 1,
//             projects: ['プロジェクト１', 'プロジェクト２'],
//             content:
//               '技術に対する知見や、得意な領域、技術におけるこだわりなど使った際の知見を記述していきます。',
//           },
//         ],
//       },
//       {
//         id: 'docker',
//         iconName: 'devicon-docker-plain',
//         name: 'Docker',
//         level: 1,
//         experience: 1,
//         projects: ['プロジェクト１', 'プロジェクト２'],
//         content:
//           '技術に対する知見や、得意な領域、技術におけるこだわりなど使った際の知見を記述していきます。',
//       },
//       {
//         id: 'linux',
//         iconName: 'devicon-linux-plain',
//         name: 'linux',
//         level: 1,
//         experience: 1,
//         projects: ['プロジェクト１', 'プロジェクト２'],
//         content:
//           '技術に対する知見や、得意な領域、技術におけるこだわりなど使った際の知見を記述していきます。',
//       },
//       {
//         id: 'github',
//         iconName: 'devicon-github-original',
//         name: 'GitHub',
//         level: 1,
//         experience: 1,
//         projects: ['プロジェクト１', 'プロジェクト２'],
//         content:
//           '技術に対する知見や、得意な領域、技術におけるこだわりなど使った際の知見を記述していきます。',
//       },
//       {
//         id: 'svn',
//         iconName: 'devicon-subversion-original',
//         name: 'SVN (Subversion)',
//         level: 1,
//         experience: 1,
//         projects: ['プロジェクト１', 'プロジェクト２'],
//         content:
//           '技術に対する知見や、得意な領域、技術におけるこだわりなど使った際の知見を記述していきます。',
//       },
//     ],
//   },
//   {
//     name: 'Design',
//     children: [
//       {
//         id: 'xd',
//         iconName: 'devicon-xd-plain',
//         name: 'Adobe XD',
//         level: 1,
//         experience: 1,
//         projects: ['プロジェクト１', 'プロジェクト２'],
//         content:
//           '技術に対する知見や、得意な領域、技術におけるこだわりなど使った際の知見を記述していきます。',
//       },
//       {
//         id: 'photoshop',
//         iconName: 'devicon-photoshop-plain',
//         name: 'Adobe Photoshop',
//         level: 1,
//         experience: 1,
//         projects: ['プロジェクト１', 'プロジェクト２'],
//         content:
//           '技術に対する知見や、得意な領域、技術におけるこだわりなど使った際の知見を記述していきます。',
//       },
//       {
//         id: 'illustrator',
//         iconName: 'devicon-illustrator-plain',
//         name: 'Adobe illustrator',
//         level: 1,
//         experience: 1,
//         projects: ['プロジェクト１', 'プロジェクト２'],
//         content:
//           '技術に対する知見や、得意な領域、技術におけるこだわりなど使った際の知見を記述していきます。',
//       },
//       {
//         id: 'ae',
//         iconName: 'devicon-illustrator-plain',
//         name: 'Adobe After Effects',
//         level: 1,
//         experience: 1,
//         projects: ['プロジェクト１', 'プロジェクト２'],
//         content:
//           '技術に対する知見や、得意な領域、技術におけるこだわりなど使った際の知見を記述していきます。',
//       },
//     ],
//   },
// ]

// function makeFlatList(
//   props: typeof _SKILL_LIST | typeof _SKILL_LIST[number]['children']
// ) {
//   let result = []
//   const propsLength = props.length

//   for (let index = 0; index < propsLength; index++) {
//     const prop = props[index]
//     if ('children' in prop) {
//       result = [...result, ...makeFlatList(prop.children)]
//     } else {
//       result.push(prop)
//     }
//   }

//   return result
// }

// function makeTreeMap(
//   props: typeof _SKILL_LIST | typeof _SKILL_LIST[number]['children']
// ) {
//   const result = []
//   const propsLength = props.length

//   for (let index = 0; index < propsLength; index++) {
//     const prop = props[index]
//     if ('children' in prop) {
//       result.push({
//         name: prop.name,
//         children: makeTreeMap(prop.children),
//       })
//     } else {
//       const { key, name, level, experience, projects } = prop
//       result.push({
//         name,
//         key,
//         size: level * experience * (projects?.length || 1),
//       })
//     }
//   }

//   return result
// }

// export const SKILL_LIST = makeFlatList(_SKILL_LIST)

// export const SKILL_TREE_MAP = makeTreeMap(_SKILL_LIST)
