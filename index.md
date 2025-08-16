---
title: Home
---
<!-- HERO SECTION -->
<section class="hero" style="display:flex; flex-wrap:wrap; align-items:center; gap:3rem; padding:4rem 1rem; color:#1f2937; font-family:Arial, sans-serif;">

  <!-- Left Content -->
  <div style="flex:1; min-width:320px;">
    <h1 style="font-size:2.8rem; margin-bottom:0.7rem; font-weight:700; line-height:1.2;">
      👋 Hi, I'm <span style="color:#2563eb;">Sujeet</span> — Senior Java & AI Specialist
    </h1>

    <p class="small" style="font-size:1rem; opacity:0.85; margin-bottom:1.2rem; letter-spacing:0.3px;">
      Java • Spring Boot • Microservices • AWS • Kafka • PostgreSQL • AI/ML • NLP • Observability
    </p>
    
    <p style="font-size:1.15rem; line-height:1.7; margin-bottom:2rem; max-width:600px;">
      I design and deliver <strong>scalable backend systems</strong> with practical 
      <span style="color:#2563eb;">AI/ML integration</span>.  
      I mentor teams, enforce engineering best practices, and build intelligent solutions with measurable impact.
    </p>
    
    <div style="margin-bottom:2rem;">
      <a class="btn" href="/projects" 
         style="background:#2563eb; color:white; padding:0.75rem 1.5rem; border-radius:10px; font-weight:600; text-decoration:none; margin-right:12px; transition:all 0.3s;">
         🚀 View Projects
      </a>
      <a class="btn ghost" href="/blog" 
         style="background:transparent; border:2px solid #2563eb; color:#2563eb; padding:0.75rem 1.5rem; border-radius:10px; font-weight:600; text-decoration:none; transition:all 0.3s;">
         ✍️ Read Blog
      </a>
    </div>
    
    <ul class="list-unstyled" style="margin-top:1.5rem; line-height:1.9; font-size:1rem; list-style:none; padding-left:0;">
      <li>✅ Delivered 10+ production microservices with AI/ML components</li>
      <li>✅ Kafka streaming, idempotent event processing, distributed systems</li>
      <li>✅ Built AI pipelines: predictive analytics, NLP models, recommendation engines</li>
      <li>✅ Observability & monitoring: OpenTelemetry, Prometheus, Grafana</li>
      <li>✅ Mentored teams & enforced engineering best practices</li>
      <li>✅ Hands-on implementation of AI-driven solutions in production</li>
    </ul>
  </div>

  <!-- Right Avatar -->
  <div style="flex:1; min-width:280px; text-align:center;">
    <img class="avatar" src="/assets/images/avatar-placeholder.png" alt="Developer avatar" 
         style="border-radius:50%; max-width:220px; box-shadow:0 8px 25px rgba(0,0,0,0.15); transition: transform 0.4s ease, box-shadow 0.4s ease;"
         onmouseover="this.style.transform='scale(1.08) rotate(2deg)'; this.style.boxShadow='0 12px 30px rgba(0,0,0,0.25)';"
         onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 8px 25px rgba(0,0,0,0.15)';">
  </div>

</section>

<!-- Small CSS for buttons hover -->
<style>
  .hero .btn:hover {
    background:#1e40af !important;
    color:white !important;
    transform:translateY(-3px);
    box-shadow:0 5px 15px rgba(0,0,0,0.2);
  }
  .hero .btn.ghost:hover {
    background:#2563eb !important;
    color:white !important;
  }
</style>

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
