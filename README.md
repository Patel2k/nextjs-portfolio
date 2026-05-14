# Ajay Patel K A — Next.js Portfolio

Clean, professional personal portfolio with a football/FIFA aesthetic.
Built with **Next.js 14 App Router + TypeScript** — no build-step sprawl,
just `npm install` and go.

---

## Quick start

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Deploy to Vercel (recommended, free)

```bash
npm i -g vercel
vercel
```

Or push to GitHub and import at **vercel.com/new** — it auto-detects Next.js.

## Deploy to Netlify

```bash
npm run build
# Upload the `.next/` folder, or connect the GitHub repo at app.netlify.com
```

---

## Optional: Password protection

Add a `.env.local` file (never commit this):

```
BASIC_AUTH_USER=yourname
BASIC_AUTH_PASS=yourpassword
```

The `middleware.ts` file reads these and gates the entire site behind
HTTP Basic Auth. Remove `middleware.ts` for a fully public portfolio.

On Vercel, set the same vars in **Project → Settings → Environment Variables**.

---

## Project structure

```
├── app/
│   ├── layout.tsx      # Fonts, metadata, root layout
│   ├── page.tsx        # Composes all section components
│   └── globals.css     # All design tokens + component styles
├── components/
│   ├── RevealInit.tsx  # Client island: scroll reveals, counters, card tilt
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── PlayerCard.tsx  # FIFA-style animated card
│   ├── StatsStrip.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Career.tsx
│   ├── Projects.tsx
│   ├── Honors.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── data/
│   └── resume.ts       # ← Edit your info here
└── middleware.ts        # Optional basic-auth gate
```

## Updating content

All content lives in **`data/resume.ts`** — edit your name, contact links,
stats, skills, experience, projects, and honors there. No other file needs
to change for content updates.

---

## Tech stack

| Layer    | Choice                                  |
|----------|-----------------------------------------|
| Framework| Next.js 14 (App Router)                 |
| Language | TypeScript                              |
| Styling  | CSS custom properties (no Tailwind dep) |
| Fonts    | next/font/google (zero layout shift)    |
| Deploy   | Vercel / Netlify / any Node host        |

## Contact

✉ ajaypatelka2002@gmail.com · [LinkedIn](https://linkedin.com/in/patel-k-a-)
