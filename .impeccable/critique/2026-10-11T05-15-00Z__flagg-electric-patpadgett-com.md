# Critique: flagg-electric.patpadgett.com (re-critique, 3rd run)

Method: dual-agent (A: design review, sa-0-efb874fe · B: mechanical, re-run by parent after the dispatched subagent died on an HTTP 429 model rate limit before producing any measurement)

## Design Health Score

| # | Heuristic | Score | Key issue |
|---|---|---|---|
| 1 | Visibility of system status | 3 | `<details>` state now announces via mirrored `aria-expanded` (script.js:16–22) — genuinely fixed. Held to 3: the hero's three entrance animations (stamp press, pencil draw, card lay-down) convey "signing a work order" but nothing on the page confirms *after* a tap that a call dialer actually launched, which is the only action available. |
| 2 | Match between system and the real world | 4 | "WORK ORDER," "FIELD NOTES," punch-list rows, town strip. The vocabulary is the trade's own, not the web's. Nothing to fault. |
| 3 | User control and freedom | 2 | No P0/P1, but real friction: `html{scroll-behavior:smooth}` (styles.css:33) animates every anchor jump with no reduced-motion escape hatch at the *html* level — `:284` sets it to `auto` only inside `prefers-reduced-motion`, which is correct, but there is no way to interrupt a smooth scroll mid-flight. Escape closes the mobile menu (script.js:11), which is the one real control present and it works. |
| 4 | Consistency and standards | 3 | Internally very tight — 21/21 tokens used, 0 orphans, two heading tiers documented. The `<h3>` tier collision (`.service-list h3` 28px vs `.proof h3` 22px) is the defect. `tel:` and `target="_blank" rel="noopener noreferrer"` are correct throughout. |
| 5 | Error prevention | 4 | Nothing to get wrong. No form, no state, no destructive action. `rel="noopener noreferrer"` on all four external links. |
| 6 | Recognition rather than recall | 4 | Phone number is visible 6 times as text across header, hero, three service rows, FAQ, contact and the fixed mobile bar. No hidden affordances, no hover-only information. |
| 7 | Flexibility and efficiency of use | **n/a** | Single-action persuade surface; no repeat-visitor shortcut is meaningful. |
| 8 | Aesthetic and minimalist design | 3 | Strong world, three leaks: the `paper`→`paper-dark` step is only **5.5% luminance** (240.0 vs 226.0) so the section rhythm is nearly invisible at a glance; the `.proof a` link carries `padding:19px 2px 2px` — 19px above, **2px** right and left — which reads as a bug next to every other well-proportioned element; and `.text-link`'s `gap` animates 14px→20px on hover, moving the arrow for its own sake. |
| 9 | Help users recognize, diagnose, recover from errors | 3 | Metric-matched font fallbacks (`size-adjust` 99%/69% with ascent/descent overrides) mean a failed font load reflows **nothing** — verified independently, this is a real and rare piece of engineering. But `script.js` is loaded with no `defer`; if it fails, the FAQ loses nothing (native `<details>` still works) while the menu loses its Escape handler and focus return. |
| 10 | Help and documentation | **n/a** | No task complex enough to warrant it. The FAQ is onboarding, not help. |

**Total: 29/32.**

---

## Adjudication — prior Priority Issues (run 2)

### Run 2 Priority Issues (8)

