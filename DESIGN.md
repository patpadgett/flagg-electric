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

Animate pass October 11, 2026. Closes the reduced-motion hover displacement run 4 found and that had survived three passes.
- The `@media(prefers-reduced-motion:reduce)` block set `transition-duration:.01ms !important` and `animation-duration:.01ms !important`. It removed **duration**, not **displacement** — a visitor with vestibular sensitivity who hovered any of five rules still got movement, instant but present: `.hero-cta:hover` (translateY −3px), `.service-list a:hover` (scale 1.05), `.service-list article:hover::before` (scaleY 1), `.service-list article:hover .check::after` (scale 1), `.gallery figure:hover::after` (scaleX 1).
- Fixed per the animate reference's rule — remove spatial *travel*, preserve the state change. The block now pins each hover rule to its end state so the feedback lands without moving: `transform:none` on the two element hovers, and `scaleY(1)` / `scale(1)` / `scaleX(1)` on the three pseudo-element hovers, which is where they already go with motion allowed. The pseudo-element end states were already declared in the block, so the hover rules were the only thing left travelling.
- Verified both paths. With motion allowed the authored feedback is intact: `.hero-cta` resolves `matrix(1,0,0,1,0,-3)` (the 3px lift), `.service-list a` `matrix(1.05,0,0,1.05,0,0)`, and all three pseudo-elements reach their end state. Under `prefers-reduced-motion:reduce` every one resolves to `none` or identity — **zero displacement**.
- Animation counts confirm the split: **5 running animations with no-preference, 0 with reduce**, `scroll-behavior` smooth vs auto.
- A measurement note: the CSSOM read that reported this defect in run 4 (walking `cssRules` for `:hover` rules with a transform) returned an impossible zero on a page with five. This pass verified with synthesized `Input.dispatchMouseEvent` hovers reading computed transforms, and cross-checked the no-preference path by forcing the hover rules under a class so they resolve. The CSSOM walk is not a reliable instrument for `:hover` state; synthesized input is.
- Hero fold unchanged at all six viewports (CTA 607 desktop / 746 mobile), no overflow, 0 failed resources.

Typeset pass October 11, 2026 (2nd). Closes the `<h3>` tier collapse run 4 of the critique found.
- `.service-list h3` was 22px below 760px (styles.css:281), identical to `.proof h3` (22px at every width), so on mobile the accreditation heading and the three service item headings rendered at the **same size** — the tier inversion run 3 caught was fixed at desktop (28px vs 22px) and re-created as a flattening at mobile by the responsive override. Now **24px** in the ≤760px block.
- Mobile ladder measured after the fix: 56 / 27.3 / 24 / 22 / 20 / 16 — every level distinct, and the only roles sharing a size are the three section labels, which is correct. Desktop is unchanged: 95.04 / 84 / 40 / 28 / 22 / 20 / 16.
- The 24px value also widens the previously tight 2px step between the 22px `summary` and the 20px body, giving a 2px step in both places rather than one.
- Type-scope detector: 0 findings. Full scan unchanged at 6 (4 measured cramped-padding false positives plus the two committed-world findings). Hero fold unchanged at all six viewports (CTA 607 desktop / 746 mobile); service-row clearance unchanged at −12px; no overflow anywhere.

