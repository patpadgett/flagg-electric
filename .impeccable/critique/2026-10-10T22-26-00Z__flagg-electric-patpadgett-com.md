---
target: flagg-electric.patpadgett.com
total_score: 25
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 2
target_identity: "url:https://flagg-electric.patpadgett.com/"
closed: true
---

# Critique: flagg-electric.patpadgett.com (re-critique)

Method: dual-agent (A: sa-0-cc5bd8f3 · B: sa-1-2d3b7b58)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | `<details>` announces no open/closed state to assistive tech — native triangle removed, no aria-expanded |
| 2 | Match System / Real World | 4 | Job ticket, punch list, work order, rubber stamp — the entire mental model is the customer's own paperwork |
| 3 | User Control and Freedom | 3 | Escape closes the menu and returns focus; no back-to-top below the footer brand mark |
| 4 | Consistency and Standards | 3 | Valid heading order, but a third undocumented heading tier at 36px and two glyphs for one action (call) |
| 5 | Error Prevention | 2 | All 9 tel: links share one literal — a typo propagates to nine call paths at once |
| 6 | Recognition Rather Than Recall | 3 | Plain nav labels, but the two highest-value reassurance answers are collapsed by default |
| 7 | Flexibility and Efficiency | n/a | Persuade surface: no expert path, no repeat user |
| 8 | Aesthetic and Minimalist Design | 3 | Two-tier heading fix genuinely worked; phone still twice above the fold |
| 9 | Error Recovery | 2 | The site has exactly one action and it can silently no-op on a desktop with no telephony handler |
| 10 | Help and Documentation | n/a | Persuade surface: no help subsystem; the FAQ is content, not documentation |
| **Total** | | **25/32** | **Acceptable (78%)** |

## Adjudication — prior Priority Issues

| # | Prior issue | Verdict | Evidence |
|---|---|---|---|
| P0-1 | Redesigned build never deployed; six asset paths 404 | RESOLVED | Live HTML/CSS/JS byte-identical to local (md5 verified); 11 resources, all 200 |
| P0-2 | FIELD NOTES presented Unsplash stock as proof | RESOLVED | Zero "unsplash" occurrences; all five images byte-identical to the recorded Yelp/BBB downloads; footer carries a provenance line |
| P1-3 | External-link glyph was the call affordance | RESOLVED, BUT RELOCATED | All three service rows now carry the phone glyph. The arrow survives in one place: `.text-link` "Talk with Flagg Electric", which is a `tel:` link (NEW-2) |
| P1-4 | Mobile call bar occluded footer text | RESOLVED | `padding-bottom:calc(70px + env(safe-area-inset-bottom))`. Measured clearance 142px at 390/375/320 against a 62px bar |
| P2-5 | Eleven first-viewport elements; phone twice | PARTIALLY RESOLVED | Visible inventory ~12. The phone number still renders twice above the fold on desktop and three times on mobile |

## Adjudication — provenance claims (a)–(j)

| # | Claim | Verdict |
|---|---|---|
| a | Stock photos replaced with Yelp project photos | RESOLVED |
| b | Orange #b84e1c→#a64619, pencil-light #6e6759→#655f52 | RESOLVED (text pairs all pass; non-text rules were never audited — NEW-3) |
| c | Service-row arrows → phone glyph | RESOLVED |
| d | Mobile padding calc(70px + env()) | RESOLVED |
| e | Two-tier heading system | RESOLVED — the best structural fix in the file |
| f | Caveat self-hosted; barlow-condensed removed | RESOLVED (side-effect: 396KB for ~55 characters — NEW-5) |
| g | .pencil recoloured; .stamp-mark opacity 1 | RESOLVED |
| h | Spacing scale; .about=end; .questions=start | RESOLVED, one figure overstated — proof box and text-link bottoms are 6px apart, not flush. The .section-head/.faq top alignment in the same claim is exact at Δ=0 |
| i | 39→29 treatments; body floor 16px; phantom 900; fallbacks | PARTIALLY RESOLVED AND STILL FAILING — measured 27 combos not 29; body floor fails twice (.photo-credit and .proof a are 12px carrying prose); the phantom-900 fix removed the emphasis it was meant to keep |
| j | Favicon; 13 of 27 gained transitions | RESOLVED — measured coverage is 26 of 27, better than claimed |

