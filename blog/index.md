---
title: Blog
---

<h1>Blog</h1>
<input id="blogSearch" class="search" placeholder="Search posts…" />
<ul class="list-unstyled">
  {% for post in site.posts %}
    <li class="post-item">
      <a href="{{ post.url }}">{{ post.title }}</a>
      <span class="badge">{{ post.date | date: "%b %d, %Y" }}</span>
      <div class="small">{{ post.excerpt | strip_html | truncate: 140 }}</div>
    </li>
  {% endfor %}
</ul>