Harden pass October 11, 2026.
- **The mobile navigation is reachable without JavaScript.** Below 760px `.header nav` was `display:none` and only `.open` — added by script.js — revealed it, so with scripting off or failed the four in-page anchors were permanently unreachable on the device most of this audience uses. On a page whose only conversion path is a phone call that is a real conversion loss, not a theoretical one. The fix is a `js` class: script.js adds it to `<html>` as its first act, and the mobile hiding is scoped to `html.js`, so with scripting off the selectors never match and the nav renders inline with the hamburger suppressed. Verified with `Emulation.setScriptExecutionDisabled(true)`: `<html>` carries no class, nav is `display:flex`, **all 4 links reachable** at 390/320/1440, CTA visible, no overflow, and the hamburger correctly hidden because it cannot do anything.
- **A `<noscript><style>` cannot carry a no-JS fallback.** The first attempt put the override inside `<noscript>`; it silently did nothing. With scripting disabled the browser parses `<noscript>` contents as raw text, so a `<style>` element inside it is never applied as CSS — the DOM shows the element and its innerHTML, but the stylesheet count never increases. The CSS now lives in the real stylesheet. Recorded here because the pattern looks correct and fails invisibly.
- **The sticky header is restored and the scroll offsets now match it.** `.header` was `position:relative` while `.section{scroll-margin-top:110px}` was still calibrated to a 96px sticky header — two constants pointing at each other, so every one of the four nav clicks landed with the wrong offset. The header is `position:sticky;top:0`, which also keeps the phone number permanently reachable, and the mobile block now carries `scroll-margin-top:84px` for the 70px header. Verified: header holds at top 0 after scrolling 600px, scroll-margin reads 110px desktop / 84px mobile.
- `script.js` gained `defer` (it is parser-inserted at end of body, so this is safe and removes a blocking request).
- **Structured data added**, built only from facts already on the record in SOURCES.md — no invented street address, hours or geo, since those are explicitly flagged as unconfirmed and requiring owner approval. `Electrician` JSON-LD with `telephone`, `foundingDate` 2009, the five `areaServed` cities from the hero town strip, a four-item offer catalog matching the service rows, and `sameAs` pointing at the three real profiles. Plus `rel=canonical`, Open Graph type/title/description/url/image, and a `twitter:card`.
- `robots.txt` and `sitemap.xml` added — both were returning 404 on the live host. The sitemap namespace is `http://www.sitemaps.org/schemas/sitemap/0.9`; a first draft used `sitemap.org` without the `s`, which validators reject, and it was corrected before commit.
- Verified after the changes: hero fold unchanged at all six viewports, **all 23 touch targets now meet 44px** (the `.text-link` padding fix from the clarify pass landed), 23-stop tab order with the correct ring at every stop, fonts resolve with zero reflow (docH 4931px identical with fonts on and off), 0 failed resources. The detector dropped from 7 findings to 6 — the `.faq` cramped-padding false positive is gone; the remaining five are measured false positives or the committed world.

Clarify pass October 11, 2026. Closes the two items run 3 of the critique marked STILL FAILING, plus the hero caption it raised as a P1.
- **The arrow-on-a-dialer-link defect is gone, and this time for the right reason.** It survived three critique runs because each prior fix grepped for the `↗` character; the actual defect had been re-expressed as an inline SVG path `M5 12h14…` on `.text-link`, which a character grep cannot see. The icon is removed entirely rather than swapped — "Talk with Flagg Electric" already names the action, so the arrow was decoration on a link that never leaves the page. The `.text-link:hover` `gap:14px→20px` animation existed only to move that arrow, so it is removed too; hover now changes colour alone, and the transition property changed from `gap` to `color` to match.
- **The `↗` glyph is no longer shipped by a system fallback.** It appears 4 times in the markup and FontTools confirms `U+2197` is absent from all three woff2 subsets, so it rendered from whatever the visitor's OS provided — a different arrow shape on every platform. All four occurrences sit on genuine `target="_blank"` external links where the "goes elsewhere" meaning is correct, so they are replaced with the same inline SVG arrow the page already uses, sized 16px and inline with the text. The glyph inventory is now honest: the arrow path appears only on external links, the phone path `M6.6 10.8` only on the four `tel:` links. DESIGN.md's earlier claim that the subsets carry `↗` was false and is corrected here.
- **The hero photo caption moved off the photograph.** "Rocky Mount — / new dock wiring" sat in Caveat 22px at `--pencil` over the night dock photo, separated only by a 1px text-shadow. Measured against the actual pixels: **1.70:1** against the photo's median tone. Every prior contrast pass audited text on the paper grounds and never audited the one text element sitting on an image. The caption is now a sibling of `.hero-photo` inside `.hero-content`, so it rests on `--paper` and measures **6.66:1**. The `.pencil` text-shadow was removed with it — on the paper ground it was decoration muddying the ink. The caption carries the photo's provenance, the same disclosure responsibility as the footer credit.
- Touch targets from run 3's P1 are cleared: `.text-link` 43.7px → **46px** (`padding:12px 0`), `.proof a` 41.2px → **50px** (`padding:21px 4px 4px`, which also fixes the 2px side asymmetry). All 23 interactive elements now meet 44px at 390/375/320.
- Verified: hero fold unchanged at all six viewports (CTA 607 desktop / 746 mobile), no overflow, fonts resolve with zero reflow (fonts-on and fonts-off geometry identical, docH 4931px).

