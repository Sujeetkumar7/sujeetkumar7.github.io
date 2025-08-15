# Java Developer Site (Jekyll + GitHub Pages)

A complete personal site for a Senior Java Developer:
- Home (hero + featured projects + latest posts)
- Projects (cards + filter)
- Blog (search + posts)
- Resume (downloadable PDF)
- Contact (Formspree-ready)

## Deploy
1. Create a repo named `<username>.github.io`
2. Push this folder to `main`
3. In Settings → Pages, ensure it builds from `GitHub Pages` (Jekyll is enabled by default)
4. Visit https://<username>.github.io

## Write a Post
Create `_posts/YYYY-MM-DD-title.md` with frontmatter:
```yaml
---
layout: post
title: "Your Post"
categories: java spring
---
```
