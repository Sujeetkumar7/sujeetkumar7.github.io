---
title: Home
---
<!-- HERO SECTION -->
<section class="hero" style="display:flex; flex-wrap:wrap; align-items:center; gap:2rem; padding:3rem 1rem; color:#1f2937;">
  <div style="flex:1; min-width:300px;">
    <h1 style="font-size:2.5rem; margin-bottom:0.5rem;">Hi, I'm Sujeet — Senior Java & AI Specialist</h1>
    <p class="small" style="font-size:1rem; opacity:0.85; margin-bottom:1rem;">
      Java • Spring Boot • Microservices • AWS • Kafka • PostgreSQL • AI/ML • NLP • Observability
    </p>
    <p style="font-size:1.1rem; line-height:1.6; margin-bottom:1.5rem;">
      I design and deliver intelligent backend systems with practical AI and ML integration. I mentor teams, enforce best practices, and build scalable solutions with measurable impact.
    </p>
    <p>
      <a class="btn" href="/projects" style="background:#1f2937; color:white; padding:0.6rem 1.2rem; border-radius:8px; font-weight:600; text-decoration:none; margin-right:10px;">View Projects</a>
      <a class="btn ghost" href="/blog" style="background:transparent; border:2px solid #1f2937; color:#1f2937; padding:0.6rem 1.2rem; border-radius:8px; font-weight:600; text-decoration:none;">Read Blog</a>
    </p>
    <ul class="list-unstyled" style="margin-top:1.5rem; line-height:1.8;">
      <li>✅ Delivered 10+ production microservices with AI/ML components</li>
      <li>✅ Kafka streaming, idempotent event processing, distributed systems</li>
      <li>✅ Built AI pipelines: predictive analytics, NLP models, recommendation engines</li>
      <li>✅ Observability & monitoring: OpenTelemetry, Prometheus, Grafana</li>
      <li>✅ Mentored teams & enforced engineering best practices</li>
      <li>✅ Hands-on implementation of AI-driven solutions in production</li>
    </ul>
  </div>

  <div style="flex:1; min-width:250px; text-align:center;">
    <img class="avatar" src="/assets/images/avatar-placeholder.png" alt="Developer avatar" style="border-radius:50%; max-width:200px; box-shadow:0 8px 20px rgba(0,0,0,0.1); transition: transform 0.3s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
  </div>
</section>

<!-- VISITOR COUNTER -->
{% include visitor-counter.html %}

<!-- FEATURED PROJECTS -->
<div class="card" style="margin-top:3rem;">
  <h2 style="margin-bottom:1rem;">Featured Projects</h2>
  <div class="grid cards" style="display:grid; grid-template-columns:repeat(auto-fit, minmax(300px, 1fr)); gap:1.5rem;">

    <div class="card project-card" style="padding:1rem; border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.05); transition: transform 0.3s, box-shadow 0.3s; background:white;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 12px 25px rgba(0,0,0,0.1)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 6px 15px rgba(0,0,0,0.05)'">
      <h3 style="margin-bottom:0.5rem;">LLM Observability Dashboard (In Progress)</h3>
      <p class="small" style="margin-bottom:0.8rem;">
        Real-time observability for AI services: monitoring prompt latency, model performance, quality metrics, and safety events to ensure reliable AI in production.
      </p>
      <div style="margin-bottom:0.8rem;">
        <span class="tag" style="background:#f3f4f6; color:#1f2937; padding:2px 6px; border-radius:6px; margin-right:4px; font-size:0.85rem;">Python</span>
        <span class="tag" style="background:#f3f4f6; color:#1f2937; padding:2px 6px; border-radius:6px; margin-right:4px; font-size:0.85rem;">FastAPI</span>
        <span class="tag" style="background:#f3f4f6; color:#1f2937; padding:2px 6px; border-radius:6px; font-size:0.85rem;">OpenTelemetry</span>
      </div>
      <p><a class="btn" href="/projects/llm-obs.md" style="background:#1f2937; color:white; padding:0.5rem 1rem; border-radius:8px; text-decoration:none; font-weight:600;">View Details</a></p>
    </div>

  </div>
</div>

<!-- LATEST BLOG POSTS -->
<div class="card" style="margin-top:3rem;">
  <h2 style="margin-bottom:1rem;">Latest from the Blog</h2>
  <div class="grid cards" style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:1.5rem;">
    {% for post in site.posts limit:3 %}
    <div class="post-card" style="padding:1rem; border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.05); background:white; transition: transform 0.3s, box-shadow 0.3s;"
         onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 12px 25px rgba(0,0,0,0.1)';"
         onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 6px 15px rgba(0,0,0,0.05)';">
      <h3 style="margin-bottom:0.5rem;"><a href="{{ post.url }}" style="color:#1f2937; text-decoration:none; transition: color 0.3s;" onmouseover="this.style.color='#4f46e5'" onmouseout="this.style.color='#1f2937'">{{ post.title }}</a></h3>
      <p class="small" style="color:#555; font-size:0.9rem; margin-bottom:0.5rem;">
        {{ post.excerpt | strip_html | truncate: 120 }}
      </p>
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap;">
        <span class="badge" style="background:#f3f4f6; color:#1f2937; font-size:0.75rem; padding:2px 6px; border-radius:6px;">{{ post.date | date: "%b %d, %Y" }}</span>
        <!-- Dynamic tags from each post -->
        {% for tag in post.tags %}
          <span class="tag" style="background:#f3f4f6; color:#1f2937; font-size:0.75rem; padding:2px 6px; border-radius:6px; margin-top:4px; margin-left:4px;">{{ tag }}</span>
        {% endfor %}
      </div>
    </div>
    {% endfor %}
  </div>
  <p style="margin-top:1.5rem;"><a class="btn" href="/blog" style="background:#1f2937; color:white; padding:0.6rem 1.2rem; border-radius:8px; font-weight:600; text-decoration:none;">See All Posts</a></p>
</div>
