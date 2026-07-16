# Warit Panyeam Portfolio Design

## Goal

Build a one-page English portfolio site for Warit Panyeam, a Fullstack Developer. The site should be closely inspired by the reference at `https://portofolio-rho-sand-92.vercel.app/` while using original copy, layout polish, and visual details.

## Audience

The page is for recruiters, hiring teams, collaborators, and freelance clients who need to quickly understand who Warit is, what he builds, and how to contact him.

## Design Direction

Use a clean, modern, high-contrast portfolio style. The page should feel close to the reference site: large split hero typography, compact availability/status text, technology tags, a scroll cue, a portfolio showcase area, and a contact/social/comment area.

The visual system will use:

- Background: mostly white or very light neutral.
- Text: near-black with muted gray secondary copy.
- Accent: subtle cool blue for interactive emphasis and focus states.
- Geometry: crisp sections, thin borders, soft shadows, and moderate radii.
- Typography: Geist from the existing Next.js app, with strong large headings and compact UI labels.

## Page Structure

### Header

The header will be simple and sticky or near-static at the top of the first viewport:

- Brand: `Warit Panyeam`
- Navigation anchors: `Work`, `Stack`, `Contact`
- CTA: `Let's Talk`

### Hero

The first viewport will carry the main portfolio identity:

- Availability/status: `Available for work`
- Main headline: `Fullstack` and `Developer` on separate large lines.
- Name: `Warit Panyeam`
- Supporting copy: `I build modern web applications from polished interfaces to reliable backend logic.`
- Tech tags: `TypeScript`, `React`, `Next.js`, `Node.js`, `Tailwind`
- Supporting line: `Explore my work below` and `Open to full-time and freelance opportunities`
- Scroll cue: `Scroll`

The hero should hint at the next section on both desktop and mobile, matching the reference site's feeling of continuation.

### Portfolio Showcase

This section will include:

- Heading: `Portfolio Showcase`
- Copy: `Explore selected projects, experience, and technical expertise.`
- Three visual tab labels: `Projects`, `Experience`, `Tech Stack`

Tabs do not need backend persistence. If implemented as static UI, they should still look intentional. If client interactivity is added, clicking each tab should update the visible content.

Initial showcased content:

- Project 1: `Dashboard Platform` - admin analytics interface with charts, filters, and responsive data views.
- Project 2: `Commerce Experience` - fullstack storefront flow with product browsing, checkout states, and backend-ready structure.
- Project 3: `Portfolio System` - fast personal site with clean UI, strong SEO metadata, and deploy-ready Next.js setup.

### Tech Stack

Represent Warit's fullstack skill set in a compact, scannable layout:

- Frontend: React, Next.js, TypeScript, Tailwind CSS
- Backend: Node.js, REST APIs, Authentication, Database design
- Tools: Git, Vercel, Figma, Postman

### Contact

The contact area will mirror the reference's bottom structure:

- Heading: `Contact Me`
- Copy: `Have something in mind? Send a message and let's connect.`
- Subheading: `Let's Build Something`
- Body: `Reach out for collaboration, freelance work, or full-time opportunities.`
- Button: `Send Message`
- Social links: `GitHub`, `LinkedIn`, `Email`

Use placeholder hrefs where real links are unavailable:

- GitHub: `https://github.com/`
- LinkedIn: `https://www.linkedin.com/`
- Email: `mailto:warit@example.com`

### Comments UI

Include a polished static comment form inspired by the reference:

- Heading: `Comments`
- Textarea placeholder: `Leave your thoughts here`
- Secondary action: `Upload Image`
- Primary action: `Post Comment`

The form is presentational only unless a later request adds backend behavior.

### Footer

Footer copy:

`(c) 2026 Warit Panyeam - All rights reserved.`

## Technical Design

Use the existing Next.js App Router structure:

- `app/page.tsx` for the homepage.
- `app/layout.tsx` for metadata and global layout language.
- `app/globals.css` for Tailwind import, CSS variables, and global body styling.

Keep the implementation lightweight. The portfolio can be mostly server-rendered static markup. If showcase tabs are interactive, isolate the client component in a small file rather than turning the whole page into a client component.

## Accessibility

- Use semantic sections with clear headings.
- Use anchor links for navigation.
- Ensure focus states are visible.
- Keep contrast high.
- Make form controls labelled or accessible via placeholder plus aria labels.
- Avoid text overlap and viewport-width font scaling.

## Responsive Behavior

Desktop:

- Wide centered layout with large hero typography.
- Hero metadata and scroll cue arranged around the main headline.
- Showcase content in responsive grids.

Mobile:

- Single-column layout.
- Hero text wraps cleanly.
- Navigation remains compact.
- Cards and contact controls stack without overflow.

## Testing And Verification

After implementation:

- Run `npm run lint`.
- Run `npm run build`.
- Start the local Next.js dev server.
- Verify desktop and mobile rendering in the browser.
- Check that anchor navigation and any tabs/buttons behave as expected.

## Out Of Scope

- Real comment storage.
- Real image upload.
- Backend contact form submission.
- Custom project detail pages.
- Real social profile URLs unless the user provides them.