Polish pass October 11, 2026 (final). Two defects survived every prior fix and are now closed.
- **The `.faq` cramped-padding finding was real.** The detector flagged it in the very first scan and every subsequent pass adjudicated it away by measuring the wrong thing — text-to-summary-edge, which is 0px by flex design, instead of text-to-visible-boundary. The `+` glyph genuinely sat **0px** from the `.faq` container edge. `.faq` had `padding:0` and a 4px `border-top`, and its summary is a full-width flex row pushing the glyph to the edge. Now `padding-right:var(--s4)`; the glyph measures **16px** from the visible edge and the question text **30px** from the top border, both clearing the >=8px rule.
- **`<details>` now announces its state.** Heuristic 1 (visibility of system status) had been scored 2 in both critiques for the same reason: `summary::-webkit-details-marker{display:none}` removes the native disclosure triangle and nothing replaced it, so a screen-reader user tabs to a question, presses Enter, the panel opens, and nothing announces the change. `script.js` now mirrors `details.open` onto the summary as `aria-expanded` on a `toggle` listener, initialised at load for all five. Verified with real key events: Enter opens, `aria-expanded` syncs to "true", the `+` rotates to 45deg, and all five stay synced in both directions.
- **A regression this pass introduced and caught:** the first attempt used `padding-right:var(--s3)`, a token the distill pass had just removed. A dangling `var()` resolves to nothing rather than erroring, so the fix silently did nothing and the first probe still read 0px. Changed to `--s4` and swept every `var()` reference against the declared set — 21 declared, 21 referenced, 0 dangling.
- **Detector adjudication, final.** The 5 cramped-padding findings are measured false positives: hero-photo 24px, #work 71px, #questions 71px, #contact 71px — the local scan has no geometry and misattributes each section's own padding to a nearer ancestor. The two remaining findings, cream-palette and codex-grid-background, are the committed world: the paper ground and the graph-paper grid are the job-ticket metaphor itself, declared here and required by the brief.
- Full sweep clean: 12/12 contrast pairs, hero fold at all six viewports (CTA 647 desktop / 746 mobile), 23 touch targets, 23-stop tab order with the correct ring at every stop, 0 failed resources, 0 broken images, 0 orphaned selectors of 52, 0 dangling token references.

Distill pass October 11, 2026. 28 tokens were declared and 8 were never consumed by a single `var()`: `--grid`, `--toner-light`, `--wax-light`, `--rule-dark`, `--s1`, `--s2`, `--s3`, `--s10`. All eight removed; 21 declared, 21 used, 0 orphans. The spacing scale now carries only the six steps that are actually reached (`--s4` through `--s9`) rather than a full 4px ramp that stopped at three.
- Tokenized the two text-bearing hardcoded colours: `.contact p` and `.contact-action>p` each hand-wrote `rgba(244,240,228,.75)`. That is the one alpha value on the page where a wrong number breaks AA rather than merely looking wrong, and it was duplicated. Now `--paper-on-toner`, re-measured at 6.41:1 composited on toner. The remaining hardcoded `rgba()` values are box-shadows, a hover tint, a border and the pencil's text-shadow — all decorative, all exempt from 1.4.11, and each used once, so a token would add a name without removing a duplication.
- `script.js` dereferenced `.menu` and `#navigation` with no null check. The handlers are now wrapped in an `if(menu && navigation)` guard and `closeMenu` returns early if the nav is absent, so a future edit removing either element cannot throw. Menu behaviour re-verified after the change: click toggles (`aria-expanded` false→true, nav gains `.open`), Escape closes and returns focus to the trigger.
- The phone number appears 9 times as a `tel:` href and 6 times as visible text. All 15 are byte-identical, so there is no drift to fix. It was deliberately NOT moved into JavaScript: a no-JS visitor must still be able to call, and the CTA is the page's only conversion path, so the number stays in the HTML. Consistency verified rather than consolidated.
- Every consumer of the changed tokens re-measured after the edit: 10 of 10 contrast pairs pass, hero fold unchanged at all six viewports, 23 touch targets unchanged, 0 orphaned class selectors of 52.

