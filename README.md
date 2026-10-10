# Flagg Electric website

Complete responsive static concept for Flagg Electric LLC, Camdenton, Missouri. Built with the Impeccable skill and actual source-attributed business logo/project photos. Navy, white and flag red preserve the real logo’s character; the dock-at-dusk image connects the visual direction to the Lake area.

## Files
- `index.html`, `styles.css`, `script.js`: editable flat source.
- `assets/`: downloaded logo, four real project photographs, self-hosted fonts and font license.
- `Flagg-Electric.html`: self-contained export, with fonts/images/styles/script embedded; double-click to open offline.
- `SOURCES.md`: factual evidence, source URLs and asset rights notes.
- `qa/`: Playwright checks, results and screenshots.
- `PRODUCT.md`, `DESIGN.md`: handoff documentation. `.impeccable/` is development-only context; do not publish it.

## Preview
Open `Flagg-Electric.html` directly, or run `python3 -m http.server 8080` in this directory and open http://localhost:8080. No build, npm install or external font/CDN connection needed. Phone and external source links require the relevant phone app/network.

## Working features
Click-to-call, responsive mobile menu with Escape/selection dismissal, native keyboard-operable FAQ, section navigation, skip link, visible focus, reduced-motion support, mobile call bar. No forms, tracking, fabricated backend or implied 24-hour availability.

## Before publishing
This is an unpublished design, not a commissioned/approved official business website. Confirm permission to reuse public logo and photographs, especially the customer-submitted night photograph. Public accessibility is not a license. See SOURCES.md. Confirm details and BBB rating with the owner. No stock or AI-generated project photos, invented reviews, crew members, license claims or availability promises are present. No business contact or deployment performed.

## Verification
Run `node qa/verify.cjs` with Playwright installed at `/data/pat/node_modules/playwright` and the local server on port 8769. Test matrix: desktop 1440px, mobile 390px and small mobile 320px; image loading, console/page errors, overflow, anchor targets, exact phone links, menu and FAQ behavior. Screenshot visual review is separate from functional tests. Skill’s local mechanical detector is known broken and was not run; parent reviewer may complete an independent finish review.
