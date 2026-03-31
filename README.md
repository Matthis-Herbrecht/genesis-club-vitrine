# Genesis Club — Sales Landing Page

A single-page, conversion-focused landing page for Genesis Club. Built with vanilla HTML, CSS, and JS — no framework, no build step.

---

## Setup

### 1. Add images

Place the following files in the `./assets/` directory:

| File | Description |
|---|---|
| `logo.png` | Genesis Club logo (transparent PNG, ~160px wide) |
| `hero-image.png` | Hero visual — moody, luxury padel/club aesthetic |
| `location-paris.png` | Location card image for Paris |
| `location-milan.png` | Location card image for Milan |
| `location-singapore.png` | Location card image for Singapore |
| `location-barcelona.png` | Location card image for Barcelona |
| `location-istanbul.png` | Location card image for Istanbul |
| `location-cannes.png` | Location card image for Cannes |
| `location-tbd.png` | Placeholder image for TBD location |

Recommended image sizes:
- Hero image: 800x1000px (portrait)
- Location images: 720x640px (landscape/square)

If images are missing, styled fallback placeholders are displayed automatically.

### 2. Configure Google Apps Script (form backend)

1. Go to [Google Sheets](https://sheets.google.com) and create a new spreadsheet
2. Go to **Extensions > Apps Script**
3. Delete the default code and paste the contents of `google-apps-script.gs`
4. Click **Deploy > New deployment**
5. Select **Web app** as the type
6. Set **Execute as:** "Me" and **Who has access:** "Anyone"
7. Click **Deploy** and authorize when prompted
8. Copy the **Web app URL**
9. In `index.html`, replace `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE` with the URL

Form submissions will appear as rows in your spreadsheet with columns: Timestamp, Name, Email, Twitter, LinkedIn, Role, Source.

### 3. Deploy

#### Vercel
```bash
npm i -g vercel
cd "Vitrine Genesis Club"
vercel
```

#### Netlify
Drag and drop the project folder onto [app.netlify.com/drop](https://app.netlify.com/drop).

#### GitHub Pages
Push to a GitHub repo, then go to **Settings > Pages** and select the branch to deploy from.

---

## Tech Stack

- HTML + CSS + Vanilla JS (single `index.html`, all inline)
- Google Fonts: Playfair Display, Sora, JetBrains Mono
- Google Apps Script for form submissions
- No dependencies, no build step

---

## Brand

- **Tagline:** "Where Ambition Meets the Court."
- **Palette:** Violet Platine Nacre
- **Tone:** Understated luxury. Sport meets deal flow.
