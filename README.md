# Ricardo Cunha - Professional Portfolio

Modern professional portfolio for Ricardo Dantas Cunha, focused on Software Development, Backend Engineering, APIs, automation, AI integrations and cloud systems.

## Preview

![Portfolio social preview](./public/og-preview.svg)

## Tech Stack

- React
- TypeScript
- Vite
- Lucide React
- CSS with design tokens and responsive layouts
- GitHub Pages deployment through GitHub Actions

## Architecture

The portfolio is a single-page React application. Professional content is centralized in `src/data/portfolio.ts`, making it easier to update experience, stack, projects, case studies, education and language data without editing layout code.

```text
.
├── public/
│   ├── Ricardo-Dantas-Cunha-CV.pdf
│   ├── favicon.svg
│   ├── og-preview.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   ├── data/
│   ├── styles/
│   ├── App.tsx
│   └── main.tsx
├── .github/workflows/deploy.yml
├── index.html
├── package.json
├── tsconfig*.json
└── vite.config.ts
```

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

The generated production files are written to `dist/`.

## Preview Build

```bash
npm run preview
```

## Deploy

This repository is configured for GitHub Pages using `.github/workflows/deploy.yml`.

1. Push changes to `main`.
2. In the GitHub repository settings, set Pages source to GitHub Actions if it is not already enabled.
3. The workflow builds the Vite app and publishes the `dist/` folder.

The Vite base path is configured as:

```ts
base: "/Cunha-Ricardo-github.io-Portifolio/"
```

That keeps assets working when the site is served from the repository path on GitHub Pages.

## Content Sources

Portfolio content was rebuilt from Ricardo's curriculum and public GitHub repositories. No unverified companies, technologies or results were added.
