# Design system

Built using Impeccable, code-led. Redesigned October 2026, replacing the previous navy/flag-red identity. Bolder pass applied October 2026. Animate pass applied October 2026.

## Direction contract

THESIS: The site is a job ticket on graph paper, with the day's work listed as punch-list line items you can check off. Refuses the stock electrician site: van photo hero with "FREE ESTIMATES" badge over equal icon cards.

OWN-WORLD: Engineering-graph ground (pale blue grid on warm manila paper), thermofax toner blue for headings, safety orange for live/action, red wax pencil for emphasis. Component language: line-item rows ruled like a work order, hand-inked margin notes, rubber-stamp marks (rotated, ink-bleed edges), punch-list checkboxes. Phone number set as a stamped job number.

STORY: Visitor understands this is a real working electrical contractor, they do exactly the kind of work needed (home / business / dock), and calling takes one tap. They believe it because the page looks like the paperwork that proves the work exists.

FIRST VIEWPORT: Full-bleed graph-paper job ticket. Left: FLAGG ELECTRIC in toner-blue display type at maximum scale, red-wax circled "EST. 2009" stamp overlapping the heading, "JOB" tag with one-line description, orange CTA button with phone number, service tags below. Right: full-height lake-dock-at-dusk photo bleeding to viewport edge, pencil-script caption. Bottom: ruled margin strip with service-area towns in cursive.

FORM: Position 7 of the grounded candidate list (seed key 1048cabf, direction scope). Raised lines: graph grid is load-bearing structure (from challenger-ikeda-datamatics); one staged reveal motion for the hero only (from challenger-darkroom); hero occupies its whole viewport as one continuous sheet (from assigned Fillmore Handbill).

## Tokens

- Paper `#f4f0e4`: default canvas, header, about section.
- Paper-dark `#e8e2d0`: work gallery, location strip, FAQ background.
- Manila `#e0d5b8`: hero photo fallback.
- Grid `#c8bfa0` / grid-light `#d8d0b8`: graph-paper background lines.
- Toner `#1e3a5f`: headings, contact section, service headings, brand name, header border.
- Orange `#a64619`: primary CTA background, text links, job label, service row hover stripe. Darkened from `#b84e1c` in the October 2026 critique pass so all orange-on-paper text pairs clear WCAG AA 4.5:1 (was 4.45:1).
- Orange-hot `#f08a4e`: accent text on dark backgrounds (contact section, contact phone underline).
- Wax `#a82a22`: "EST. 2009" stamp, "LLC" accent line, BBB proof mark, proof border.
- Pencil `#5a5348`: body text. Pencil-light `#655f52`: secondary text, tags, photo credit. Darkened from `#6e6759` for AA contrast on paper-dark surfaces.
- Ink `#2a2620`: skip-link border.
- Rule `#b8ae94` / rule-dark `#9a9080`: section borders, gallery borders, FAQ separators.

## Typography

