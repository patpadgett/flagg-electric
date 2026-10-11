---
target: flagg-electric.patpadgett.com
total_score: 23
max_score: 36
na_heuristics: 7
p0_count: 2
p1_count: 2
target_identity: "url:https://flagg-electric.patpadgett.com/"
timestamp: 2026-10-10T21-54-48Z
slug: flagg-electric-patpadgett-com
closed: true
---
# Critique: flagg-electric.patpadgett.com

Method: dual-agent (A: sa-0-10be9e7c · B: sa-1-c5b6122e)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Solid — animated stamp, ticking checkboxes, and the mobile call bar all confirm state |
| 2 | Match System / Real World | 3 | Job-ticket vocabulary is native to the trade; "JOB" tag is the one ambiguous term |
| 3 | User Control and Freedom | 3 | Native details/summary, Escape-closable menu, skip link — no dead ends |
| 4 | Consistency and Standards | 2 | The ↗ glyph means "external link" but is used as the call affordance on all three service rows |
| 5 | Error Prevention | 2 | No backend and no form, so little to break; but a dead service tag offers no guidance |
| 6 | Recognition Rather Than Recall | 3 | Everything on the surface is visible; secondary nav is discoverable |
| 7 | Flexibility and Efficiency | n/a | Single-action persuade surface; no task path for accelerators to serve |
| 8 | Aesthetic and Minimalist Design | 2 | 11 first-viewport elements, phone number twice, five 96px headings substituting scale for meaning |
| 9 | Help Users Recognize, Diagnose, Recover from Errors | 3 | No error surface on a static page; FAQ anticipates the common questions |
| 10 | Help and Documentation | 3 | FAQ functions as task-focused help; the surface brief's audience needs nothing more |
| **Total** | | **23/36** | **Acceptable (64%)** |

## Design Specificity Verdict

**LLM assessment**: authored skin, stock guts. The world is genuinely un-portable — engineering-graph ground, thermofax toner blue, red wax pencil, rubber-stamp press, punch-list checkboxes. "FOR LIFE ON THE WATER" as a named audience and the five-town margin strip (Camdenton / Sunrise Beach / Rocky Mount / Laurie / Versailles) are product-specific to a degree no category template achieves. The stamp-press + pencil-draw pair is the best moment on the site: it is meaning-bearing, it is reduced-motion-aware, and it does work a generic template never attempts.

But the thesis is "the paperwork that proves the work exists" (DESIGN.md:11) — and the page supplies none. All four gallery and hero photos are Unsplash stock (DESIGN.md:69), presented under the heading "FIELD NOTES" with the caption "Recent work across the Lake area." Six real Flagg Electric photographs sit unused in `assets/`: dock-day.jpg, dock-fan.jpg, dock-night.jpg, panel.jpg, business-profile.jpg, electrician-box.jpg. A visitor cannot tell this is documentation. At the exact moment the page asks for maximum trust, it offers a generic pier. That is the specificity failure — not the visual language, the evidence.

**Deterministic scan**: 12 findings (detector exit 2). 6 low-contrast (5 advisory, 1 warning), 5 cramped-padding (warning), 1 cream-palette (warning), 1 codex-grid-background (advisory). The detector's color findings are marginal or mis-targeted — see triage below. What the detector caught that the design review missed: the `#6e6759`-on-`#e8e2d0` pair at 4.3:1 on 13px uppercase tags, and one unidentified 1.3:1 hit that needs a source trace. What the design review caught that no detector could: the stock-as-proof credibility reversal, the ↗ glyph semantics, and the deployment gap.

**Visual overlays**: none. Browser injection was not performed in this run (the browser_exec CDP endpoint was unreachable; Assessment B worked around it with direct CDP over a standalone debug port). No user-visible overlay exists. Fallback signal: the mechanical findings above, plus a measured geometric defect — the fixed mobile call bar renders at 61.89px against a 56px `body` padding-bottom, occluding ~45.89px of footer text at the page bottom on a 390px viewport.

## Overall Impression

This is a genuinely ambitious, well-built redesign that has not shipped and cannot be trusted. Two problems outweigh everything else: the live site still serves the September build (every new asset 404s), and the proof section undermines its own argument by presenting stock photography as documentary evidence. Fix those and this is a strong site. The visual world itself is not the problem — it is the best thing about the build.

## What's Working

1. **The stamp-press focal moment.** scale 1.8→0.92→1.0 with mechanical overshoot at 500ms, followed by the wax-pencil underline drawing itself at 700ms. Two motions, one meaning: signing a work order. Correctly reduced-motion-aware — under `prefers-reduced-motion` the stamp lands at final opacity with no scale and the underline appears at full scaleX, meaning preserved and all spatial movement removed.
2. **The trust architecture on mobile.** A fixed orange call bar carries the number at the bottom of every screen, one tap away. For a homeowner with a dead outlet at 9pm, this is the single most valuable element on the page.
3. **The accessibility floor.** Alt text on all six images (with the decorative footer logo correctly `alt=""`), a working skip link, visible 3px focus rings at 4px offset, native `<details>` keyboard operability, and `aria-expanded` handling that closes on Escape and on viewport widening. Five of six mechanical a11y probes pass cleanly.

## Priority Issues

- **[P0] The redesigned build was never deployed.** All six local asset paths 404 on the live URL — `assets/plates/logo-f.png`, `assets/lake-dock-dusk.jpg`, `assets/electrician-panel.jpg`, `assets/lake-dock-calm.jpg`, `assets/lake-sunset.jpg`. The live page serves a completely different five-image set (all 200, all 404-adjacent to the local build) and no favicon at all. Visitors see the old navy/red September build; every hour of the October redesign is invisible to them.
  - **Why it matters**: the work does not exist to anyone but you.
  - **Fix**: push the local tree to the GitHub Pages source branch and verify all six paths return 200.
  - **Suggested command**: `/impeccable audit flagg-electric.patpadgett.com` (it will re-verify the live deployment).

