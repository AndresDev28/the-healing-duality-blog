# 🌿 The Healing Duality Blog

> **Official blog for 'The Healing Duality' YouTube channel.** > High-performance SSG (Static Site Generation) focused on organic growth and psychology content.  
> **Stack:** Next.js + Tailwind CSS + MDX.

---

## 🎯 Project Overview & Vision
This platform serves as a digital extension of [Andreína Fernández's YouTube Channel](https://www.youtube.com/@andreinafernandez785). The goal is to transform video insights into SEO-optimized articles, capturing organic traffic and monetizing through Google AdSense with $0 infrastructure costs.

## 🚀 Product Requirements (PRD)

### 1. Key Objectives
- **Performance:** 90+ Score on Google PageSpeed (Mobile/Desktop).
- **SEO:** Automated JSON-LD, Sitemap, and OpenGraph tags.
- **Monetization:** Strategic AdSense placement via `<AdUnit />` components.
- **Maintenance:** Content-as-code approach (MDX files in `/content`).

### 2. SDD: Content Schema (Frontmatter)
All posts must strictly follow this schema in the `.mdx` files:

| Field | Type | Description |
| :--- | :--- | :--- |
| `title` | String | SEO Title (H1) |
| `description` | String | Meta-description (max 160 chars) |
| `date` | ISO Date | Publication date for sorting/sitemap |
| `image` | String | Cover image path |
| `videoID` | String | Related YouTube Video ID |
| `tags` | Array | Categories for filtering |

### 3. Tech Stack Details
- **Framework:** Next.js 14+ (App Router).
- **Styling:** Tailwind CSS.
- **Content Engine:** MDX (using Velite or Contentlayer).
- **Deployment:** Vercel (Hobby Tier).

## 🛠 Development Workflow
This project follows an **SDD (Schema-Driven Development)** approach. 
1. Define the UI components in Tailwind.
2. AI Agents generate content files based on YouTube transcripts.
3. Git Push triggers a static build on Vercel.

## 💰 Monetization Strategy
- **Lazy Loading Ads:** AdSense scripts loaded `afterInteractive`.
- **Ad Placements:** Under H1, middle of the article, and post-footer.

---
*Created with ❤️ to bridge Psychology, Spirituality, and Technology.*