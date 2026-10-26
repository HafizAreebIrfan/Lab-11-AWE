# Personal Portfolio Website

A responsive personal portfolio built with **Next.js (App Router)** and **TypeScript**. It showcases my background, skills, projects, and a working contact form.

## Features

- **Home:** hero section with name, introduction, and background image
- **About:** profile picture, bio, key skills, and interests
- **Projects:** project cards (title, description, tags, GitHub and live demo links), statically generated from a local JSON file at build time
- **Contact:** validated form that submits to a Next.js API route, which stores messages in a JSON file
- **Responsive design:** works on mobile, tablet, and desktop, with a collapsible navbar on small screens
- **Styling:** CSS Modules, light theme, accessible focus styles

## Tech Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- CSS Modules
- Node.js `fs` for data reading and message storage

## Folder Structure

```
app/
├── components/        Navbar.tsx, Footer.tsx, ContactForm.tsx
├── data/              site.ts, projects.json, types.ts
├── pages/             AboutPage.tsx, ProjectsPage.tsx, ContactPage.tsx
├── styles/            *.module.css
├── about/page.tsx     route: /about
├── projects/page.tsx  route: /projects
├── contact/page.tsx   route: /contact
├── api/contact/route.ts   POST /api/contact
├── globals.css
├── layout.tsx
└── page.tsx           route: /
public/                hero-bg.svg, profile.svg
```

## Getting Started

```bash
git clone <your-repo-url>
cd portfolio
npm install
npm run dev
```

Open http://localhost:3000.