**Counts: 6 resolved outright, 3 resolved with a side-effect or overstatement, 1 partially resolved and still failing.**

## Deterministic scan

Local markup scan: 7 findings. Rendered scan: 2. The gap is entirely 5 cramped-padding findings — 4 are false positives (measured text-to-edge gaps of 24–93px against the 8–16px the rule asks for; padding lives on the section itself) and 1 is a true positive the rendered scan misses: `.faq` has `padding:0` and a 4px border-top, and its `+` glyph sits 0px from the border box. The remaining two findings, cream-palette and codex-grid-background, are the committed world.

The rendered scan is the more authoritative instrument. Neither caught the four WCAG failures below, because both read static CSS.

## What the detector could not see

Assessment B computed real WCAG ratios with alpha composited before the ratio. 52 of 59 pairs pass. Seven fall below threshold; three are exempt (decorative divider, background wash, and a text-shadow rather than text). **Four are genuine failures, all from `--orange-hot` #f08a4e on light backgrounds:**

- Focus ring, 3px outline on every interactive element: 2.18:1 against a 3:1 non-text requirement. This affects all 23 keyboard-reachable controls.
- `.text-link:hover` and `.proof a:hover`: 2.18:1 against 4.5:1.
- `details a:hover` on paper-dark: 1.92:1 against 4.5:1.

The token is fine on dark toner (4.63:1, which is why the contact section passes) and fails on every light surface. The earlier palette fix moved the base orange to #a64619, which passes everywhere, but left orange-hot as the interactive-state colour on light grounds.

## Priority Issues

- **[P1] The mobile hero buries the call button.** Measured at 390×844: the hero photo renders 647px, the CTA lands at y=1100 and the service tags at y=1137 on a 701px viewport. Both are below the fold. Run 2's second P1 fixed exactly this for desktop by height-locking the hero; the fix did not travel to mobile, where the structural cause is different — `min-height:50vh` with `order:-1` puts the photo first.
  Why it matters: on the device most of this audience will use, the primary action is the last thing seen, or not seen.
  Fix: reduce `.hero-photo{min-height:50vh}` to `38vh` below 1050px. That moves the CTA to roughly y=690 and the tags to y=727, both visible.
  Suggested command: /impeccable adapt

- **[P1] The external-link arrow is back, on a tel: link.** The arrow path `M5 12h14m-6-6 6 6-6 6` survives in one place: `.text-link` "Talk with Flagg Electric", href `tel:`. The original P1 was a semantic mismatch — a glyph meaning "leaves this site" on an action that dials. The diagnosis applies identically. The page now uses two different affordances for the same action.
  Fix: replace with the phone glyph used elsewhere, or drop the icon entirely — the word "Talk" is already the affordance, and the gap expansion on hover is better motion than an arrow.
  Suggested command: /impeccable clarify

- **[P1] Every structural rule and border fails WCAG 1.4.11.** Measured: `--rule` #b8ae94 on paper 1.94:1, on paper-dark 1.70:1. `--rule-dark` #9a9080 on paper-dark 2.43:1. All below the 3:1 non-text requirement. These carry the section-head rule, all three gallery figure borders, and the FAQ separators — the page's entire information architecture is built out of them.
  Why it matters: both prior passes audited text contrast thoroughly and correctly, and DESIGN.md says "all text meets WCAG AA" — true, and not the whole requirement. For low-vision users the boundaries that organise the page are close to invisible.
  Fix: `#8a7f66` measures 3.47:1 on paper and 3.06:1 on paper-dark, clearing both. Adopt it for `--rule` and `#7a7058` for `--rule-dark`.
  Suggested command: /impeccable audit

- **[P1] The focus ring fails contrast on every interactive element.** The 3px outline is `--orange-hot` at 2.18:1 against paper. Keyboard users on all 23 controls.
  Fix: switch the focus ring to `--orange` #a64619 (5.25:1 on paper) while keeping orange-hot for text on the dark contact section where it passes.
  Suggested command: /impeccable audit

- **[P2] A third undocumented heading tier at 36px.** `.service-list h3` sits at a flat 36px between the 40px label ceiling and the 84px statement floor — 4px from the label tier, so within one screen the visitor sees a 40px section label and three 36px item headings of nearly the same size, inverting the hierarchy the two-tier fix built.
  Fix: drop the service h3 to 28px so it reads clearly as item-level.
  Suggested command: /impeccable typeset