- **[P0] FIELD NOTES presents Unsplash stock as proof of Flagg's work.** The section heading reads "Recent work across the Lake area" over three Unsplash photographs, while six real Flagg Electric photos sit unused in `assets/`.
  - **Why it matters**: this is a credibility reversal at the page's trust peak. A homeowner comparing three contractors who finds out the "recent work" is stock trusts nothing else on the page either.
  - **Fix**: swap the three gallery images and the hero to the real Yelp-sourced photographs already in `assets/`, and keep the photo credit line honest about their source.
  - **Suggested command**: `/impeccable polish flagg-electric.patpadgett.com`

- **[P1] The ↗ glyph means "external link" but is used as the call affordance** on all three service rows (`index.html:71,81,91`). Every sighted user reads that arrow as "this opens a new tab to somewhere else."
  - **Why it matters**: it is the affordance for the page's only conversion action, and it signals the opposite of what it does.
  - **Fix**: replace the arrow with a phone glyph on the three service-row links; keep ↗ only for the genuine external links (BBB, Facebook).
  - **Suggested command**: `/impeccable clarify flagg-electric.patpadgett.com`

- **[P1] The fixed mobile call bar occludes footer text.** Measured: bar height 61.89px against `body{padding-bottom:56px}` (`styles.css:239`) — a 5.89px shortfall that leaves ~45.89px of the last footer line behind the bar at 390px.
  - **Why it matters**: the bar is static padding vs. content-driven height, so the occlusion is structural and varies with font rendering. The last thing on the page is partially unreadable on the device where most of this audience will browse.
  - **Fix**: change the hardcoded 56px to a value derived from the bar's rendered height, or set `padding-bottom:calc(62px + env(safe-area-inset-bottom))`.
  - **Suggested command**: `/impeccable adapt flagg-electric.patpadgett.com`

- **[P2] Eleven first-viewport elements with the phone number appearing twice.** Header phone box, hero CTA with number, three service tags, JOB tag, stamp, three-line headline — all competing in one viewport, before the visitor has decided anything.
  - **Why it matters**: the hero has no single dominant action; the phone number is stated in the header and again 40px below it in the CTA, and the three underlined service tags read as links but are dead markup.
  - **Fix**: make the three service tags plain text with a different treatment than links (they duplicate the WORK ORDER section below), and drop the header phone box on desktop where the hero CTA already carries it.
  - **Suggested command**: `/impeccable distill flagg-electric.patpadgett.com`

## Persona Red Flags

**Jordan (confused first-timer)**: The "JOB" tag is the first thing that fails her — it reads as an unfilled template variable, not a label. Then the three underlined service tags (RESIDENTIAL / COMMERCIAL / DOCK & WATERFRONT) look like links, get tapped, and do nothing. She never reaches a dead end, but she spends her first fifteen seconds learning which parts of the page lie to her.

**Riley (stress tester)**: Riley checks whether the work is real before trusting anything. The FIELD NOTES section answers "recent work across the Lake area" with stock photography — that is a hard stop. Then the ↗ arrow on every service row promises an external destination and delivers a `tel:` link, which is the kind of promise/behavior mismatch he documents and tells people about. He does not call.

**Casey (distracted mobile user)**: On mobile the hero stacks photo-first — so Casey's first screen is a stock dock photo with a script caption, and the company name and the call CTA are below the fold. The thing that should earn the call is the thing she has to scroll for. The fixed call bar partly rescues this, but it occludes the footer text at the bottom of the page.

## Minor Observations

- Five section headings all clamp to 96px on desktop. Identical scale five times in a row means the scale stops carrying meaning — hierarchy comes from contrast, not from everything being loud.
- The ABOUT section restates the hero (home / business / dock, established 2009) under a 96px heading, roughly doubling the time to reach new information.
- `cream-palette` detector hit: the warm paper `#f4f0e4` is a deliberate brand surface shared by both builds, not a lazy default. Not actionable.
- `codex-grid-background` hit on `.hero-grid-bg`: the rule reserves grid overlays for "canvas, map, blueprint, or measurement surfaces" — an electrical contractor's job-ticket hero is a blueprint surface by the rule's own exception. False positive.
- The five `cramped-padding` hits are on full-bleed sections (`work`, `questions`, `contact`, `faq`, `hero-photo`) whose content wrappers carry their own padding. Likely section-vs-wrapper false positives, not confirmable without DOM nesting inspection.
- The 1.3:1 low-contrast warning (`#f4f0e4` on `#e0d5b8`) has no selector or line number and cannot be triaged until the source element is traced. This is the one detector finding that most warrants follow-up.
- The four 4.4:1 and one 4.3:1 contrast misses are real but marginal (0.1–0.2:1 short) and land on small uppercase labels. Two of the six are the same pair counted three times.
- `DESIGN.md:78` claims "remaining findings are false positives or intentional design choices" and that contrast was fixed. That provenance claim is not true of the current state.

## Questions to Consider

- What would this page look like if the four stock photos were replaced with the six real ones already sitting in `assets/` — does the job-ticket thesis finally hold?
- If the phone number appears twice in the first viewport, which instance is doing the work — and what does the other one cost in attention?
- The page never says a word about cost, scope, or how the estimate works. A homeowner calling an electrician is making a trust purchase under uncertainty. Where does that fear get addressed?
- What would a confident version of this hero look like with one action instead of eleven elements?
