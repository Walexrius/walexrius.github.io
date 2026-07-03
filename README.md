# Kamal Rajkumar Singh — Personal Portfolio

Personal site for Kamal Rajkumar Singh, a medical student at Università
Politecnica delle Marche (Ancona, Italy) working at the intersection of
medicine, biomedical engineering, and computer science.

Plain HTML/CSS/JS, no build step, no framework — deployed via GitHub Pages
from the `main` branch.

## Structure

```
/                   home (hero + highlights)
/resume/            education, experience, skills
/portfolio/         certificates & recognitions, filterable by category
/blog/              writing — auto-synced from Substack (planned)
/contact/           contact form, map, socials
/assets/css/        shared stylesheet
/assets/js/         shared script (nav toggle, portfolio filter)
/assets/            images and certificate files
```

## Design system

- Neutral base (white / near-black) with a single violet accent (`#5b4fe9`)
- Type: Space Grotesk (display), Inter (body), IBM Plex Mono (data/labels)
- Signature motif: a pulse-line that doubles as a "commit log" — the
  medicine/technology overlap the whole site is built around

## Blog sync (planned)

Blog and YouTube sections are designed to sync at build time via a scheduled
GitHub Action that reads the relevant RSS feeds and writes a small JSON file
the pages read from — no API keys, no third-party proxy service. Not wired
up yet; the empty state on `/blog/` explains this.

## Local preview

No build tools required — open `index.html` directly, or serve the folder
with any static file server, e.g.:

```bash
python3 -m http.server 8000
```

## License

MIT — see [LICENSE](./LICENSE).
