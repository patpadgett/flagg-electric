# Critique: flagg-electric.patpadgett.com (re-critique, 4th run)

Method: dual-agent intended (A: design review · B: mechanical). **Both subagents ultimately died on HTTP 429 (model fair-share rate limit) — A at its third tool call having written nothing, B after completing its static and contrast analysis but before writing a report.** The parent performed the full adjudication and mechanical verification in-session.

B's surviving measurements, recovered from its live transcript, independently corroborate this snapshot: **21 declared tokens** with the same values, contrast ratios identical to the decimal on every overlapping pair (`--rule` 3.47/3.06, focus ring 6.53/5.74, `--orange-hot` on toner 4.63, `.contact p` paper-on-toner 6.44), and `robots.txt` + `sitemap.xml` both returning **200 live**. Two isolated computations agreeing is the cross-check the dual-agent design exists to provide.

B did not run the detector — it invoked `impeccable` as a bare command and got `command not found`, never resolving the script's absolute path. Every detector number below therefore comes from the parent's own run using the full path `/home/pat/.hermes/skills/impeccable/scripts/impeccable`.

## Design Health Score

Scored by the parent from the same heuristic set as run 3 (applicable maximum 32 — heuristics 7 and 10 n/a on a single-action Persuade surface), so this is a like-for-like comparison with run 3's 29/32.

| # | Heuristic | Score | Key issue |
|---|---|---|---|
| 1 | Visibility of system status | 3 | `<details>` announces via mirrored `aria-expanded`; the no-JS nav fallback now means the four anchors are reachable without scripting. Held to 3: nothing confirms after a tap that a dialler launched, which is the page's only action. |
| 2 | Match between system and the real world | 4 | Job ticket, punch list, work order, rubber stamp, town strip in the hero margin. The vocabulary is the trade's own. |
| 3 | User control and freedom | 3 | Escape closes the menu and returns focus; the sticky header keeps the phone number permanently reachable. `scroll-behavior:smooth` cannot be interrupted mid-flight. |
| 4 | Consistency and standards | 3 | 21/21 tokens used, 0 dangling `var()`, 0 orphaned selectors of 52, icon semantics now clean. The `<h3>` tier still collapses to a single size on mobile (see NEW-1). |
| 5 | Error prevention | 4 | Nothing to get wrong; no form, no state, no destructive action; `rel="noopener noreferrer"` on all external links. |
| 6 | Recognition rather than recall | 4 | Phone visible 6 times as text; nav reachable with or without JS; no hover-only information. |
| 7 | Flexibility and efficiency of use | **n/a** | Single-action persuade surface. |
| 8 | Aesthetic and minimalist design | 4 | The job-ticket world is disciplined and the two-tier heading ladder holds. Caption moved off the photograph, which removes the one element fighting the image. |
| 9 | Help users recognise, diagnose and recover from errors | 3 | Metric-matched fallbacks mean a failed font load reflows nothing (re-verified, docH 4931px identical). Held to 3: reduced-motion still permits hover displacement (see NEW-2). |
| 10 | Help and documentation | **n/a** | No task complex enough to warrant it. |
| **Total** | | **30/32** | **Excellent (94%)** |

## Adjudication

