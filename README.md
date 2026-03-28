# vDanix Portfolio

Personal portfolio website for **vDanix** — Full-Stack .NET Developer.

Live: [https://daanixpl.github.io/portfolio/](https://daanixpl.github.io/portfolio/)

## Tech Stack

- **React 19** + **TypeScript** (Vite)
- **CSS** (custom dark theme, CSS Variables)
- **gh-pages** for GitHub Pages deployment

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install dependencies

```bash
npm install
```

### Development server

```bash
npm run dev
```

Open [http://localhost:5173/portfolio/](http://localhost:5173/portfolio/)

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Deploy to GitHub Pages

```bash
npm run deploy
```

This runs `npm run build` (predeploy) and then pushes the `dist/` folder to the `gh-pages` branch.

> **Note:** Make sure the repository is public and GitHub Pages is configured to serve from the `gh-pages` branch in repository Settings → Pages.

## Project Structure

```
portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx / .css
│   │   ├── Hero.tsx / .css
│   │   ├── About.tsx / .css
│   │   ├── Skills.tsx / .css
│   │   ├── Projects.tsx / .css
│   │   ├── Contact.tsx / .css
│   │   └── Footer.tsx / .css
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── vite.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

## License

© 2026 vDanix. All rights reserved.
