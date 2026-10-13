# daniel.dev

My portfolio site.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Where things are

- `data/content.ts` holds all the text: intro, projects, client sites, skills, experience, about.
- `public/img/` holds the screenshots. Client images are named `{id}-1.jpg`, `{id}-2.jpg`, and so on, matching the `id` in `content.ts`.
- `components/` has the interactive parts: theme toggle, typed role line, client screenshot viewer, copy email button.
- `app/globals.css` has the light and dark color tokens.

## Deploy

Hosted on Vercel. Every push to `main` on GitHub deploys automatically.

## Built with

Next.js (App Router), TypeScript, and Tailwind CSS, with Claude Code as a pair programmer.
