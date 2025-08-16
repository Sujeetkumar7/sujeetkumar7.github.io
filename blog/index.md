---
title: Blog
layout: default
---

<section class="hero" style="display:flex; flex-wrap:wrap; align-items:flex-start; gap:2rem; padding:3rem 1rem; border-radius:12px; box-shadow: 0 8px 20px rgba(0,0,0,0.08);">

  <div style="flex:1; min-width:250px;">

    <!-- Welcome -->
    <h2 style="font-size:1.5rem; font-weight:700; margin-bottom:1rem;">
      Welcome to my Blog, where I share insights, tutorials, and experiences from my journey as a developer.
    </h2>

    <!-- Topics Covered -->
    <h4 style="font-size:14px; font-weight:700; margin-bottom:0.5rem;">Topics Covered</h4>
    <ul class="blog-topics">
      <li><strong>Java & Backend Development</strong> – Deep dives into Java features, Spring Boot, Microservices, Hibernate, and performance tuning.</li>
      <li><strong>Databases & Cloud</strong> – Practical tips on PostgreSQL, MongoDB, AWS services, and real-world database optimization.</li>
      <li><strong>Programming Best Practices</strong> – Clean code, design patterns, debugging strategies, and scalable architecture.</li>
      <li><strong>Learning Roadmaps</strong> – Step-by-step guides to mastering new technologies for beginners and professionals.</li>
      <li><strong>AI & Modern Tech</strong> – Easy-to-understand posts on AI/ML, observability, and integrating LLMs into applications.</li>
    </ul>

    <!-- Goal statement -->
    <p style="margin-top:1rem; font-size:0.95rem; line-height:1.5;">
      ✨ My goal is to make complex concepts simple, practical, and industry-ready, so you can apply them directly to your projects.
    </p>

    <!-- Blog search -->
    <input id="blogSearch" class="search" placeholder="🔍 Search posts…" style="margin-bottom:1.5rem; max-width:300px;" />

    <!-- Blog list -->
    <ul class="list-unstyled">
      {% for post in site.posts %}
        <li class="post-item" style="margin-bottom:1rem;">
          <a href="{{ post.url }}" style="font-weight:600; color:var(--accent); text-decoration:none;">{{ post.title }}</a>
          <span class="badge">{{ post.date | date: "%b %d, %Y" }}</span>
          <div class="small">{{ post.excerpt | strip_html | truncate: 140 }}</div>
        </li>
      {% endfor %}
    </ul>

  </div>

</section>
