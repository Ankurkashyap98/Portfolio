# Ankur — MERN Stack Developer Portfolio

Premium dark portfolio with green accent lighting, built with React (Vite), Tailwind CSS, Framer Motion, GSAP, and Lenis.

## Quick start

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal (usually `http://localhost:5173`).

## Customize content

Edit files in `src/data/` only — components stay untouched:

| File | Content |
|------|---------|
| `site.js` | Name, role, SEO, resume URL |
| `hero.js` | Hero copy & CTAs |
| `about.js` | About cards & counters |
| `experience.js` | Timeline roles |
| `skills.js` | Skill categories |
| `projects.js` | Featured projects (RentReadBuy, ItsBot, TechNova, SavorTable) |
| `freelance.js` | Freelance collaboration work |
| `services.js` | Service offerings |
| `contact.js` | Contact details & form fields |
| `social.js` | Social links |
| `navigation.js` | Navbar links |
| `testimonials.js` | Testimonials |
| `footer.js` | Footer / loading copy |

## EmailJS

1. Copy `.env.example` → `.env`
2. Fill `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`
3. Restart `npm run dev`

Without keys, the contact form still succeeds in **mock mode** so demos work.

## Resume

Place your PDF at `public/resume.pdf` (or update `resumeUrl` in `src/data/site.js`).

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run preview` — preview production build

## Stack

React · Vite · JavaScript · Tailwind CSS · Framer Motion · GSAP · Lenis · React Router · EmailJS · React Helmet Async · React Icons
