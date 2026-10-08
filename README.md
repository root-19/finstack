# Finstack company profile

Company profile website for Finstack, built with Next.js 16 (App Router), React 19, Tailwind CSS 4 and TypeScript.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Pages

| Route       | File                        |
|-------------|-----------------------------|
| `/`         | `app/page.tsx`              |
| `/services` | `app/services/page.tsx`     |
| `/projects` | `app/projects/page.tsx`     |
| `/about`    | `app/about/page.tsx`        |
| `/contact`  | `app/contact/page.tsx`      |

## Editing content

All copy, including the company name, founder details, contact info, services, projects, FAQs and values, lives in
[`lib/site.ts`](lib/site.ts). Edit that file and the pages update. Placeholders are marked `TODO`.

To add a founder photo, put it in `public/` (e.g. `public/founder.jpg`) and set `founder.photo` to `"/founder.jpg"`. Icons are referenced by name; add new ones to
[`components/icon.tsx`](components/icon.tsx).

Brand colours are defined as `brand-*` and `ink-*` tokens in [`app/globals.css`](app/globals.css).

## Contact form

The form posts to `app/api/contact/route.ts`, which validates the input and currently only logs it on the server.
Connect it to an email service, Slack webhook or CRM before launch (see the `TODO` in that file).