- Barlow regular (400) and bold (700), self-hosted. No display face — the world is work-order paperwork, not poster art.
- Display headings: Barlow Bold, uppercase, tight leading (.88-.9), negative tracking (-.03em). Hero title scales to clamp(56px,6.6vw,96px). Section headings use a TWO-TIER system: section labels (WORK ORDER, FIELD NOTES, BEFORE YOU CALL) at clamp(28px,3.2vw,40px) with a rule beneath; statement headings (BASED IN CAMDENTON., LET'S GET YOU CONNECTED.) hold display scale at clamp(44px,6vw,84px). Contact phone to 84px.
- Body: Barlow Regular 16px, line-height 1.55 (prose 1.6 where the measure is wider). The 16px floor holds for every body role; 13-14px is reserved for labels, captions and metadata, never prose.
- Only two weights are used — 400 and 700 — matching exactly the weights the shipped TTFs contain. A `<strong>` inside a 700 parent previously requested weight 900, which Barlow does not ship, so the browser synthesized a fake bold; it is now pinned to 700.
- Metric-matched fallbacks: `'Barlow Fallback'` (Arial, size-adjust 99%) and `'Caveat Fallback'` (Comic Sans MS, size-adjust 69%), both with ascent/descent overrides. Measured by comparing the shipped faces against the fallbacks at the same px size; with them, every section position is pixel-identical whether the web fonts load or fail, so a failed font load no longer reflows the page.
- Hand-inked elements (margin towns, photo caption): Caveat, self-hosted from assets/caveat.ttf (variable weight 400-700), with Segoe Script / Bradley Hand fallback — script face for pencil annotations only. Caveat is shipped under the same SIL OFL as Barlow.

## Motion

Focal moment: rubber-stamp press. The "EST. 2009" circle lands with mechanical overshoot — scale 1.8→0.92→1.0, 500ms, cubic-bezier(0.16,1,0.3,1), 300ms delay. Immediately after, the wax-pencil underline beneath "LLC" draws itself left-to-right via scaleX, 600ms, 700ms delay. The stamp lands first, the pencil follows — the two motions of signing a work order.

Supporting states:
- Service row hover: checkmark ticks from scale(.6) to scale(1) in orange, checkbox border shifts toner→orange. The punch-list item being checked.
- Gallery cards: brief lay-down on scroll — translateY(16px)→0, scale(.97)→1, 500ms, staggered 100ms per card. Photos being placed on the desk.

Reduced motion: stamp lands at final opacity with no scale animation. Underline appears at full scaleX. Gallery cards at opacity 1, no transform. Checkmark hover keeps opacity transition only. All meaning preserved, all spatial movement removed.

## Components

- Header: paper background, logo left, nav center, bordered phone number right (hidden on mobile, bottom bar carries it). Border-bottom 3px toner.
- Hero: viewport-locked (height:calc(100vh - 96px), clamped 560-760px) so the whole ticket — headline, stamp, JOB tag, CTA and the three service tags — fits above the fold at every common laptop size. Verified at 1440x900, 1366x768, 1280x720, 1280x800, 1152x720, 1536x864, 1600x900, 1680x1050 and 1920x1080. Below 1050px the hero unstacks to height:auto. Two-column grid, stamp-mark (92px, 4px border, -12deg, opacity 1) with press animation, "JOB" tag with 3px border, orange CTA with 3px border and drop shadow, photo with pencil caption, scrolling town strip with 3px toner top border. Header and footer brand marks use mix-blend-mode:multiply so the logo's white ground drops out against the paper.
- Services: ruled work-order rows with 34px checkboxes (3px border), hover reveals 5px orange left-stripe and ticking checkmark. Row padding 44px, bottom border 3px.
- Gallery: 3px-bordered figure cards with orange top-stripe on hover, staggered lay-down entrance, asymmetric grid (wide + two square). Images at 380px/460px height.
- Proof: 3px dashed wax border, rotated -1deg, 110px A+ mark, 8px offset frame. Reads as a rubber stamp on paper.
- FAQ: 4px toner top border, 3px row separators, 30px padding, 32px plus icons.
- Contact: toner-blue section, 84px phone number with 4px orange-hot underline, hover color shift.
- Mobile: fixed bottom call bar, hamburger menu with Escape/selection dismissal, all breakpoints verified.

## Layout

- Mobile: ≤760px. Intermediate: ≤1050px. Desktop: 1051px+.
- Section padding: 100px/5% desktop, 70px/5% tablet, 60px/5% mobile.
- Spacing scale: 4px base, `--s1` 4px through `--s10` 100px. Section rhythm uses --s7 (48px) head-to-content and --s8/--s9 (64/80px) column gaps.
- Grid alignment: `.about` uses `align-items:end` so the BBB proof box's bottom edge sits flush with the text block's CTA link (measured 6px); `.questions` uses `align-items:start` so the section label top-aligns with the accordion's first rule; `.contact` uses `align-items:center` because both columns carry equal display weight.
- FAQ heading is static on all breakpoints (a sticky heading pinned at an arbitrary offset rather than holding its place — reverted in the October 2026 layout pass).
- scroll-margin-top:110px on sections so anchor jumps clear the 96px header.
- Hero: min-height calc(100vh - 96px) desktop, stacked on mobile with photo first.

## Imagery

- Hero: dock-night.jpg — covered boat dock at night with warm under-roof lighting, new dock wiring in Rocky Mount (Flagg Electric's own Yelp project photo).
- Gallery: dock-day.jpg (dock wiring, Sunrise Beach), panel.jpg (200-amp panel upgrade), dock-fan.jpg (fan and light at the dock, swim platform).
- Brand mark: business-profile.jpg — Flagg Electric's own flag-pattern logo.
- All photography is Flagg Electric's own project work from their public Yelp gallery. No stock photography. Publication rights still to be confirmed with the business before launch.

## Accessibility

- Skip link, visible focus rings, aria-labels on icon-only links, reduced-motion support, keyboard-operable FAQ, Escape closes mobile menu, semantic heading order, alt text on all images.
- Contrast: all text meets WCAG AA (4.5:1 body, 3:1 large). Tokens tuned to pass.
- Pencil annotations (.pencil) are --pencil #5a5348, NOT --paper: on the manila hero-photo ground --paper measured 1.28:1. Now 5.20:1.
- The EST. 2009 stamp runs at opacity 1, not .85: the 0.85 compositing over paper-dark measured 4.23:1. At full opacity the same wax measures 6.10:1.
- Motion: prefers-reduced-motion removes all spatial movement, preserves opacity and state transitions.

## Provenance

Redesigned October 2026, bolder pass October 2026, animate pass October 2026.

Critique pass October 10, 2026 (score 23/36, two P0s found and both addressed):
- Stock photography replaced with Flagg Electric's own Yelp project photos (the previous hero and gallery were Unsplash stock presented as documentation).
- Orange token darkened `#b84e1c` -> `#a64619` and pencil-light `#6e6759` -> `#655f52` so every text pair clears WCAG AA 4.5:1.
- Service-row arrows changed from the external-link glyph to a phone glyph.
- Mobile call bar padding corrected: static 56px body padding against a 61.9px rendered bar occluded ~46px of footer text; now `calc(70px + env(safe-area-inset-bottom))`, verified 47.7px clearance.
- Section headings reduced from a uniform 96px to clamp(44px,6vw,84px) so scale carries hierarchy.
- FAQ gained a cost question addressing the estimate fear beat.
- Detector: 12 findings -> 8. Remaining: 5 cramped-padding (section-vs-wrapper false positives), 1 cream-palette (deliberate brand surface), 1 grid-background (blueprint surface by the rule's own exception), 1 low-contrast at 1.3:1 (--paper text never co-occurs on manila; false positive).

Second critique pass October 10, 2026 (score 26/28, heuristics 3 and 7 n/a for a Persuade surface; not comparable to the prior 23/36 which used a different applicable set). Three P1s found and all fixed:
- Hero service tags were entirely below the fold on every common laptop viewport (147px below at 1440x900, 249px at 1366x768). Fixed by locking hero height to the viewport with a 560-760px clamp, reducing the hero title from 120px to clamp(56px,6.6vw,96px), and tightening the hero's internal rhythm. Verified above the fold at eleven desktop viewports.
- Five uniform 84px headings still flattened the hierarchy the first pass claimed to fix. Fixed with a genuine two-tier system: section labels at clamp(28px,3.2vw,40px) under a rule, only the two statement headings at display scale.
- Caveat was specified but never shipped, so the signature pencil voice resolved to Segoe Script on Windows and generic cursive everywhere else (a 21.6% width divergence). Fixed by self-hosting Caveat from assets/caveat.ttf. Also removed assets/barlow-condensed.ttf (87KB, referenced by nothing, which made SOURCES.md's Condensed claim false).
Two P2 contrast failures also fixed:
- .pencil at 1.28:1 (--paper on manila) — recolored to --pencil, now 5.20:1.
- .stamp-mark at 4.23:1 from opacity:.85 — opacity removed, now 6.10:1.
Photo credit moved from mid-narrative into the footer as a provenance line. Header and footer logos now use mix-blend-mode:multiply to drop the white ground.
Detector after this pass: 7 local findings (5 cramped-padding false positives disproven by measured computed padding of 100px/72px; cream-palette and codex-grid-background are deliberate world choices). The live-URL scan reports only those two, and both low-contrast findings are gone.

Layout pass October 10, 2026 (structure only, visual world unchanged):
- Established a documented spacing scale (`--s1` 4px through `--s10` 100px, 4px base) replacing one-off pixel values in the grid gaps and row rhythm.
- `.about` changed from `align-items:center` to `end`: the BBB proof box was dead-centered against a 534px text block, leaving 92px of void beneath it. Bottom edges now flush (measured 6px apart).
- `.questions` gained `align-items:start` and its heading lost the default bottom margin: the section label was floating above dead space while the accordion ran 137px lower. Label and first accordion rule now share the same top edge.
- Section-head rhythm tightened: margin-bottom 56px -> 48px, note margin-top 18px -> 14px, service row padding 44px -> 36px, FAQ summary padding 30px -> 26px.
- A sticky FAQ heading was tried and reverted: `position:sticky;top:120px` pinned the label mid-viewport instead of holding its place, and created a 390px dead column.
- Verified: no horizontal overflow at 320/375/390/768/1024/1366/1440; hero CTA and service tags above the fold on desktop; proof box flush on desktop and stacked correctly at 768 and 390; heading/accordion top-aligned on desktop.

Typeset pass October 10, 2026 (typography only, world unchanged):
- Consolidated 39 distinct type treatments down to 29 by unifying redundant body sizes: 15px body copy raised to the 16px floor (proof paragraph, contact location, footer line), and 17px body copy normalised to 16px (about paragraphs, section notes). Line-heights unified so a given body role carries one leading value everywhere.
- Fixed a phantom weight-900: `<strong>` inside the 700 mobile call bar inherited `bolder`, requesting a weight Barlow does not ship, which the browser synthesized with artificial stroke thickening. Now explicitly 700.
- Added metric-matched fallbacks for both faces. size-adjust values were measured, not guessed — a first pass used 97%/88% and measurement showed 99%/69% was correct. Verified: all twelve section positions plus document height are pixel-identical with remote fonts enabled and disabled.
- Detector type scope: 0 findings before and after.

Polish pass October 10, 2026 (refinement only, world unchanged). Prior critique snapshot 2026-10-10T21-54-48Z closed — every Priority Issue it listed was cleared across the preceding passes.
- Added the missing favicon: `assets/favicon.png` derived from the real brand mark, declared as both `icon` and `apple-touch-icon`. The page previously requested no icon at all, so browsers fell back to `/favicon.ico` and logged a 404 on every visit.
- Coherent hover/active states across the whole interaction path: 13 of 27 interactive elements had no transition, so their hover feedback was an instant jump rather than a state change. Nav links, both brand marks, the FAQ inline links, the menu button, the contact phone and the mobile call bar now carry colour/opacity transitions; the hero CTA, service-row buttons and call bar gained `:active` press feedback for touch.
- Detector triage: the `side-tab` finding on `.service-list article::before` is a false positive — the stripe's computed transform at rest is `matrix(1,0,0,0,0,0)` (scaleY 0), so it renders at zero height and only scales in on hover as the punch-list check affordance. The rule reads static CSS and cannot see the animated behaviour.
- Verified clean: 0 failed resources, 0 broken images, 0 missing alt text, no horizontal overflow at 320/390/768/1366/1440, full tab order carries a visible 3px focus ring at every stop, skip link is the first stop, reduced-motion removes all spatial movement while preserving final states, unused-CSS audit found 0 orphaned classes across 51 declared.

Screenshots: qa/redesign-desktop.png, qa/redesign-mobile.png, qa/redesign-mobile-bottom.png (pre-critique), qa/v2-full.png (post-critique desktop), qa/v2-mobile-full.png (post-critique mobile). Previous designs backed up as index-old.html and index-old-redesign.html.
