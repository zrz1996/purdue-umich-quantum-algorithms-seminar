# Purdue–UMich Quantum Algorithms Seminar

A responsive website for the joint online quantum algorithms seminar hosted by
Purdue University and the University of Michigan.

## Updating seminar details

The schedule and all seminar content live in `app/page.tsx`. Replace the `TBD`
values in the `talks` list and the “Next seminar” card as details are confirmed.

## Local preview

This project requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

## GitHub Pages

Pushing to the `main` branch triggers the included GitHub Pages workflow. In the
repository settings, set **Pages → Build and deployment → Source** to
**GitHub Actions** if it is not selected automatically.
