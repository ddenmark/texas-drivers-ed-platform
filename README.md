# Texas Driver's Ed Training Course Builder & Website Service - Project Starter

**Goal:** Build a compliant, TDLR-approved online driver's education platform and course builder service, starting with Texas. Courses must be 100% legal for real driver training and licensing (issuing valid DE-964 / ADE-1317 certificates).

**Important Legal Note:** 
- Only TDLR-approved Driver Education providers can issue valid certificates for licensing purposes.
- The curriculum must align with the official **Program of Organized Instruction in Driver Education and Traffic Safety (POI-DE)** (latest edition adopted by reference in 16 TAC §84.3).
- This project requires becoming or partnering with a TDLR-approved provider. Content alone does not make it legal.
- New 2026+ requirement: Include construction/work zone driving safety information.

**Project Phases:**
1. Research & Compliance Setup (Current)
2. Business Formation & TDLR Application Preparation
3. Curriculum Development (aligned to POI-DE)
4. Platform MVP (Website + Interactive Course Demo)
5. Full Student Portal + Certificate System + Reporting
6. Course Builder Tools (for internal use or SaaS to other schools)
7. Launch, Marketing, Scaling

**Current Status (May 25, 2026):** Initial research complete. Requirements documented. Sample compliant module structure outlined. Basic project files created.

**Key Resources:**
- TDLR Driver Education: https://www.tdlr.texas.gov/driver/education/
- DPS Learner License Teen: https://www.dps.texas.gov/section/driver-license/texas-learners-license-teen
- POI-DE: Obtain latest from TDLR (adopted by reference; providers get access).
- PTDE Program Guide: Parents purchase from TDLR for BTW portion.

**Next Immediate Steps:**
- User: Form Texas LLC if needed, research TDLR application process in detail (visit TDLR site or call).
- We (Grok): Refine curriculum outline, create more prototype pages, help draft application materials or business plan sections.

**Tech Stack Recommendation (MVP to Production):**
- **Frontend:** Next.js 15 (App Router), TypeScript, Tailwind CSS, shadcn/ui components.
- **Backend/Auth/DB:** Supabase (PostgreSQL, Auth, Storage, Edge Functions) for rapid compliant MVP. Or Firebase.
- **Video/Content:** Mux.com or Bunny.net for streaming + analytics (watch time tracking).
- **Quizzes/Interactive:** Custom React components + state management (Zustand or React Query).
- **Certificates:** jsPDF or @react-pdf/renderer + unique control numbers + QR verification.
- **Payments:** Stripe (subscriptions + one-time course purchases).
- **Admin/Course Builder:** Custom dashboard with rich text editor (TipTap), quiz builder, preview mode.
- **Hosting:** Vercel (frontend) + Supabase.
- **Compliance Extras:** Audit logging, role-based access (Student, Parent, Admin, School), data export for TDLR uploads.

**Folder Structure:**
- /docs/ - Business plan, compliance checklist, curriculum details.
- /prototype/ - HTML/Next.js starter for marketing site + course demo.
- /content/ - Lesson outlines, scripts, assets plan.
- /legal/ - TDLR rules summaries, templates.

Start here. Let's build this step by step to make it real and legal.