Typeset pass October 11, 2026. Measured role census over every text-bearing element: 27 treatments at desktop and 33 at mobile, against a healthy 8-12. The four defects below are the ones that carried real cost; the rest of the count is legitimate — a Persuade surface with a display hero, a handwriting annotation face and a rubber-stamp mark genuinely needs more than eight roles.
- **The third heading tier is gone.** `.service-list h3` was a flat 36px, only 4px under the 40px section-label ceiling, so within one screen the visitor saw a 40px "WORK ORDER" label and three 36px item headings of near-equal size — the two-tier ladder inverted. Now 28px desktop / 22px mobile, a 12px gap at desktop and 5px at mobile. The ladder reads: 95px hero, 84px statement, 40px label, 28px item, 22px sub-item.
- **The 16px body floor now holds everywhere.** `.photo-credit` carried 111 characters of running prose — the provenance disclosure, the most legally sensitive sentence on the page — at 12px, the smallest type in the stylesheet. Now 14px with line-height 1.5. `.proof a` 12px -> 13px. `.job-desc` 15px -> 16px at mobile, where it carries a 68-character sentence. Every remaining sub-16px value is a label, caption or nav item: `.job-label`, `.cta-label`, `.contact-label`, `.proof-label`, `.hero-tags`, `.menu`, `.footer-links a`, `.header nav`, `.gallery figcaption span`, `.stamp-mark`.
- **The mobile call bar's emphasis works again.** `<strong>` had been pinned to 700 inside an already-700 parent, making the phone number identical in weight to its label — the earlier fix removed a phantom 900 and took the intended emphasis with it. The bar's own weight is now 400 in both the base rule and the 760px override, so the number reads at 700/18px against a 400/13px label. Measured: barWeight 400, strongWeight 700, emphasisWorks true.
- **Reading measure brought inside 45-75ch.** `.about-text p` measured 76ch at desktop (1 over the ceiling) and `.contact p` 76ch; both now carry max-width (62ch / 58ch) and measure 72ch and 68ch. `.contact p` also moved 17px -> 16px, so the section no longer ships two body sizes 40px apart, and both contact paragraphs carry line-height 1.65 to compensate for the translucent paper-on-toner.
- `.contact-phone` line-height .92 -> .9 so the two 84px display roles no longer split into separate treatments on line-height alone.
- Type-scope detector: 0 findings. Reflow proof re-run after the edits: with `--disable-remote-fonts` every section top/height and the document height (4929px) are identical to the fonts-on render.

Optimize pass October 11, 2026 (fonts + responsive images). Baseline measured on the live site under Fast-3G (1.6Mbps/150ms) with 4x CPU throttle: FCP 1668ms, load 3272ms, 1.21MB of assets, LCP not reached within 12s.
- All three faces converted to woff2 and subsetted. Caveat used 27 glyphs of 753 and shipped as a 403KB variable TTF; it is now a 5,328B woff2 keeping exactly the glyphs the page renders (verified: all six annotation strings render, advance widths identical). Barlow regular and bold carry full Latin-1 plus the ↗ glyph — the page needs them for all body copy — at 18,488B and 18,912B, down from 82KB and 86KB. Font payload 572,048B -> 42,728B, a 92.5% reduction. TTF fallbacks remain in the src list for browsers without woff2.
- Images converted to WebP at 80% quality with `<picture>` + `srcset`, JPEG kept as the fallback `src`. Two candidates ship only where the display size genuinely varies: the hero renders 320px on a phone and 953px at 1920 viewport, so 750w and 1200w both earn their place. dock-day and dock-fan display at most 680px, so their 1000w variants were measured as never-selected and removed rather than shipped dead. panel.jpg is 562px natively and displays at 357px — its single 562w candidate is the full native resolution, so upscaling would only add bytes.
- Mobile first load (hero + logo + fonts): 685,308B -> 224,080B, 67% smaller. Desktop full load: 1,192,285B -> 608,774B, 49% smaller. Re-measured on local HTTP: mobile FCP 1668 -> 1464ms, total transfer 439,752 -> 131,864B; desktop load event 38ms with 373,414B.
- Added `rel=preload` for the hero WebP and both Barlow weights — the hero is the LCP candidate and the body face is needed on first paint.
- The metric-matched fallbacks still hold after the format change: re-rendered with `--disable-remote-fonts`, every section top and height plus the document height (4926px) are identical to the fonts-on render, so a failed font load shifts nothing.

