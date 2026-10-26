import type { SkillGroup } from './types';

// Edit this file to personalise the whole site.
export const site = {
  name: 'Hafiz Areeb',
  title: 'Hafiz Areeb | Portfolio',
  role: 'Software Engineering Student & MERN Stack Developer',
  intro:
    'I build small, fast web apps and I’m learning how to make them better every week. Take a look at what I’ve made.',
  email: 'you@example.com',
  github: 'https://github.com/your-username',
  about: [
    'I’m a computer science student who enjoys turning ideas into working software. I started with C++ and moved to the web because I like seeing my code in front of real people.',
    'Outside of class I contribute to study-group projects, read about how browsers work, and sketch interface ideas on paper before I open an editor.',
  ],
  skills: [
    { group: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'C++', 'SQL'] },
    { group: 'Frameworks', items: ['React', 'Next.js', 'Node.js', 'Express'] },
    { group: 'Tools', items: ['Git & GitHub', 'VS Code', 'Figma', 'Linux'] },
  ] as SkillGroup[],
  interests: ['Web performance', 'Open source', 'Accessibility', 'Cricket', 'Photography'],
};
