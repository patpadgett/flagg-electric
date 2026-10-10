# Design system

Built using Impeccable, code-led. Actual Flagg flag-pattern wordmark is preserved unchanged in the header. Palette extends the source logo to a Lake-area waterfront context.

- Navy `#102b3f`: hero/footer, main typography.
- Flag red `#c9342e`: primary calls to action, contact section.
- Off-white `#f4f5f2`: default canvas. White: header and about section.
- Pale blue-gray `#e6ebec`: project gallery.
- Peach `#f2be8d`: lake-life headline emphasis, echoing the photographed dock lighting.
- Muted body `#52616a`; rules `#d2d8d9`.
- Barlow regular and bold: body, controls; Barlow Condensed bold: display and section titles. Fonts self-hosted.
- No nested cards; open ruled service rows, asymmetric photo gallery, one outlined BBB proof block.
- Desktop hero: two equal columns, portrait source photograph and dominant stacked lettering. Mobile hero stacks text and image and preserves explicit line breaks.
- Layout widths: mobile <=760px; intermediate <=1050px. Section padding reduces from 100px/7% to 60px/7%.
- One small circuit-draw animation; reduced-motion disables it. Hover changes color, native FAQ disclosure; accessible mobile navigation with Escape and section-link dismissal.
- All text is HTML. Real photos have descriptive alt text, fixed dimensional attributes and lazy loading except header/hero.

Functional QA evidence in qa/results.json and screenshots. First inspection found mobile headline overflow caused by suppressing line breaks; fixed by restoring explicit breaks rather than hiding overflow. Mechanical detector was not run because this installation is known broken. Independent finish review remains available to parent agent.
