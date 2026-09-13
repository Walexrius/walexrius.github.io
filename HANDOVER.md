# Walexrius.github.io — Handover

Paste this file's content (or point Claude at it) at the start of a new session to restore context fast.

## What this is

Kamal Rajkumar Singh's personal portfolio site — plain HTML/CSS/JS, no build step, no framework (intentional, see `AGENTS.md`), deployed via GitHub Pages from `main`. Sibling project to `School_of_MedTech` — shares visual DNA, not a fork.

## Read these first, in order

1. `README.md` — structure, design system, local preview
2. `AGENTS.md` — how the owner wants AI agents to work on this repo: teach first (explain *why*, not just implement), challenge the owner's first proposed solution rather than default-agreeing, stay intentionally simple (no frameworks/build systems without a compelling long-term reason, since the owner is deliberately learning the fundamentals)
3. `Philosophy.md` — personal north-star doc (physician-engineer identity: medicine + biomedical engineering + programming + space, "create more than you consume," reviewed every six months) — thematically linked to the site's PULSE // COMMIT motif

## Current status (as of 2026-09-03, HEAD `1136e3b`)

Working tree at last check had only `.serena/` untracked (editor tooling, not project content). Built and live:

- Full site rebuild with the current design system (done twice — an initial pass then a refinement)
- Circular mascot favicon/nav logo, hero copy/content updates
- Accessibility + SEO metadata improvements (PR #2)
- `AGENTS.md` and `Philosophy.md` added as standalone docs
- Accessibility fixes, GDPR compliance, custom 404 page
- Pulse-line waveform animation polished last: continuous looping, clipped-path bug fixed, heartbeat pace slowed to non-jarring
- Footer social links converted to icons, duplicate contact card dropped

## Open items

- Blog sync (Substack RSS → `posts.json`) — designed, not wired up yet; see "Blog sync (planned)" in `README.md`

## Tooling used directly on this project

- **`/graphify`** run against the full corpus (10 files, ~116k words) → `graphify-out/` (graph.json/html, GRAPH_REPORT.md) — confirmed the site's core hubs (Home Page, AI Collaboration Guide, Contact/Resume pages) and surfaced a non-obvious thematic link between `Philosophy.md` and the PULSE // COMMIT concept
- **Playwright MCP** used for local preview/console verification (logs under `.playwright-mcp/`, dated 2026-08-25)
