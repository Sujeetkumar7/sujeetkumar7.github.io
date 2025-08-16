---
title: Home
---

<!-- HERO SECTION -->
<section class="hero">
  <!-- Left Content -->
  <div class="hero-content">
    <h1>
      👋 Hi, I'm <span class="highlight">Sujeet</span> — Senior Java & AI Specialist
    </h1>

    <p class="skills">
      Java • Spring Boot • Microservices • AWS • Kafka • PostgreSQL • AI/ML • NLP • Observability
    </p>

    <p class="intro">
      I design and deliver <strong>scalable backend systems</strong> with practical 
      <span class="highlight">AI/ML integration</span>.  
      I mentor teams, enforce engineering best practices, and build intelligent solutions with measurable impact.
    </p>

    <div class="buttons">
      <a class="btn primary" href="/projects">🚀 View Projects</a>
      <a class="btn ghost" href="/blog">✍️ Read Blog</a>
    </div>

    <ul class="achievements">
      <li>✅ Delivered 10+ production microservices with AI/ML components</li>
      <li>✅ Kafka streaming, idempotent event processing, distributed systems</li>
      <li>✅ Built AI pipelines: predictive analytics, NLP models, recommendation engines</li>
      <li>✅ Observability & monitoring: OpenTelemetry, Prometheus, Grafana</li>
      <li>✅ Mentored teams & enforced engineering best practices</li>
      <li>✅ Hands-on implementation of AI-driven solutions in production</li>
    </ul>
  </div>

  <!-- Right Avatar -->
  <div class="hero-avatar">
    <img class="avatar" src="/assets/images/avatar-placeholder.png" alt="Developer avatar">
  </div>
</section>

<!-- VISITOR COUNTER -->
{% include visitor-counter.html %}

<!-- FEATURED PROJECTS -->
<div class="card-section">
  <h2>Featured Projects</h2>
  <div class="grid cards">
    <div class="card project-card">
      <h3>LLM Observability Dashboard (In Progress)</h3>
      <p>
        Real-time observability for AI services: monitoring prompt latency, model performance, quality metrics, and safety events to ensure reliable AI in production.
      </p>
      <div class="tags">
        <span class="tag">Python</span>
        <span class="tag">FastAPI</span>
        <span class="tag">OpenTelemetry</span>
      </div>
      <p><a class="btn small" href="/projects/llm-obs.md">View Details</a></p>
    </div>
  </div>
</div>

<!-- LATEST BLOG POSTS -->
<div class="card-section">
  <h2>Latest from the Blog</h2>
  <div class="grid cards">
    {% for post in site.posts limit:3 %}
    <div class="post-card">
      <h3>
        <a href="{{ post.url }}">{{ post.title }}</a>
      </h3>
      <p class="excerpt">{{ post.excerpt | strip_html | truncate: 120 }}</p>
      <div class="meta">
        <span class="badge">{{ post.date | date: "%b %d, %Y" }}</span>
        {% for tag in post.tags %}
          <span class="tag">{{ tag }}</span>
        {% endfor %}
      </div>
    </div>
    {% endfor %}
  </div>
  <p><a class="btn small" href="/blog">See All Posts</a></p>
</div>

<!-- GLOBAL STYLES -->
<style>
  body { background: #ffffff; color: #1f2937; font-family: Arial, sans-serif; }

  /* HERO */
  .hero {
    display:flex; flex-wrap:wrap; align-items:center; gap:3rem; padding:4rem 1rem;
  }
  .hero-content { flex:1; min-width:320px; }
  .hero-content h1 { font-size:2.8rem; font-weight:700; margin-bottom:0.7rem; line-height:1.2; }
  .hero-content .highlight { color: #2563eb; }
  .skills { font-size:1rem; opacity:0.85; margin-bottom:1.2rem; letter-spacing:0.3px; }
  .intro { font-size:1.15rem; line-height:1.7; margin-bottom:2rem; max-width:600px; }
  .buttons { margin-bottom:2rem; }
  .achievements { list-style:none; padding-left:0; margin-top:1.5rem; line-height:1.9; font-size:1rem; }

  /* Avatar */
  .hero-avatar { flex:1; min-width:280px; text-align:center; }
  .avatar {
    border-radius:50%; max-width:220px;
    box-shadow:0 8px 25px rgba(0,0,0,0.15);
    transition: transform 0.4s ease, box-shadow 0.4s ease;
  }
  .avatar:hover {
    transform:scale(1.08) rotate(2deg);
    box-shadow:0 12px 30px rgba(0,0,0,0.25);
  }

  /* Buttons */
  .btn {
    display:inline-block; text-decoration:none; font-weight:600;
    border-radius:10px; transition:all 0.3s; cursor:pointer;
  }
  .btn.primary { background:#2563eb; color:#fff; padding:0.75rem 1.5rem; margin-right:12px; }
  .btn.ghost { background:transparent; border:2px solid #2563eb; color:#2563eb; padding:0.75rem 1.5rem; }
  .btn.small { padding:0.5rem 1rem; border-radius:8px; background:#1f2937; color:#fff; }
  .btn:hover { background:#1e40af; color:white; transform:translateY(-3px); box-shadow:0 5px 15px rgba(0,0,0,0.2); }
  .btn.ghost:hover { background:#2563eb; color:white; }

  /* Cards */
  .card-section { margin-top:3rem; }
  .grid.cards { display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:1.5rem; }
  .card, .post-card {
    padding:1rem; border-radius:12px; background:#ffffff;
    box-shadow:0 6px 15px rgba(0,0,0,0.05);
    transition: transform 0.3s, box-shadow 0.3s;
  }
  .card:hover, .post-card:hover { transform:translateY(-5px); box-shadow:0 12px 25px rgba(0,0,0,0.1); }
  .card h3, .post-card h3 { margin-bottom:0.5rem; }
  .post-card h3 a { color:#1f2937; text-decoration:none; transition: color 0.3s; }
  .post-card h3 a:hover { color:#1e40af; }
  .excerpt { color:#555; font-size:0.9rem; margin-bottom:0.5rem; }

  /* Tags */
  .tag, .badge {
    background:#f3f4f6; color:#1f2937;
    padding:2px 6px; border-radius:6px; font-size:0.8rem;
    margin-right:4px; margin-top:4px; display:inline-block;
  }
  .meta { display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; }
</style>