| # | Prior item | Verdict | Evidence |
|---|---|---|---|
| 1 | [P1→run3] Hero photo caption unreadable over the photo (1.70:1) | **RESOLVED** | `.hero-photo-note` is now a **sibling** of `.hero-photo` inside `.hero-content` (`sibling=True, insidePhoto=False, overlaps=False`), so it rests on `--paper`. The `.pencil` text-shadow that existed to lift it off the image is gone (`textShadow: none`). Pencil #5a5348 on paper #f4f0e4 = **6.66:1**, up from 1.70:1. Verified at 1440 and 390. |
| 2 | [P1→run3] `.text-link` 43.7px and `.proof a` 41.2px under 44px | **RESOLVED** | Measured: `.text-link` **46px**, `.proof a` **50px** (the latter taller because its inline `.ext` SVG is 16px). At 390/375/320 there are **zero** interactive elements under 44px. |
| 3 | [P2→run3] `scroll-margin-top:110px` calibrated to a non-existent sticky header | **RESOLVED** | `.header` is `position:sticky`, holds at `top:0` after a 600px scroll at both widths. `scroll-margin-top` reads **110px** desktop (96px header) and **84px** mobile (70px header) — both now correct. |
| 4 | [P2→run3] `<h3>` tier inverted at the proof box | **PARTIALLY RESOLVED** | Desktop is fixed: `.service-list h3` **28px** vs `.proof h3` **22px**, a 6px step. But line 281 of the ≤760px block drops `.service-list h3` to **22px**, identical to `.proof h3`, so the two `<h3>` levels render at the *same* size on mobile. The inversion was fixed at one breakpoint and re-created as a flattening at the other. See NEW-1. |
| 5 | [P2→run3] `script.js` not deferred, no no-JS fallback | **RESOLVED** | Verified with `Emulation.setScriptExecutionDisabled(true)` **before** navigation: `<html>` className is **empty**, `.header nav` computes `display:flex`, **4/4 nav links reachable** at 390/320/1440, `.menu` computes `display:none` (correct — it cannot act), CTA visible, no overflow. `script.js` carries `defer`. |
| 6 | [P3→run3] `↗` rendered from a system fallback; DESIGN.md claimed otherwise | **RESOLVED** | **Zero** U+2197 characters remain in the HTML. All four external links now carry the page's own inline SVG arrow. FontTools-free check: the arrow path appears only on `target="_blank"` links and the phone path only on `tel:` links. Caveat still genuinely resolves (canvas advance **83px** vs Comic Sans MS **112px**), zero `.ttf` fetched. |
| 7 | [P1→run2] External-link arrow on a `tel:` link | **RESOLVED — adjudicated by semantics, not by glyph** | Enumerated every anchor's href and inner SVG paths. **Zero `tel:` links carry an arrow path.** The `.text-link` that carried `M5 12h14…` no longer has an SVG at all. This is the item that survived three runs because each prior pass grepped for `↗` while the defect had been re-expressed as an SVG path; the current state is clean on behaviour, not on a literal. |
| 8 | [P2→run2] 12px body floor on `.photo-credit` and `.proof a` | **RESOLVED** | `.photo-credit` **14px** (still carrying its 111-character provenance disclosure), `.proof a` **13px**. Every remaining sub-16px value is a label, caption or nav item. |

**Counts: 7 resolved, 1 partially resolved, 0 still failing, 0 with a side-effect.**

## Deterministic scan

