---
layout: default
title: Home
---

<div class="theme-toggle">
  <button id="theme-btn">🌙 Dark</button>
</div>

# Welcome to My Java Blog 👋

I’m Sujeet, a **Senior Java Developer**.  
Here, I share **Java tips, backend best practices, and real-world problem-solving**.

---

## ✨ Latest Posts
<ul>
{% for post in site.posts %}
  <li>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    <span class="date"> — {{ post.date | date: "%B %d, %Y" }}</span>
  </li>
{% endfor %}
</ul>
