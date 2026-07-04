# Portfolio Scalability Guide

This portfolio is designed to be modular and easy to expand as your personal brand grows.

## 1. Adding a Blog
- Create a new directory `app/blog/page.tsx` for the blog listing.
- Use `app/blog/[slug]/page.tsx` for individual blog posts.
- You can use MDX or a headless CMS (like Sanity or Contentful) to manage posts.

## 2. Dynamic Project Data
- Currently, projects are stored in an array within `components/Projects.tsx`.
- **To scale**: Move this array to a separate `data/projects.ts` file or fetch it from a database/CMS in a Server Component.

## 3. Backend Integration (Contact Form)
- Create a route handler at `app/api/contact/route.ts`.
- Update the `onSubmit` in `components/Contact.tsx` to POST the form data to this endpoint.
- Use services like Resend or Nodemailer to send emails.

## 4. Admin Dashboard
- Create a route group `(admin)` with a layout and page at `app/(admin)/dashboard/page.tsx`.
- Use NextAuth.js or Clerk for authentication to protect the dashboard.
- This dashboard can be used to update projects or read contact messages.

## 5. Deployment
- This project is ready for one-click deployment on **Vercel**.
- Environment variables can be added in the Vercel dashboard for any future API keys (e.g., for the contact form).