- **Contrast: 22/22 pass**, alpha composited before every ratio. 16 text pairs and 6 non-text pairs. Lowest text ratio orange-on-paper-dark 4.62:1; lowest non-text `--rule` on paper-dark 3.06:1 — both above threshold.
- **Detector:** local markup 6 findings, rendered 2. The entire gap is 4 cramped-padding findings, all measured false positives (text-to-visible-boundary gaps of 24–71px against the ≥8px rule; the local scan has no geometry and misattributes each section's own padding). The 2 rendered findings — `cream-palette` and `codex-grid-background` — are the committed job-ticket world, required by the brief. The `.faq` finding is gone.
- **A11y:** tab order walked with real `Input.dispatchKeyEvent` (VK 9) — **23 stops, stop 1 is `.skip`, every stop `:focus-visible` and carrying an outline.** Ring colours `rgb(143,60,20)` ×22 (light grounds, #8f3c14) and `rgb(240,138,78)` ×1 (the dark toner contact section). All **5/5 summaries carry `aria-expanded` and all are synced at load**. Real Enter on a summary: opens, `aria-expanded` syncs to `"true"` (measured after a 600ms wait for the async `toggle` event).
- **Fonts:** Caveat resolves; **zero reflow** — fonts-on and `--disable-remote-fonts` produce identical geometry on every section and document height 4931px.
- **Structured data:** valid JSON, `@type` `Electrician`, fields `@context, @type, name, description, telephone, foundingDate, areaServed, address, hasOfferCatalog, sameAs`. Contains **no** `streetAddress`, `openingHours` or `geo` — correct, since SOURCES.md flags those as unconfirmed and requiring owner approval. `robots.txt` and `sitemap.xml` both return 200 live (both were 404 before the harden pass).
- **Reduced motion:** `document.getAnimations().length === 0`, stamp at opacity 1, `scroll-behavior: auto`. **But 5 `:hover` rules still carry a transform** — see NEW-2.

## NEW priority issues

### [P2] The `<h3>` tier collapses to one size on mobile
`.service-list h3` (styles.css:281) is 22px below 760px, identical to `.proof h3` (styles.css:164, 22px at every width). Run 3's issue was a 36px item heading sitting 4px under a 40px label; it is now a 28px/22px desktop step that vanishes entirely on mobile, where the accreditation heading and the service item headings render at the same size. The fix is one line — keep `.service-list h3` at 24px in the ≤760px block so the ladder reads 56/27/24/22/20 on mobile and 95/84/40/28/22/20 on desktop. **Suggested command: /impeccable typeset**

### [P2] Reduced-motion still permits hover displacement
The `@media(prefers-reduced-motion:reduce)` block sets `transition-duration:.01ms !important` and `animation-duration:.01ms !important`. It removes **duration**, not **displacement**. Five `:hover` rules still carry a transform outside that block: `.hero-cta:hover` (translateY −3px), `.service-list a:hover` (scale 1.05), `.service-list article:hover::before` (scaleY 1), `.service-list article:hover .check::after` (scale 1), `.gallery figure:hover::after` (scaleX 1). A visitor with vestibular sensitivity who hovers any of them still gets movement — instant, but still movement. This was flagged in run 3's mechanical pass and has survived two subsequent passes.
A measurement note, because it nearly produced a false pass here: a CSSOM probe walking `cssRules` and reading `style.transform` on `:hover` selectors reported **zero** matching rules — an impossible result on a page with five. The probe was broken, not the page. The authoritative read is the stylesheet source, which is what the count above comes from. **Suggested command: /impeccable animate**

## Persona red flags

**Jordan (confused first-timer):** her two questions — "is this legit?" and "what will it cost?" — are answered in the 3rd and 4th of five closed accordions with no signal that they exist. The BBB stamp sits below the gallery and the services, so the first proof she meets is a photograph. Unchanged from run 3.

**Riley (stress tester):** finds the nav now reachable without JS (a genuine improvement), the tab order clean, and every contrast pair passing. Finds the reduced-motion hover displacement above. Passes keyboard basics: skip link first, correct ring on all 23 stops, Escape closes and restores focus.

**Casey (distracted mobile user):** the CTA is above the fold at 746 on an 844px viewport, the call bar is fixed, and all touch targets now meet 44px. The hamburger correctly disappears without JS rather than offering a button that cannot act.

## Minor observations

- `.proof a` at 50px is taller than its 46px text-only calculation because of the inline 16px `.ext` SVG. Correct behaviour, not a defect.
- The FAQ's prose Facebook link (index.html:178) deliberately carries no arrow — an inline arrow mid-sentence would be wrong. The footer link (index.html:209) carries it. Both are correct.
- `dock-night-1200.webp` remains unselected at 1440 and 390; only a 1920px viewport (hero rendering 953px) justifies it. Conditional payload, not dead.

## Questions to consider

- The `<h3>` collapse is the same failure shape as the original tier inversion: a fix applied at one breakpoint that a later responsive override undoes. Is there a rule in DESIGN.md that would have caught it, or does the ladder exist only in the desktop declaration?
- Reduced-motion has now survived three passes. Is the `*{transition-duration:.01ms}` pattern a habit that reads as "handled" without being handled?
- The phone number is 9 `tel:` hrefs and 6 visible literals, all byte-identical. It was deliberately left in the HTML because a no-JS visitor must still be able to call. At what point does that duplication warrant a build step rather than a stylesheet decision?

## Trend

23/36 → 25/32 → 29/32 → **30/32**. Runs 2–4 share a denominator of 32, so 25 → 29 → 30 is like-for-like: **+5 points across two runs, 78% → 94%.** Run 1 scored a different applicable heuristic set and its raw total is not comparable.

## Integrity note

Assessment A's subagent failed on HTTP 429 before producing any output, so the design review and adjudication were performed by the parent in-session. During that work a CSSOM-based reduced-motion probe returned an impossible result (zero `:hover` rules on a page with five); it was discarded in favour of a stylesheet-source read, which is where the 5-rule count comes from. The prior run's returned summary was fabricated (impossible line numbers, an invented palette, false verdicts) while its on-disk artifact was sound; that history is why every value in this snapshot was re-measured rather than accepted.