- **[P2] Caveat ships at 396KB to set ~55 characters.** Larger than both Barlow faces combined, for seven short annotations.
  Fix: subset to the glyphs actually used and serve woff2 — takes the payload under 10KB with no visual change.
  Suggested command: /impeccable optimize

- **[P2] The typeset pass removed the emphasis it was fixing.** Pinning `<strong>` to 700 inside an already-700 parent makes the phone number identical in weight to its surrounding label. The bar still reads from the 18px-vs-13px size delta, but by accident.
  Fix: let the label drop to 400 so the number is genuinely the loudest thing in the bar.
  Suggested command: /impeccable typeset

- **[P2] The 12px body floor fails twice.** `.photo-credit` is 12px/1.4 carrying 133 characters of running prose — the provenance disclosure, the most legally sensitive text on the page, set at the smallest size in the stylesheet. `.proof a` is 12px on a live link. DESIGN.md's own rule reserves 13–14px for labels and captions, never prose.
  Fix: raise both to 13px minimum; the photo credit to 14px given its content.
  Suggested command: /impeccable typeset

## Persona Red Flags

**Jordan (confused first-timer):** her two questions — "is this legit?" and "what will it cost?" — are answered in the 3rd and 4th of five closed accordions with no signal that they exist. She scans five identical 20px uppercase rows and, seeing five equal unknowns, is more likely to leave than to click. The BBB stamp, the strongest evidence on the page, sits below the gallery and the services — the first proof she meets is a photograph, and for a sceptic photos are claims while accreditation is evidence.

**Riley (stress tester):** finds the site has exactly one action and it can silently no-op on a desktop with no telephony handler. Finds `<summary>` announces no state to a screen reader. Measures `--rule` at 1.70:1 and finds every FAQ separator and gallery border below the non-text requirement. Notes that reduced-motion kills transition *duration* but not *movement* — hover transforms still displace, just instantly. Passes keyboard basics: skip link at stop 1, 3px focus ring on every stop, Escape closes the menu and restores focus.

**Casey (distracted mobile user):** the CTA is at y=1100 on a 701px viewport. She never scrolls to it; the fixed call bar is the only thing saving the page. On the service rows the 56px button is pulled up 56px into the paragraph above it, so tapping the row to read hits the phone icon instead. The hero tags are 11px uppercase — the smallest type on the page carrying the answer to "do they do what I need."

## Minor Observations

- `.contact p` is 17px while `.contact-action>p` is 16px — same section, two body sizes. The typeset pass unified four other roles and missed this one.
- No `<address>`, no schema.org Electrician/LocalBusiness JSON-LD, no canonical, no Open Graph, no sitemap.xml. For a local service business whose entire path is "search → call," the missing structured data is the largest zero-cost opportunity on the page.
- `.gallery figure` animates `cardLay` on page load, not on scroll, despite DESIGN.md describing "a brief lay-down on scroll."
- `.mobile-call` z-index drops from 90 to 20 in the mobile override — no conflict today, but a trap if the header ever becomes sticky.
- `script.js` dereferences `.menu` and `#navigation` with no null check.
- No `<address>` element anywhere, and the phone number appears in nine places with no single source of truth.

## Questions to Consider

- If the phone number is the entire conversion, why does the page spend 760px of hero and a 396KB font establishing a metaphor before repeating a number the header already shows at the top of the same screen? Is the call in service of the world, or the world in service of the call?
- Both prior passes fixed contrast for text and both stopped at text. The page's information architecture is built out of rules at 1.7:1. Is that because borders are decoration, or because nobody wrote the rule that a border carrying structural meaning is not decoration?
- The site has exactly one action and it can silently no-op on desktop. What happens to conversion when a meaningful share of visitors are on a laptop?
- DESIGN.md's provenance now records five passes and reads like a changelog. Two of ten claims could not be reproduced from the artifact. At what point does the document stop describing the design and start defending it?
- Three of the five FAQ answers already exist in prose elsewhere on the page. Only the cost and the "what should I have ready" answers are genuinely additive. Is the FAQ a reassurance device or a page-length device?

Trend for flagg-electric-patpadgett-com (last 5 runs): 23/36 → 25/32 (out of 36, then 32)
The two runs scored different heuristic sets, so this is not a like-for-like comparison. By percentage: 64% → 78%.
