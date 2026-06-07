# Sogang iDS Group — Website

Static website for the **Sogang iDS Group** (Sogang Interactive Data
Science Group) at Sogang University. Typeset in Parisine (Helvetica
fallback). Color identity: **Pantone 704C** (Sogang crimson) + ember
amber accent.

## Directory Structure

```
sids-website/
├── index.html                       # Home
├── pi.html                          # Principal Investigator
├── researchers.html                 # Researchers (Recruiting)
├── publications.html                # Publications landing
├── publications-full.html           # Full Papers & Journals
├── publications-workshop.html       # §1 Short · §2 Workshop · §3 Poster · §4 Korean
├── assets/
│   ├── style.css
│   ├── nav.js
│   ├── logo-torch.svg               # Bar chart torch logo
│   ├── fonts/                       # Parisine .woff2 (optional)
│   ├── sungbok.jpg                  # ⚠️ Upload manually
│   └── sogang-logo.png              # ⚠️ Optional Sogang crest
└── cv/
    └── curriculum_vitae_sungbokshin.pdf   # ⚠️ Upload manually
```

## Logo

A **torch holding a bar chart**. Square 100×100 frame:

- **Handle**: vertical bar below the cup
- **Cup**: trapezoidal holder at center
- **5 data bars** rising above the cup, ascending in height
  (10→14→18→22→26), all same width (5)
- **4th bar is amber** (`#C88A2C`) — a data highlight
- Other bars and the torch body are Pantone 704C crimson (`#9E2A2F`)
- Small gap (0.8) between cup top and bar bases

Meaning:
- Torch = the Promethean gift (tools given to humans)
- Bar chart = data visualization, the group's research
- Amber highlight on one bar = the data-storytelling pattern —
  "look at this value" — representing how the group communicates
  findings through interactive visualization

File: `assets/logo-torch.svg` (100 × 100 viewBox)

## Palette

| Role | Name | Hex |
|---|---|---|
| Primary | **Pantone 704C** (Sogang crimson) | `#9E2A2F` |
| Primary dark | | `#6F1A1E` |
| Primary light | | `#BA3D42` |
| Accent | Ember (warm amber) | `#C88A2C` |
| Paper | Cream | `#f8f3e6` |
| Ink | | `#141414` |

## Navigation

- **Home**
- **Members** ▾ PI · Researchers
- **Publications** ▾ Full Papers & Journals · Short / Workshop / Posters
- **CV**

## Publications

Three pages:

- `publications.html` — landing with two category cards
- `publications-full.html` — Category I · peer-reviewed full papers & journals, grouped by year
- `publications-workshop.html` — Category II · four subsections:
  - §1 **Short Papers**
  - §2 **Workshop Proceedings**
  - §3 **Posters** (empty, with template comment)
  - §4 **Korean Journals · 국내 학술지** (empty, with template comment)

### Adding a Publication

**Step 1**: Paste this block into the correct year section of the HTML.
Make sure to place it **in chronological order within its year**
(newest first, within each year section):

```html
<div class="publication">
  <span class="pub-title">Title</span>
  <div class="pub-authors">
    Author, <span class="me">Sungbok Shin</span>, Author
  </div>
  <div class="pub-venue">
    Venue (YYYY), City, Country
    <span class="badge">IF=X.X</span>
  </div>
</div>
```

**Step 2 — if it's a new year**: Add a year divider ABOVE the first
paper of that year:

```html
<!-- ====== 2027 ====== -->
<div class="pub-year">· 2027 ·</div>
```

Year dividers live on their own line (not inside a `<div class="publication">`).
Place newer years ABOVE older years in the HTML.

**Step 3 — update the counter** in `assets/style.css`. Papers are
numbered with the oldest as `01` (standard academic CV convention),
so adding a paper pushes the counter up by one:

- For `publications-full.html` → find `.pub-list { counter-reset: pub 14; }`
  and change `14` to `15` (new total + 1).
- For `publications-workshop.html` → find
  `.pub-list.workshop-list { counter-reset: pub 6; }` and change `6` to `7`.

The value should always equal **(total papers on that page) + 1**.

### Korean journal entry

```html
<div class="publication">
  <span class="pub-title ko">논문 제목</span>
  <div class="pub-authors">
    저자1, <span class="me">Sungbok Shin</span>, 저자3
  </div>
  <div class="pub-venue ko">
    한국정보과학회 학술지, Vol. X, No. Y, YYYY
  </div>
</div>
```

## Site Header Lockup

The top-left header now has **two logos side by side** followed by the
wordmark:

```
[Sogang crest] · [iDS torch] │ Sogang University
                             │ Sogang iDS Group
                             │ Sogang Interactive Data Science Group
```

Both icons are height-locked to 42px. The iDS torch is a square 42×42,
and the Sogang crest keeps its original shield aspect ratio (its width
follows naturally from the 42px height). The Sogang logo was processed
from the official Sogang symbol PNG with its black background removed
and cropped tight to the shield.

```html
<div class="site-identifier">
  <div class="sogang-mark">
    <img src="assets/sogang-logo.png" alt="Sogang University">
  </div>
  <div class="logo-mark">
    <img src="assets/logo-torch.svg" alt="Sogang iDS Group">
  </div>
  <div class="logo-divider"></div>
  <div class="lockup">
    <div class="lockup-top">Sogang University</div>
    <div class="lockup-main">Sogang iDS Group</div>
    <div class="lockup-sub">Sogang Interactive Data Science Group</div>
  </div>
</div>
```

## Parisine Font (Optional)

Commercial typeface from Typofonderie. Purchase at
[typofonderie.com/fonts/parisine](https://typofonderie.com/fonts/parisine),
drop `.woff2` files into `assets/fonts/`, and uncomment the `@font-face`
block at the top of `assets/style.css`. Without it, Helvetica is used.

## Deploy to GitHub Pages

1. Create a repo (e.g. `yourusername.github.io`)
2. Push this folder's contents
3. Settings → Pages → source = `main` / root
4. Live at `https://yourusername.github.io/`