Adapt pass October 10, 2026 (mobile hero fold + touch targets).
- The hero photo's `min-height` was a floor, not a cap: the 750x1000 portrait source rendered 520px tall at 390px wide regardless of the declared `34vh`, pushing the CTA to y=1009 on an 844px viewport. Now `height:32vh;min-height:200px;max-height:300px` in the <=760px block (34vh/220/320 at <=1050px). A redundant `.hero-stamp{padding:30px 5% 26px}` reset at the end of the <=760px block was also silently overriding the tighter padding set earlier in the same block — that is the cascade trap this pass fell into first, and it is why the first measurement showed no change at all.
- Service tags now sit above the CTA on mobile (`order:5` / `order:6`), so the "do they do what I need" answer lands before the action. Tags font-size 11px -> 13px; the job line stacks and its label drops its 3px border below 760px.
- Result at true viewports (device-metrics override, not window-size): tags/CTA above the fold at 390x844 (673/743), 375x812 (663/733), 320x740 (640/734), 768x1024 (705/775). Desktop unchanged — CTA at 647 on a 757px fold.
- The service-row button's `margin-top:-56px` pulled the 56px button up into the paragraph above it, a 36px overlap on all three rows. Reduced to -8px, which is now a clean 12px gap.
- Touch targets: 9 of 23 were under 44px. All now meet the minimum via padding rather than visual resize — `.header-phone` 26x26 -> 44x44, `.menu` 36 -> 44, `.text-link` 22 -> 44, `.proof a` 25 -> 44, `.footer-links a` 19-20 -> 44, `details a` -> 44. The `.text-link` at exactly 44px is the floor case.
- Method note: `--window-size` does not set the CSS viewport in this headless build (a 390px launch reported innerWidth 500). Every mobile number above comes from `Emulation.setDeviceMetricsOverride` at a genuine viewport, and transitions are neutralised before any computed-style read.

Audit pass October 10, 2026 (non-text contrast). Three interactive-state colours and the whole border system failed WCAG 1.4.11 (3:1 for non-text UI boundaries) while every text pair already passed — the prior contrast work audited text and stopped there.
- `--rule` #b8ae94 measured 1.94:1 on paper and 1.70:1 on paper-dark. It carries the section-head rule, all three gallery figure borders and all five FAQ separators, i.e. the page's entire information architecture. Replaced with **#8a7f66** (3.47:1 / 3.06:1), a darkening inside the existing warm-neutral family so the job-ticket world is unchanged. `--rule-dark` #9a9080 -> **#7a7058** (3.78:1).
- The 3px focus ring was `--orange-hot` at 2.18:1 on paper, affecting all 23 keyboard stops. Moved to the new **`--orange-deep` #8f3c14** (6.53:1 / 5.74:1). The dark toner contact section keeps `--orange-hot`, which passes at 4.63:1 against toner — one ring colour cannot clear three grounds, so the dark section carries its own override. `.contact-action a:focus-visible .contact-phone` was added so focusing that link does not swap its number to the low-contrast hover colour.
- Three light-ground hovers (`.text-link`, `.proof a`, `details a`) and the hero CTA hover used `--orange-hot` at 2.18:1. All now use `--orange-deep`; the CTA darkens rather than lightens so the paper label stays legible at 6.53:1.
- New token **`--orange-hot-light` #f7b894** for the mobile call bar's 2px top border, which sits on `--orange` and needed 3:1 against it (was 2.41:1).

The graph grid stays at 1.18:1 — pure decoration, exempt from 1.4.11. Verified by real CDP key events: 23 stops, 22 light-ground rings at #8f3c14 and 1 dark-section ring at #f08a4e, every stop `:focus-visible` with an outline present.

Polish pass October 10, 2026 (refinement only, world unchanged). Prior critique snapshot 2026-10-10T21-54-48Z closed — every Priority Issue it listed was cleared across the preceding passes.
- Added the missing favicon: `assets/favicon.png` derived from the real brand mark, declared as both `icon` and `apple-touch-icon`. The page previously requested no icon at all, so browsers fell back to `/favicon.ico` and logged a 404 on every visit.
- Coherent hover/active states across the whole interaction path: 13 of 27 interactive elements had no transition, so their hover feedback was an instant jump rather than a state change. Nav links, both brand marks, the FAQ inline links, the menu button, the contact phone and the mobile call bar now carry colour/opacity transitions; the hero CTA, service-row buttons and call bar gained `:active` press feedback for touch.
- Detector triage: the `side-tab` finding on `.service-list article::before` is a false positive — the stripe's computed transform at rest is `matrix(1,0,0,0,0,0)` (scaleY 0), so it renders at zero height and only scales in on hover as the punch-list check affordance. The rule reads static CSS and cannot see the animated behaviour.
- Verified clean: 0 failed resources, 0 broken images, 0 missing alt text, no horizontal overflow at 320/390/768/1366/1440, full tab order carries a visible 3px focus ring at every stop, skip link is the first stop, reduced-motion removes all spatial movement while preserving final states, unused-CSS audit found 0 orphaned classes across 51 declared.

Screenshots: qa/redesign-desktop.png, qa/redesign-mobile.png, qa/redesign-mobile-bottom.png (pre-critique), qa/v2-full.png (post-critique desktop), qa/v2-mobile-full.png (post-critique mobile). Previous designs backed up as index-old.html and index-old-redesign.html.