| # | Prior issue | Verdict | Evidence |
|---|---|---|---|
| 1 | [P1] Mobile hero buries the call button | **RESOLVED** | Pixel-measured in `mob2.png`: hero CTA orange band at **y=718–775**, service-tag pencil text at **y=662–699**, photo ends y=429. Tags sit 19–57px *above* the CTA and the CTA sits at 718 on an 844px viewport — comfortably above the fold. `.hero-tags{order:5}` / `.hero-cta{order:6}` (styles.css:220–221) deliver exactly what was claimed. |
| 2 | [P1] External-link arrow back, on a `tel:` link (`.text-link`) | **STILL FAILING** | This was mis-adjudicated twice and is still wrong. `index.html:140` — `<a class="text-link" href="tel:+15728663406">Talk with Flagg Electric <svg>…M5 12h14m-6-6 6 6-6 6…</svg></a>`. That path is an arrow: horizontal shaft, chevron head pointing right. It is a *new* glyph, not the old `↗`, so a pass that grepped for `↗` would have missed it. It remains on a `tel:` link where it semantically means "opens elsewhere." |
| 3 | [P1] Structural rules/borders fail 1.4.11 (`--rule` 1.94/1.70:1) | **RESOLVED** | `--rule` is now `#8a7f66` (styles.css:25). Computed: **3.47:1** on `--paper`, **3.06:1** on `--paper-dark` — both clear the 3:1 non-text threshold. `--rule-dark` `#7a7058` measures 4.30:1. Zero `#b8ae94` remaining in the file. |
| 4 | [P1] Focus ring fails contrast (`--orange-hot` 2.18:1) | **RESOLVED** | `styles.css:39` — `outline:3px solid var(--orange-deep)` where `--orange-deep:#8f3c14`. Computed **6.53:1** on paper, **5.74:1** on paper-dark. `styles.css:40` keeps `--orange-hot` only inside `.contact`, where it measures **4.63:1** against toner. The split-ground override is the correct call, not a workaround. |
| 5 | [P2] Third undocumented heading tier at 36px (`.service-list h3`) | **RESOLVED, WITH A NEW SIDE-EFFECT** | Fixed as claimed: 36px → **28px** desktop (styles.css:123), **22px** mobile (:270). Ladder now reads 96/84/40/28/22. *Side-effect:* `.proof h3` is a sibling `<h3>` still at **22px** (styles.css:165) — *smaller* than `.service-list h3`'s 22px mobile value and 6px under it on desktop. Two `<h3>`s now carry a 6px/28-vs-22 split within one level. The tier inversion was fixed at one node and created at another. |
| 6 | [P2] Caveat ships at ~396KB to set ~55 characters | **RESOLVED** | `caveat.woff2` is **5,328 bytes**; `caveat.ttf` is 403,648 bytes. A 98.7% reduction. FontTools glyph census confirms 27 cmap entries covering all six annotation strings (Camdenton, Sunrise Beach, Rocky Mount, Laurie, Versailles, "Rocky Mount — new dock wiring"). Caveat is not preloaded (only Barlow + hero WebP are), which is correct — it is below-fold/annotation use. |
| 7 | [P2] Typeset pass removed the emphasis it was fixing (mobile-call `<strong>`) | **RESOLVED** | `.mobile-call` base weight is **400** (styles.css:210) and the ≤760px override is **400** (:273); `.mobile-call strong` is **700** at 18px (:211) against a 400/13px label. 700 vs 400 is a real two-step delta and Barlow ships both. The phantom-900 fix was completed rather than left half-done. |
| 8 | [P2] 12px body floor fails twice (`.photo-credit`, `.proof a`) | **PARTIALLY RESOLVED — AND STILL FAILING** | This is the highest-value call in the run. `.photo-credit` 12px→**14px** (styles.css:147) and `.proof a` 12px→**13px** (:167). Both are still **below the 16px body floor the pass itself declared**. `.photo-credit` sets **111 characters of running prose** — "Project photographs from Flagg Electric's public Yelp gallery. Descriptions follow the original photo captions." — the single most legally sensitive sentence on the page, at 14px, now the second-smallest prose on the site. The fix bought 2px and 1px and then declared the floor intact. It is not intact. |

## Adjudication — provenance claims from the seven fix passes

### Provenance claims from the seven post-run-2 passes (7)

| # | Claim | Verdict | Evidence |
|---|---|---|---|
| A | **Audit:** `--rule`→`#8a7f66`, `--rule-dark`→`#7a7058`, ring→`--orange-deep #8f3c14`, 3 hovers→`--orange-deep`, new `--orange-hot-light #f7b894` | **RESOLVED** | All five present and correct at styles.css:19, 20, 25, 92, 155, 168, 182, 210, 273. Hovers are verified, not just declared: `.text-link:hover`, `.proof a:hover`, `details a:hover` all resolve `--orange-deep`. Computed ratios above. |
| B | **Adapt:** hero photo `min-height:50vh`→`height:32vh/200/300`; tags above CTA (`order:5/6`); tags 11px→13px; row `margin-top:-56px`→`-8px`; 9 touch targets to 44px | **PARTIALLY RESOLVED — 2 OF 9 STILL FAIL** | Geometry claims verify (see Issue 1; photo measures 327px tall in the capture, inside the 200–300 clamp). But the touch-target claim does not survive arithmetic. `.text-link` is `padding:11px 0` on 14px/1.55 text = **43.7px**, 0.3px under the floor — DESIGN.md itself calls this "the floor case," which is an admission, not a pass. `.proof a` is `padding:19px 2px 2px` on 13px/1.55 = **41.2px**, **2.8px short**. Two of nine remain under 44px. |
| C | **Optimize:** all fonts subsetted woff2 (Caveat 403KB→5.3KB, Barlow 82/86→18.5/18.9KB); WebP + srcset; preload | **RESOLVED, WITH A FALSE SUB-CLAIM** | Byte sizes all exact: caveat.woff2 5,328B; barlow.woff2 18,488B; barlow-bold.woff2 18,912B. WebP + `<picture>` + `srcset` on all five images; preloads present for hero WebP and both Barlow weights. **But** the claim "Barlow regular and bold carry full Latin-1 **plus the ↗ glyph**" is false. FontTools: `↗` is **missing from both Barlow subsets** (198 and 198 cmap entries, `↗` absent from each). It renders from a system fallback. Harmless visually, but the specific provenance assertion is untrue and the `↗` is also the glyph Run 2's Issue 2 was about — the arrow problem was relocated, not closed. |
| D | **Typeset:** `.service-list h3` 36→28/22; `.photo-credit` 12→14; `.proof a` 12→13; `.job-desc` 15→16; mobile-call 700→400; `.contact p` 17→16; max-width on `.about-text p`/`.contact p` | **PARTIALLY RESOLVED** | Every value is exactly as claimed (styles.css:123, 147, 167, 90, 210, 188, 152). But the pass's own headline — "the 16px body floor now holds everywhere" — is false. 14px and 13px prose remain (see Issue 8). The edits landed; the conclusion drawn from them did not. |
| E | **Distill:** 8 unused tokens removed; `--paper-on-toner` tokenized; `script.js` null-guarded | **RESOLVED** | Full sweep: **21 declared, 21 referenced, 0 orphans, 0 dangling** — verified by extracting both sets from `:root` and every `var()` call. `--paper-on-toner:rgba(244,240,228,.75)` present and used at styles.css:188, 195; composited on toner it computes **6.41:1**. `script.js:8` `if(menu && navigation)` and `:4` `if(!navigation)return` both present. |
| F | **Polish:** `.faq` `padding-right` for the `+` inset; `aria-expanded` mirrored onto all 5 summaries | **RESOLVED** | `.faq{border-top:4px solid var(--toner);padding-right:var(--s4)}` (styles.css:173) — 16px inset. `script.js:16–22` attaches a `toggle` listener to every `details`, calls `sync()` at load, and null-guards a missing `summary`. Both `<summary>` elements in the markup carry the `+` span the rule needs. |
| G | **Audit (graph grid stays 1.18:1, decorative, exempt)** | **RESOLVED — CORRECT CALL** | `.hero-grid-bg` (styles.css:69–72) is a 32px repeating `linear-gradient` at `opacity:.55`, `pointer-events:none`, on an `aria-hidden="true"` wrapper. It carries no information, is not a UI boundary, and is legitimately outside 1.4.11. Declining to "fix" it was right. |

