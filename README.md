# Sharan Kumar — React Portfolio

A responsive portfolio website built with React and Vite.

## Sections
- About Me
- Projects
- Skills
- Resume
- Contact

## Development
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

Vite creates an optimized `dist/` folder for production. The build performs bundling, minification and asset optimization. React components are lazy-loaded with `React.lazy()` and `Suspense`; project images use native `loading="lazy"`.

## Deployment — Vercel
1. Push the repository to GitHub.
2. Import the repository in Vercel.
3. Build command: `npm run build`.
4. Output directory: `dist`.
5. Deploy and test the generated URL.
6. Add a custom domain in Vercel's Domains settings if required. HTTPS/SSL is provisioned by the hosting platform for the connected domain.

## Cross-browser and responsive testing
Test the deployed site in Chrome, Edge, Firefox and Safari. Check navigation, form submission, images, lazy-loaded sections and all breakpoints using desktop and mobile device emulation.

## Challenges and solutions
- **Large initial bundle:** used `React.lazy()` for non-critical sections.
- **Image loading:** used local optimized SVG assets with native lazy loading.
- **Mobile navigation:** added a responsive menu and CSS breakpoints.
- **Production performance:** used Vite's production build for minification and asset optimization.

## Repository / deployment link
After creating the GitHub repository and Vercel deployment, add the links below:
- GitHub: `https://github.com/<username>/<repository>`
- Live site: `https://<project>.vercel.app`
