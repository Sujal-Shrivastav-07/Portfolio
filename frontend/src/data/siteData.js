// ============================================================
// EDIT THIS FILE to personalize the portfolio.
// Every piece of text on the page comes from here.
// ============================================================

export const profile = {
  name: 'Your Name',
  role: 'Full-Stack Developer',
  tagline: 'I build things for the web — from a REST API to the pixel that calls it.',
  location: 'Ahmedabad, India',
  email: 'you@example.com',
  github: 'https://github.com/your-username',
  linkedin: 'https://linkedin.com/in/your-username',
  resumeUrl: '/resume.pdf',
};

export const about = {
  paragraphs: [
    "I'm a student developer who likes turning ideas into working software — usually starting from a blank terminal and a strong opinion about folder structure.",
    'Comfortable across the stack: React on the front, Node/Express on the back, Docker to ship it, and Git to keep the history honest.',
  ],
};

export const skills = [
  { category: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'Java'] },
  { category: 'Frontend', items: ['React', 'Tailwind CSS', 'Vite'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'REST APIs'] },
  { category: 'DevOps', items: ['Docker', 'Docker Compose', 'Git', 'GitHub Actions'] },
];

export const projects = [
  {
    id: 'proj-1',
    name: 'Task-API',
    description: 'A containerized REST API for task management, with a lightweight frontend, built with Express and Docker Compose.',
    tags: ['Node.js', 'Express', 'Docker'],
    link: 'https://github.com/your-username/Task-API',
  },
  {
    id: 'proj-2',
    name: 'Portfolio',
    description: 'This site — a Dockerized React + Vite + Tailwind portfolio served through Nginx.',
    tags: ['React', 'Vite', 'Tailwind', 'Docker'],
    link: 'https://github.com/your-username/Portfolio',
  },
  {
    id: 'proj-3',
    name: 'Project Three',
    description: 'Placeholder — swap in a real project, its stack, and a link once you have one to show.',
    tags: ['Swap', 'Me', 'Out'],
    link: '',
  },
];

export const experience = [
  {
    id: 'exp-1',
    role: 'Student Developer',
    org: 'Silver Oak University',
    period: '2024 — Present',
    summary: 'Coursework and practicals across DevOps, containerization, and mobile/web application development.',
  },
  {
    id: 'exp-2',
    role: 'Placeholder Role',
    org: 'Placeholder Company',
    period: 'Month Year — Month Year',
    summary: 'Swap this entry for a real internship or project role once you have one.',
  },
];

// Sections that make up the "commit rail" navigation, in order.
// Each id must match the id of a <section> in the page.
export const sections = [
  { id: 'hero', label: 'root' },
  { id: 'about', label: 'about' },
  { id: 'skills', label: 'skills' },
  { id: 'projects', label: 'projects' },
  { id: 'experience', label: 'experience' },
  { id: 'contact', label: 'contact' },
];
