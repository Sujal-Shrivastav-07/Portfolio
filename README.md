
# Portfolio

A dark, terminal-themed personal portfolio — React + Vite + Tailwind CSS,
containerized with a multi-stage Docker build and served via Nginx.

Everything on the page (name, bio, skills, projects, experience) is
**placeholder content** — see [Editing Content](#editing-content) below to
personalize it.

## Features

- 🖥️ Terminal-style hero with a typewriter effect
- 📊 "Commit rail" scroll-tracking side navigation (signature element)
- 🐙 Live GitHub contribution graph (swap in your username)
- 🌓 Dark theme, fully responsive
- 🐳 Dockerized, multi-stage build → Nginx-served static site
- ♿ Accessible: skip link, visible focus states, respects reduced-motion

## Tech Stack

React 18 · Vite 5 · Tailwind CSS 3 · Nginx (production) · Docker / Docker Compose

## Project Structure

```
Portfolio/
├── docker-compose.yml       # single "portfolio" service, port 8080
├── .env.example              # PORT override for docker-compose
└── frontend/
    ├── Dockerfile             # multi-stage: Node build -> Nginx serve
    ├── nginx.conf              # SPA routing, gzip, cache & security headers
    ├── index.html
    ├── public/                 # favicon, robots.txt, resume placeholder
    └── src/
        ├── data/siteData.js    # ALL editable content lives here
        ├── hooks/                # useTypewriter, useScrollProgress, useActiveSection, useScrollReveal
        ├── components/
        │   ├── layout/           # Navbar, Footer, CommitRail
        │   ├── ui/                # SectionHeading, Badge, SocialLinks
        │   └── sections/          # Hero, About, Skills, Projects, Experience, Contact
        ├── App.jsx
        └── main.jsx
```

---

## How to run — exact steps (Docker Desktop)

**Prerequisite:** [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and running.

1. Open a terminal, then clone the repo:
   ```bash
   git clone https://github.com/Sujal-Shrivastav-07/Portfolio.git
   ```
2. Move into the project folder:
   ```bash
   cd Portfolio
   ```
3. (Optional) copy the env file — defaults already work:
   ```bash
   cp .env.example .env
   ```
4. Build and start the container:
   ```bash
   docker compose up --build
   ```
5. Open your browser and go to:
   ```
   http://localhost:8080
   ```
   Your portfolio site will load successfully.

**Where to run each command:** all of the above run from a regular terminal
(PowerShell, Terminal, or the terminal inside VS Code) — **not** inside Docker
Desktop's GUI. Docker Desktop just needs to be open and running in the
background so the `docker` CLI has an engine to talk to. `docker compose up`
will show you the build logs; once you see the container listed as
**Running** (either in this terminal or in Docker Desktop's **Containers**
tab), the site is live at `localhost:8080`.

To stop the container:
```bash
docker compose down
```

To use a different host port, set `PORT` in `.env` before building, e.g. `PORT=3000`.

## Quick Start (local dev, no Docker)

```bash
cd frontend
npm install
npm run dev
```
Visit `http://localhost:5173`.

## Editing Content

Almost everything on the page is driven by **`frontend/src/data/siteData.js`**.
Open that file and replace the placeholders:

- `profile` — name, role, tagline, location, email, GitHub/LinkedIn links
- `about` — bio paragraphs
- `skills` — categorized skill lists
- `projects` — project cards (name, description, tags, link)
- `experience` — roles/timeline entries

No component code needs to change — just edit the data file and rebuild
(`docker compose up --build`) or refresh (`npm run dev`).

## Replacing the Placeholder Resume

`frontend/public/RESUME_PLACEHOLDER.txt` marks where your resume should go.
Add your real file as `frontend/public/resume.pdf` — the Navbar's "Resume"
button already points to `/resume.pdf`, so no code changes are needed.

## Verifying the container

```bash
docker ps                              # confirm the "portfolio" container is running
curl -I http://localhost:8080          # should return HTTP 200
```

## Pushing this project to GitHub

If you're starting from this local folder instead of cloning:

```bash
cd Portfolio
git init
git add .
git commit -m "Initial commit: Portfolio containerized with Docker"
git branch -M main
git remote add origin https://github.com/Sujal-Shrivastav-07/Portfolio.git
git push -u origin main
```

## Notes for the practical report

- **Multi-stage build:** stage 1 (`node:20-alpine`) installs dependencies and
  runs `vite build`; stage 2 (`nginx:alpine`) copies only the built static
  files (`/dist`) into the final image — keeps the shipped image small since
  Node itself isn't in the final layer.
- **Nginx config:** handles SPA routing (`try_files ... /index.html`), gzip
  compression, and basic security headers.
- **Compose orchestration:** one service, mapped to host port `8080` by
  default (overridable via `.env`).



