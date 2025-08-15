---
title: Home
---

<section class="hero">
  <div>
    <h1>Hi, I'm Sujeet — Senior Java Developer</h1>
    <p class="small">Java • Spring Boot • Microservices • AWS • Kafka • PostgreSQL</p>
    <p>I design and build reliable backend systems at scale. I love writing clean code, evolving architectures, mentoring teams, and sharing what I learn.</p>
    <p>
      <a class="btn" href="/projects">View Projects</a>
      <a class="btn ghost" href="/blog">Read Blog</a>
    </p>
    <ul class="list-unstyled">
      <li>✅ 10+ production microservices delivered</li>
      <li>✅ Kafka streaming, exactly-once semantics, idempotency</li>
      <li>✅ Observability: OpenTelemetry, Grafana, Prometheus</li>
    </ul>
  </div>
  <div>
    <img class="avatar" src="/assets/images/avatar-placeholder.png" alt="Developer avatar">
  </div>
</section>

<div class="card">
  <h2>Featured Projects</h2>
  <div class="grid cards">
    <div class="card project-card">
      <h3>Audit Service (Spring Boot + Kafka)</h3>
      <p class="small">Event-sourced audit trail with PostgreSQL history tables.</p>
      <span class="tag">Spring Boot</span><span class="tag">Kafka</span><span class="tag">PostgreSQL</span>
      <p><a class="btn" href="/projects/audit-service">Details</a></p>
    </div>
    <div class="card project-card">
      <h3>Entity Store Publisher</h3>
      <p class="small">Contracts, schema evolution & CDC with GoldenGate.</p>
      <span class="tag">CDC</span><span class="tag">Kafka</span><span class="tag">Schema</span>
      <p><a class="btn" href="/projects/entity-store">Details</a></p>
    </div>
  </div>
</div>

<div class="card">
  <h2>Latest from the Blog</h2>
  <ul class="list-unstyled">
    {% for post in site.posts limit:3 %}
      <li class="post-item"><a href="{{ post.url }}">{{ post.title }}</a> <span class="badge">{{ post.date | date: "%b %d, %Y" }}</span></li>
    {% endfor %}
  </ul>
  <p><a class="btn" href="/blog">See all posts</a></p>
</div>