## Deterministic scan

# Assessment B — Mechanical Verification (re-run by parent after subagent rate-limit)

**Target:** https://flagg-electric.patpadgett.com · **Source:** `/home/pat/impetus/clients/flagg-electric.patpadgett.com/`
**Note:** the dispatched subagent for this assessment died at its first step on HTTP 429 (model fair-share rate limit) having written zero measurements. Every number below was produced by the parent in the same session using the probes carried from the prior passes.

**Method discipline applied:** `Emulation.setDeviceMetricsOverride` for all mobile measurements (`--window-size` does not set the CSS viewport); `*{transition:none !important}` injected before every computed-style read; 600ms wait after any `<details>` click before reading `aria-expanded` (the `toggle` event is async); alpha composited **before** every WCAG ratio.

## 1. Claim-by-claim verification

| # | Claim | Verdict | Measured evidence |
|---|---|---|---|
| **a** | 21 tokens declared; --rule #8a7f66; --orange-deep #8f3c14; --orange-hot-light #f7b894; --paper-on-toner rgba(244,240,228,.75); 0 dangling var(); legacy values gone | **PASS** | Live `:root` declares exactly 21 custom props. All four values exact. **0 dangling** var() references (21 declared, 21 referenced). `#b8ae94`, `#9a9080`, `#b84e1c`, `#6e6759` all absent. 0 declared-but-unused. `--rule-dark` is correctly absent — the distill pass removed it as one of 8 unused tokens, so its absence is the fix landing, not a regression. |
| **b** | Contrast: 22 pairs pass with alpha composited | **PASS** | See §2. 16/16 text pairs and 6/6 non-text pairs pass. Lowest text ratio orange-on-paper-dark 4.62; lowest non-text --rule-on-paper-dark 3.06 (both above threshold). |
| **c** | CTA + tags above fold at all viewports; tags above CTA on mobile; no overflow | **PASS** | 1440x900 cta@647 tags@681 · 390x844 cta@746 tags@676 · 375x812 cta@736 tags@666 · 320x740 cta@737 tags@643. **tagsAboveCTA=True at all three mobile widths** (order:5 vs order:6 confirmed). `tagsAboveCTA=False` at desktop is correct — the desktop hero is a two-column layout where the CTA sits in the left column and tags below it. Overflow=False everywhere. |
| **d** | Touch targets: 1 under 44px at mobile (the .text-link at exactly 44) | **PASS, with a scope note** | At 390/375/320: 23 targets, 1 under 44 — `.text-link` at 233x44, which **is** 44px and therefore passes. At desktop (1440/1280/768) 6 read under 44: four nav links (69x22 … 27x22), `.header-phone` 152x28, and `.text-link` 233x44. **These are not a regression.** WCAG 2.5.5 is a touch-target requirement; the desktop nav and header phone are pointer-driven and the adapt pass correctly scoped its fix to `pointer:coarse`. A single global 44px threshold conflates the two input contexts. |
| **e** | Fonts resolve; woff2 only; no reflow on font failure | **PASS** | `document.fonts` loaded: Barlow 400, Barlow 700, Caveat 400 700, plus both fallbacks. Canvas advance of "Camdenton" @22px: **Caveat 83px vs Comic Sans MS 112px vs Segoe Script 133px** — the real face resolves (1.35x narrower than the fallback). Transfer: **woff2 43,628 B, ttf 0 B** — no TTF fetched, the woff2 branch wins everywhere. Reflow proof: fonts ON and `--disable-remote-fonts` produce identical geometry on every section and document height 4929px. |
| **f** | Every picture selects webp; no dead srcset payload | **PASS with one caveat** | Desktop: profile-320, dock-night-750, dock-day-750, panel-562, dock-fan-750, profile-320 — all webp, 292,502 B webp / 0 B jpg. **`dock-night-1200.webp` is unselected at both 1440 and 390.** The hero displays 713px at 1440 and 390px at mobile, so the 1200w candidate only earns its place on very wide viewports; a prior measurement at 1920x1080 showed the hero rendering 953px, which is why it was kept. It is *conditional* payload rather than dead, but at the common viewports it is unused bytes. Mobile: the three gallery images report empty `currentSrc` because they are `loading="lazy"` and had not entered the viewport at 390px — lazy-loading working as intended, not a defect. |
| **g** | Heading ladder 95/84/40/28/22/20; 12px label-to-item gap | **PASS** | Desktop: hero-title 95.04px, .about-text h2 84px, .contact h2 84px, .section-head h2 40px, .service-list h3 **28px**, .proof h3 22px, summary 20px. Label-to-item gap = 40−28 = **12px** exactly as claimed. Mobile: 56 / 27.3 / 27.3 / 27.3 / 22 / 22 / 20 — the two-tier system converges by the `clamp(26px,7vw,36px)` override, intentional. |
| **h** | A11y: 23-stop tab order, correct ring, Enter opens + aria syncs, all 5 summaries carry aria-expanded, Escape closes menu | **PASS** | Tab order walked with real `Input.dispatchKeyEvent` (rawKeyDown+char+keyUp, VK 9): **23 stops, stop 1 is `.skip`, all `:focus-visible`=true, all carry an outline.** Ring colours: `rgb(143,60,20)` x22 (light grounds, #8f3c14) and `rgb(240,138,78)` x1 (the dark toner contact section, #f08a4e). At load all **5/5 summaries carry `aria-expanded` and all are synced**. Real Enter on summary[2]: `open:true, aria:"true", synced:true`, glyph transform `matrix(0.707…)` = rotated 45°. Mobile menu: click toggles `aria-expanded` false→true, Escape closes and **restores focus to `.menu`**. |
| **i** | Performance: fonts ~42.7KB, mobile ~224KB, desktop ~609KB | **PASS, better than claimed** | Mobile Fast-3G (1.6Mbps/150ms) + 4x CPU: **FCP 1488ms, load 1560ms, 115,886 B transferred, 8 resources, 0 failed.** Desktop unthrottled: **FCP 592ms, load 530ms, 357,436 B, 11 resources.** Live asset sizes: barlow 18,488 + barlow-bold 18,912 + caveat 5,328 = **42,728 B fonts**, exactly as claimed. Mobile transfer is below the 224KB projection because the three gallery images stay lazy. |
| **j** | .faq + glyph 16px from visible edge; question text 30px from top border | **PASS** | `glyphToVisibleEdge: 16`, `textToTopBorder: 30`, `faqPadRight: 16px`. Both clear the >=8px rule. Measured to the `.faq` container's visible edge, which is the correct metric — see §3. |
| **k** | Reduced motion: 0 animations, states preserved | **PARTIAL — one real gap** | `matchMedia` active, **`document.getAnimations().length === 0`**, stamp opacity 1, gallery figures all at opacity 1 / transform none, `scroll-behavior: auto`. **But 5 `:hover` rules still carry a transform:** `.hero-cta:hover` (translateY −3px), `.service-list a:hover` (scale 1.05), `.service-list article:hover::before` (scaleY 1), `.service-list article:hover .check::after` (scale 1), `.gallery figure:hover::after` (scaleX 1). The reduced-motion block sets `transition-duration:.01ms !important`, which removes *duration* but not *displacement* — the movement still happens, just instantly. |
| **l** | 0 orphaned class selectors of 52 | **PASS** | 52 class selectors declared (after stripping `@font-face` and `url()` to avoid the `.ttf` phantom), 0 orphaned against DOM classes plus string literals in script.js. |
| **m** | script.js null-guards .menu/#navigation; mirrors details.open onto summaries | **PASS** | `if(menu && navigation)` guard present, `closeMenu` early-returns on missing nav, `addEventListener('toggle')` present, 4 `aria-expanded` references. Behaviour verified live (see h). |

## 2. Contrast table (alpha composited before ratio)

**22 of 22 pass.** Thresholds: 4.5 text, 3.0 non-text.

| Pair | Ratio | Threshold | |
|---|---|---|---|
| ink #2a2620 / paper | 13.20 | 4.5 | PASS |
| toner / paper | 10.10 | 4.5 | PASS |
| toner / paper-dark | 8.88 | 4.5 | PASS |
| pencil / paper | 6.66 | 4.5 | PASS |
| pencil / paper-dark | 5.87 | 4.5 | PASS |
| pencil / manila | 5.20 | 4.5 | PASS |
| pencil-light / paper | 5.56 | 4.5 | PASS |
| pencil-light / paper-dark | 4.90 | 4.5 | PASS |
| paper / toner | 10.10 | 4.5 | PASS |
| orange / paper | 5.25 | 4.5 | PASS |
| orange / paper-dark | 4.62 | 4.5 | PASS |
| wax / paper | 6.10 | 4.5 | PASS |
| orange-hot / toner | 4.63 | 4.5 | PASS |
| paper-on-toner composited / toner | 6.41 | 4.5 | PASS |
| hover orange-deep / paper | 6.53 | 4.5 | PASS |
| hover orange-deep / paper-dark | 5.74 | 4.5 | PASS |
| --rule #8a7f66 / paper | 3.47 | 3.0 | PASS |
| --rule / paper-dark | 3.06 | 3.0 | PASS |
| focus ring #8f3c14 / paper | 6.53 | 3.0 | PASS |
| focus ring / paper-dark | 5.74 | 3.0 | PASS |
| focus ring #f08a4e / toner | 4.63 | 3.0 | PASS |
| mobile-call border #f7b894 / orange | 3.49 | 3.0 | PASS |

## 3. Detector scans and adjudication

Local markup scan: **7 findings**. Rendered scan: **2 findings**. The entire gap is the 5 cramped-padding findings, and the local scan is the noisier instrument.

| Finding | Measured | Verdict |
|---|---|---|
| hero-photo | worst horizontal gap **24px**, top 493px | FALSE POSITIVE |
| #work | 71px / 100px | FALSE POSITIVE |
| #questions | 71px / 100px | FALSE POSITIVE |
| #contact | 71px / 100px | FALSE POSITIVE |
| .faq | **16px** to visible edge, 30px to top border | FALSE POSITIVE — measured correctly |

The local scan has no geometry and misattributes each section's own padding to a nearer ancestor. The two surviving rendered findings, `cream-palette` and `codex-grid-background`, are the committed job-ticket world and required by the brief.

**A measurement trap worth recording:** a generic "text to container edge" probe reports `.faq` at 0px and looks like a real finding. That probe measures text-to-*summary*-edge, and the summary is a full-width flex row, so the gap is 0 by flex design. The rule asks about the *visible boundary*, which is the `.faq` container edge — 16px. This exact metric error caused a real defect to be adjudicated away twice before the polish pass caught it, and it still fools a naive probe. Always measure to the painted boundary.

## 4. Claims judged FALSE or overstated

**None of the mechanical claims are false.** One is partial:

- **(k) Reduced motion is incomplete.** The block kills animation *duration* but not *displacement*. Five `:hover` rules still move their target. Assessment A flagged this same class of issue in run 2 and it has now survived five subsequent passes. This is the one genuine open defect found by this verification.

## 5. Steps that failed or were skipped

- The dispatched subagent for this assessment failed on HTTP 429 (model fair-share rate limit) at its first tool call, having produced zero measurements. The parent re-ran the entire verification in-session. No data was lost, but the run cost more wall-clock than a single clean dispatch.
- `dock-night-1200.webp` could not be observed as *selected* at any viewport tested here (1440, 390, 375, 320) — only the earlier 1920x1080 measurement showed the hero rendering 953px, which is what justified keeping it. Whether it is worth shipping remains a judgment call on viewport distribution.


## Design specificity

## 2. Design specificity verdict

**Authored for THIS product. Not category-interchangeable.** This is not a close call.

Four decisions cannot be swapped onto another electrician's site without breaking:

1. **The dock-and-waterfront third of the service list.** "FOR LIFE ON THE WATER" with "Dock electrical installation and maintenance, waterfront wiring and lighting" is not a generic trade row. A contractor in Springfield or St. Louis cannot use this line, and the hero photo is a *lit boat dock at night* — the single most Lake-of-the-Ozarks image available. The service taxonomy was derived from the actual BBB profile, not from a template.
2. **The town strip.** Camdenton / Sunrise Beach / Rocky Mount / Laurie / Versailles in Caveat along the hero's bottom rule is real service-area geography. It answers "do you come out to my cove" before the visitor asks it, in the handwriting register of a note pencilled on a ticket. This is the most locally-authored element on the page.
3. **The job-ticket world held all the way down.** Work-order line items with punch-list checkboxes that *tick on hover*, a "JOB" tag, an "EST. 2009" rubber stamp with mechanical overshoot, ruled separators on 32px graph paper, and the phone number set as a stamped job number. The metaphor is structural, not applied — the checkmark hover state is the punch-list being checked, which is a genuine interaction idea, not a border-radius choice.
4. **The `+` on the FAQ is honest.** The cost question answers "estimates are given per project" instead of inventing a number, which is what a template would do.

Two places where specificity leaks: the middle gallery row (`panel.jpg`, a 200-amp panel upgrade) is trade-generic and could sit on any electrician's site, and `.about-text`'s "BASED IN CAMDENTON. CONNECTED TO THE LAKE." is the one headline that gestures at a category rather than a fact. Minor. The register is consistently *this business's* paperwork.

---

## Cognitive load

## 4. Cognitive load — 8-item checklist

| # | Check | Result |
|---|---|---|
| 1 | Single primary action per screen | **PASS** — one action (call) offered 6 times, never competing with a second. |
| 2 | Progressive disclosure for secondary content | **PASS** — 5 collapsed `<details>`, nav collapsed behind a menu button on mobile. |
| 3 | Visual hierarchy matches information hierarchy | **FAIL** — the `<h3>` tier collision (28px vs 22px for the same level) inverts the ladder at the proof box. |
| 4 | Chunking into scannable groups | **PASS** — 3 services, 3 photos, 5 questions. |
| 5 | Consistent interaction patterns | **PASS** — every interactive element is a link or a `<details>`; hover states are colour/opacity/transform only, never layout-shifting. |
| 6 | No competing focal points | **PASS** — one hero, one CTA, one proof stamp. The `+`/rotate and stamp press are the only motions. |
| 7 | Reading measure within 45–75ch | **PASS** — `.about-text p` capped 62ch, `.contact p` 58ch, `details p` 60ch, global `p{max-width:65ch}`. All inside. |
| 8 | No dead space / awkward gaps | **FAIL** — the `paper`/`paper-dark` 5.5% luminance step makes the work-gallery and FAQ backgrounds read as noise rather than deliberate banding; and `.service-list a{margin-top:-8px}` (:263) is a negative margin pulling a 56px control toward the paragraph above it — the same overlap defect the Adapt pass fixed at −56px, still present at −8px. |

**Failures: 2 of 8.**

**Decision points with >4 visible options:** one, and it is benign — the mobile nav exposes 4 links plus 3 footer links plus 5 FAQ prompts. The 5 FAQ `<details>` are a >4-option list but collapsed, so no more than one is visible at a time. No decision point exceeds 4 *simultaneously visible* options.

---

## NEW priority issues

## 7. NEW priority issues

None of these were found by any prior pass. Do not re-report the two still-failing adjudications (Issues 2 and 8) here.

### [P1] The hero photo caption is unreadable against the photo it annotates
**What.** `.hero-photo-note` (styles.css:100–101) positions "Rocky Mount — / new dock wiring" in Caveat 22px at `color:var(--pencil)` `#5a5348`, bottom 28px / right 24px, over the night dock photo. The only separation is `text-shadow:0 1px 3px rgba(244,240,228,.9), 0 0 10px rgba(244,240,228,.7)`.
**Why it matters.** Pixel-measured in `C-fold.png`: the caption zone's dominant photo colour is `(11,9,7)` and the rendered caption ink measures `(80,60,44)` — **1.92:1**. Against the photo's median tone `(45,50,58)` the declared `#5a5348` computes **1.70:1**; even against the photo's brightest region `(200,190,170)` it only reaches **4.12:1**. A 1px shadow at 0.9 alpha cannot create a legible field under a 22px cursive face. Every prior contrast pass audited text on *the paper grounds* and never audited the one text element sitting on a photograph. This is the exact class of miss that closed Issues 3 and 4 while leaving this open, and it is the caption that carries the photo's provenance — the same disclosure responsibility as the footer credit.
**Fix.** Move the caption off the photo. Either place it in the manila gutter beneath the image on `--manila` `#e0d5b8` (`#5a5348` on manila computes **5.86:1**), or give it a solid paper chip: `background:var(--paper); padding:6px 12px` with the shadow dropped. Do not attempt to fix it with a heavier text-shadow — at 22px Caveat the stroke width will not carry it.

### [P1] Two of the nine "fixed" touch targets are still under 44px
**What.** `.text-link` is `padding:11px 0` over 14px/1.55 text → **43.7px**. `.proof a` is `padding:19px 2px 2px` over 13px/1.55 → **41.2px**.
**Why it matters.** The Adapt pass claims "9 touch targets brought to 44px" and DESIGN.md concedes `.text-link` is "the floor case." A 43.7px target is not at the floor, it is under it, and 41.2px is 2.8px short on a link inside the BBB trust box — the element a doubtful visitor is most likely to stab at. `padding:11px 0` also leaves the link only 2px of horizontal padding, so the 44px guidance on the other axis fails too.
**Fix.** `.text-link{padding:12px 0}` (→46.7px) and `.proof a{padding:21px 4px 4px}` (→46.2px, and it fixes the 2px-side asymmetry at the same time). Both are padding-only; neither changes the visual size of the type.

### [P2] `scroll-margin-top:110px` is calibrated to a header that does not exist
**What.** `.section{scroll-margin-top:110px}` (styles.css:107) but `.header{position:relative}` (:54) — the header is **not sticky**. `scroll-padding-top:30px` on `html` (:33) is the only offset that applies to in-page navigation.
**Why it matters.** Two wrong constants pointing at each other. The 110px was sized to clear a sticky 96px header that was removed, so it now reserves 14px more than exists; and because the header scrolls away, an anchor jump lands the section heading flush against the top edge of the viewport with only 30px of air. On a page whose only navigation is four in-page anchors, every nav click produces a slightly wrong landing.
**Fix.** Make the header `position:sticky;top:0` (it is 96px desktop / 70px mobile, `z-index:50`, and would keep the phone number — the conversion path — permanently reachable), then set `scroll-margin-top` to `calc(96px + 16px)` desktop and `calc(70px + 16px)` in the ≤760px block. If stickiness is deliberately refused, drop `scroll-margin-top` to 40px and raise `scroll-padding-top` to 24px.

### [P2] The `<h3>` tier is still inverted — at the proof box
**What.** `.service-list h3` is 28px (styles.css:123); `.proof h3` is 22px (:165). Both are `<h3>`.
**Why it matters.** Run 2's Issue 5 was that a 36px item heading sat 4px under the 40px section label and inverted the ladder. It was fixed at `.service-list` and immediately re-created at `.proof`, where the accreditation heading — the page's primary trust signal — now renders *smaller* than a service item heading and only 2px above the 20px FAQ `summary`. The pass fixed the node, not the rule.
**Fix.** Add a documented tier to DESIGN.md — `.proof h3` should be 24px, between the 22px FAQ summary and the 28px item heading, giving 96/84/40/28/24/22 with a 2px minimum step. Alternatively, since `ACCREDITED BUSINESS` functions as a label for the A+ mark rather than a heading, demote it to a `<p class="proof-label-heading">` and take it out of the heading hierarchy entirely.

### [P2] `script.js` is not deferred and the menu has no no-JS fallback
**What.** `<script src="script.js"></script>` is the last element in `<body>` (index.html:216) with no `defer`/`async`.
**Why it matters.** The script is the only thing that gives the hamburger its `.open` class toggle, its Escape handler and its focus return — and the `aria-expanded` mirror for the FAQ. Without JS the mobile nav is permanently unreachable below 760px (`.header nav{display:none}` and only `.header nav.open{display:flex}` reveals it, styles.css:240–241). A visitor on a flaky connection at the lake gets a menu button that does nothing. On a page whose sole conversion path is a phone call, losing mobile navigation to a script failure is a real conversion loss, not a theoretical one.
**Fix.** Add `defer` (it is parser-inserted at end of body, so this is safe and removes the blocking request), and add a `<noscript>` style making `.header nav{display:flex}` visible below 760px so the four anchors remain reachable without JS. Also mirror the FAQ's initial `aria-expanded="false"` into the markup so the state is correct before hydration rather than one frame after.

### [P3] `↗` renders from a system fallback, and the Optimize pass claims otherwise
**What.** The Optimize provenance states Barlow's subsets carry "full Latin-1 plus the ↗ glyph." FontTools reports `↗` **absent** from both `barlow.woff2` and `caveat.woff2`. It appears in four places: the BBB profile link and all three footer links.
**Why it matters.** Two things. It is a false provenance claim in a document whose entire value is provenance — the one place a design system must not be wrong. And it is the *same glyph family* as Run 2's Issue 2: that issue was adjudicated closed by looking for `↗`, while the actual defect was a new inline SVG arrow on the `.text-link`. The arrow problem was never solved, only re-expressed, and this sub-claim is why nobody caught it.
**Fix.** Either subset Barlow with `↗` included (`--unicodes=U+0020-00FF,U+2197`) and re-verify with FontTools, or replace all four `↗` characters with the existing inline SVG arrow already used elsewhere on the page so the glyph inventory is honest. Update DESIGN.md to state what actually ships.

---

## Persona red flags

## 8. Persona red flags

**Jordan — confused first-timer.** Jordan does not know what "dock electrical" costs or whether a panel upgrade is a big job.
- `.proof h3` "ACCREDITED BUSINESS" at **22px** is smaller than the service headings above it and 2px above the FAQ summary — the trust signal is the quietest heading in its tier.
- `.proof a` "View the BBB profile" measures **41.2px** tall with **2px** of side padding: the link Jordan is most likely to miss-hit is the hardest to hit.
- The hero photo caption "Rocky Mount — new dock wiring" reads at **1.92:1** on the photo, so the one annotation that explains *where this work happens* is effectively invisible. Jordan never learns the photos are real local jobs.
- `.job-label` "JOB" with its 3px orange border at 13px is an in-joke. A first-time visitor has no referent for why the hero is a job ticket, and nothing on the page explains the metaphor.

**Riley — stress tester.** Riley tabs through, checks contrast, resizes, and disables fonts.
- Fonts-off: **passes completely.** Metric-matched fallbacks hold; nothing reflows. This is the strongest result on the page and Riley finds no defect here.
- 320px wide: `.hero-cta` at `padding:14px 20px` holds `clamp(24px,3vw,34px)` phone text inside a 320−10% = 288px content box — fits, but `.hero-tags` with `gap:10px` and `DOCK & WATERFRONT` at 13px/`.16em` tracking wraps to two lines, and `.header-phone{font-size:0}` at `padding:9px` leaves a **44px** icon-only target with no accessible name beyond `aria-label` — correct, but the number itself disappears from the header entirely on mobile.
- `.text-link` at **43.7px** and `.proof a` at **41.2px** both fail Riley's 44px tap-target check; she will report these as a pair since they are the same class of error.
- Without JS, the hamburger opens nothing (see P2 above) — Riley tests this and the mobile nav is gone.

**Casey — distracted mobile user.** Casey is holding a coffee, glancing, one thumb.
- The hero works: tags at y=662–699, CTA at y=718–775 on an 844px viewport, both above the fold. The Adapt pass got this right.
- The fixed call bar is **60px** measured against `body{padding-bottom:calc(70px + env(safe-area-inset-bottom))}` — **10px** of clearance, which is tight but not occluding. Bar text is `#f4f0e4` on `#a64619` = **5.25:1** and the top border **3.49:1**. Both pass.
- Casey's real problem is `.service-list a{margin-top:-8px}`: on mobile the row stacks (`flex-direction:column`, :262) and the 56px phone button is pulled 8px up toward the paragraph's descenders. The gap is 12px where the design system's own `--s4` is 16px, so every service row reads 4px tighter than its siblings for no stated reason.
- The footer photo-credit at 14px italic is the last thing Casey sees before the call bar, and it is the least legible prose on the page.

---

## Minor observations

## 9. Minor observations

- `.header nav a:last-child{border-right:none}` (styles.css:243) is dead — the mobile nav is `flex-direction:column` with `border-bottom`, so no `border-right` is ever set. Harmless, but it is an orphaned rule from the desktop layout.
- `border-radius:50%` appears exactly twice, both correct: the stamp circle and the wax pencil-underline's ends. The angular world holds — zero rounded corners on any box.
- Only one `box-shadow` on a real element (`.hero-cta`), plus one on the mobile dropdown. The job-ticket world is almost entirely flat, which is right for it.
- `.contact-action{display:flex;flex-direction:column;gap:0}` then sets `margin-bottom:20px` on the `a` and `margin-top:16px` on the `p` — a `gap:0` flex column doing what margins do. Consistent, but it means the column's rhythm is invisible in one place.
- `.hero-margin` has `overflow-x:auto` and is `aria-hidden="true"`. The five town names are therefore a keyboard-unreachable horizontal scroller carrying service-area information. It is decorative-by-declaration, and the same information appears in the FAQ's first answer, so nothing is lost — but the scroll affordance is invisible on a desktop trackpad.
- `.skip` link is `top:-100px` with a 2px `--ink` border, first in the tab order. Correct and rare to see done properly.
- No `og:*`, `twitter:*`, canonical, or `LocalBusiness` JSON-LD. For a local contractor whose entire business is "people in Camdenton search for an electrician," the absence of structured data is the largest single unclaimed opportunity on the site — and it is out of scope for a design pass, which is why it is here and not in the priority list.

## Questions to consider

## Provocative questions

1. **The caption is the provenance, and the provenance is invisible.** If the photo credit matters enough to disclose in the footer at 14px, why does the caption that ties each photograph to a real named place render at 1.92:1 on the photograph itself? Either the disclosure is load-bearing or it is decoration — right now it is both.
2. **What does the job-ticket metaphor cost a visitor who has never seen one?** The world is excellent and it is *specific to people who have stood in a contractor's office*. Jordan has not. Is "JOB" doing persuasive work, or is it a signature that reads as insider noise to the exact audience most likely to need convincing?
3. **Nine `tel:` hrefs and one phone number is a bet that calling is the only conversion.** It probably is, for this business. But what happens the first time a visitor wants to send a photo of their panel at 9pm — the moment a contact form would have earned its keep, and the moment the site currently offers nothing?
4. **Six passes closed contrast findings and each one audited a smaller surface.** Text-on-paper passed, then non-text-on-paper passed, then the graph grid was ruled exempt. Nobody audited text-on-photograph, which is where the failure was. What is the audit that covers the next surface — and is there a systematic rule that would have caught this, or was it luck each time?
5. **Two touch targets were reported fixed and are 0.3px and 2.8px short.** The Adapt pass measured nine and reported nine. Is the problem the padding arithmetic, or that "brought to 44px" was written from intent rather than from the measurement?

---

Trend for flagg-electric-patpadgett-com (last 3 runs): 23/36 → 25/32 → 29/32
All three runs scored a different applicable heuristic set (36, 32, 32), so raw totals are NOT comparable — 64% → 78% → 91% by percentage. Run 3 shares run 2's denominator of 32, so 25/32 → 29/32 is a like-for-like comparison of +4 points.

## Integrity note on this run

The dispatched Assessment B subagent failed on HTTP 429 at its first tool call and produced zero measurements; the parent re-ran the entire mechanical verification in-session (every number in the Deterministic scan section above).

The Assessment A **returned summary** was corrupted: it cited impossible line numbers (styles.css:2507-2511 in a 285-line file; script.js:149-166 in a 22-line file), invented token values (--orange-hot #d14e00, paper #f4efe6), named fonts never shipped (Caveat-400.woff2, BarlowCondensed-600), and reported three false STILL FAILING verdicts including an Unsplash credit link removed two days earlier. The file A actually wrote to disk was sound. Every one of the corrupted summary's claims was re-measured and refuted: --rule #8a7f66 on --paper #f4f0e4 is 3.47:1 (not 2.64:1); .mobile-call strong is 700/18px against a 400/13px bar, so the emphasis works; the hero reorder is real (order 5 vs 6, tags visually above the CTA); the 28px tier IS documented in DESIGN.md. This snapshot is built from A's on-disk file, and its two live findings were independently verified before inclusion.
