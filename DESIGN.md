# Design guidance for Pathfinder

Read this before changing any UI. These rules exist so the app looks
deliberate rather than generated.

## The core split

The app has two moods and they must stay different.

**Quiz screens are playful.** Warm, casual, fast. This is the hook.

**Role detail screen is sober.** This is where we claim credibility with
real counts from real job ads. It should feel like a reference document,
not a game. Clean, calm, generous spacing, no decoration.

Keeping these visually distinct is intentional. Do not homogenise them.

## Hierarchy

Not everything can be important. Three levers:

| Lever | Primary | Secondary | Tertiary |
|---|---|---|---|
| Size | Large | Base | Small |
| Weight | 600 | 500 | 400 |
| Colour | #111 | #666 | #999 |

**Combine, don't multiply.** Primary text is large OR bold OR dark — not
all three. Save all three for the single most important element on a screen.

Labels support data, they don't compete with it. On the role detail page,
the requirement text is primary; the count badge and the note are secondary
and tertiary.

## Spacing

Use only this scale. No arbitrary values.

```
4px   tight coupling (icon and its label)
8px   related elements
16px  standard gap
24px  section internal
48px  between sections
64px  major breaks
```

Start with too much white space, then remove. Dense feels overwhelming;
generous feels considered.

## Colour

- Neutral base. Warm grays throughout — pick one temperature and stay in it.
- **Exactly one accent colour.** Saturation under 80%.
- No purple-blue AI gradients, no neon, no glows. That palette reads as
  generated and judges have seen it forty times.
- Suggested accent: a deep warm orange or a strong green. Avoid corporate blue.
- Must-have and nice-to-have need to differ, but use muted tones rather than
  alarm red and traffic-light green.

## Typography

- Body text never below 16px. This app is read on phones by people whose
  first language may not be English.
- Line height 1.6 for body, 1.2 for headings.
- Max line length 65 characters for any paragraph.
- One typeface. Two weights (400 and 600). That is enough.

## Motion

- Animate only `transform` and `opacity`. Never `width`, `height`, `top`, `left`.
- Tapped options: `scale(0.98)` on active, then settle. Physical, quick.
- Progress bar fills smoothly on advance.
- Quiz options stagger in, roughly 60ms apart. Do not stagger the role
  detail sections — that screen should appear instantly and calmly.
- Everything under 300ms. Nothing loops forever.

## Touch targets

- Minimum 44px tall for anything tappable.
- Quiz options are full-width cards, not radio buttons.
- Disabled category cards must look genuinely disabled — reduced contrast,
  no hover state, cursor default.

## Interaction states

Build all of them, not just the happy path:

- **Selected** — clear and immediate
- **Disabled** — visibly inert
- **Empty** — the "requirements coming soon" state should be composed, not
  an apology. Say what is available instead.

## What not to do

- No meme images or copyrighted graphics
- No stock photography
- No card containers around everything — use spacing and dividers to group
- No shadows unless elevation means something
- No centred hero with a gradient headline
- No emoji on the role detail screen

## Accessibility

Real requirement, and it is scored.

- Contrast at least 4.5:1 for body text
- Every interactive element reachable by keyboard, with a visible focus ring
- Plain language everywhere — short sentences, no idioms
- Works at 320px width
