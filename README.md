# Mujahid Yakubu Baita — Professional Portfolio

A complete Next.js App Router portfolio with TypeScript, Tailwind CSS v4, Motion for React, Lucide, and locally bundled Manrope fonts. No remote font, image, analytics, CMS, or database service is required.

## Run locally

Requires Node.js 20.9+ and npm.

```bash
npm ci
npm run dev
```

Open http://localhost:3000. Development and production servers bind to 0.0.0.0 for hosted previews.

```bash
npm run typecheck
npm run build
npm start
```

## Deploy

Deploy the folder as a Next.js project on Vercel, or use a Node-compatible host with `npm ci && npm run build` and `npm start`. Set `NEXT_PUBLIC_SITE_URL` to the approved public HTTPS domain **before building** so Open Graph images resolve to the correct domain. Without a domain, Next.js reports its localhost metadata fallback. No domain has been invented. `app/opengraph-image.tsx` generates the sharing image and `app/icon.svg` supplies the favicon.

Keep secrets out of `NEXT_PUBLIC_*` variables. No API credentials are necessary for this version.

## Architecture and content

- `app/page.tsx`: page entry point.
- `app/layout.tsx`: metadata, locally served fonts, root layout.
- `app/globals.css`: design tokens, custom component styles, responsive rules, Tailwind import.
- `components/portfolio.tsx`: reusable section heading and reveal primitives; navigation, identity, skills, project cards/dialogs, timeline, credentials, capability tabs, contact and footer composition.
- `components/system-visual.tsx`: abstract systems illustration and project workflow diagrams.
- `data/portfolio.ts`: centralized typed profile, skill, project, employment, education, certification, leadership and contribution data.
- `tests/portfolio.spec.ts`: browser regression checks.

Update content in the data module. Project fields support status, evidence, public and repository URLs, dates, role, and architecture tools. No repositories or project links were supplied, so none are shown. Before adding a link, validate it and add an appropriate public-facing control in the case-study component. The empty contributions array intentionally renders a case-study fallback rather than fake achievements.

## Interactions

- Active-section navigation, reading-progress indicator and accessible mobile navigation.
- Filterable 36-element skill table with button-based detail selection and strategy-experience markers.
- Seven project concepts with functional category filters and native modal dialogs (Escape dismissal, focus trap and focus return).
- Expandable professional identity card.
- Keyboard-operable capability tabs with arrow-key navigation.
- Native contact validation, honeypot, and transparent email draft workflow.
- Responsive layouts, skip link, focus outlines and reduced-motion support.

The experience timeline intentionally uses a readable vertical chronology at every size instead of a horizontal carousel. No decorative custom cursor is used. No fake admin login or backend has been added.

## Contact workflow

The form validates name, email, interest and a 10–5,000 character message, then opens the user's configured email application using `mailto:`. **It does not send email itself.** The user must send the composed draft. Its notice explicitly does not claim delivery. No personal data is sent to a server or stored by this application. A visible direct email link remains available if no mail client is configured.

For server delivery, add a server route and transactional email provider, configure server-only credentials, validate and limit inputs on the server, introduce rate limiting and provider-appropriate bot protection, and update privacy information. Only show success after the provider confirms acceptance. The honeypot in the current client-only flow is not a substitute for server anti-abuse controls.

## Approved CV integration

No CV file was supplied. `profile.cvUrl` is null, so both navigation and contact download links are hidden. After owner approval:

1. Remove date of birth, full address and other unnecessary private data from the public PDF.
2. Place the approved file at `public/Mujahid-Yakubu-Baita-CV.pdf`.
3. Set `profile.cvUrl` to `/Mujahid-Yakubu-Baita-CV.pdf` in the data module.
4. Check the direct URL returns the correct PDF and both download actions work.

Keep editable Word documents and internal notes outside `public/`.

## Missing assets and approvals

- Original CV document: the implementation uses the user-supplied brief's transcription, not independently inspected CV evidence.
- Approved portrait: absent; abstract systems illustration and initials are deliberately used. No synthetic face is represented as authentic.
- Approved public CV PDF: absent; downloads hidden.
- Confirm all CV facts and especially `October 2022–Present` employment currency. Overlapping periods are preserved.
- Project implementation status, precise contributions, evidence, dates and verified results require confirmation. Project statuses are conservative design/research labels, not live-product claims.
- No approved project logos, screenshots, MASAR URL, repository URLs, LinkedIn, GitHub or other social links were supplied. Text names and explicitly illustrative diagrams are used.
- Credentials, issuer wording, numbers and dates need owner review and any genuine verification sources. No badges or verification links are fabricated.
- Phone number omitted without permission.
- Public domain and production contact infrastructure remain owner decisions.
- No independently evidenced achievements are currently available; add approved contributions to the central data file later.

## Quality checks

```bash
npx playwright install --with-deps chromium
# Start production or development server on port 3000 in another terminal
npm test
```

Tests cover project filtering, modal open/Escape close, skill filtering/details, identity expansion, required-field validation, absence of false delivery notices, mobile navigation, page errors, and page overflow at 360, 390, 768 and 1440px under reduced-motion preferences. Production build performs TypeScript validation. Review branding, contrast, content approvals and mail-client behaviour on target devices before public launch; automated tests are not an accessibility certification.
