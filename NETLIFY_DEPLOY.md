# Deploying to Netlify

Steps to deploy this Vite + React app to Netlify:

1. Commit and push your repository to GitHub (or GitLab/Bitbucket).
2. Log in to Netlify and choose "New site from Git".
3. Connect your repository and branch.
4. In the build settings, use these defaults:
   - Build command: `npm run build`
   - Publish directory: `dist`

5. Add the `netlify.toml` file in the project root (already present) — it ensures SPA routing works by redirecting all routes to `index.html`.
6. If you need a specific Node version on Netlify, either set it in `netlify.toml` (see [build.environment]) or add a `.nvmrc` file with the Node version.

Notes:
- This project already includes scripts in `package.json` for `dev`, `build`, and `preview`.
- Netlify will run `npm install` during build. If you use lockfiles (`package-lock.json` or `pnpm-lock.yaml`) Netlify will respect them.

Troubleshooting:
- If you see routing 404s on client-side routes, ensure `netlify.toml` with the redirect rule is present.
- If builds fail due to Node version, pin the Node version either in Netlify site settings or add a `.nvmrc` file.
