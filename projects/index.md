---
title: Projects
layout: default
---

<section class="hero" style="padding:3rem 1rem; border-radius:12px; box-shadow: 0 8px 20px rgba(0,0,0,0.08);">
    <!-- Welcome -->
    <h2 style="font-size:1.5rem; font-weight:700; margin-bottom:1rem;">
     Explore a curated collection of my professional and personal projects.  
  Quickly filter by technology, framework, or project name to find what interests you most.
    </h2>

  <!-- Project filter input -->
  <input id="filterInput" class="search" placeholder="🔍 Filter projects by tech or name…" style="margin-bottom:1.5rem; max-width:300px;" />

  <!-- Projects grid -->
  <div class="grid cards">

    <div class="card project-card">
      <h3><a href="/projects/llm-obs">LLM Observability Dashboard (In Progress)</a></h3>
      <p class="small">
        Metrics & tracing for AI services: prompt latency, quality monitoring, and safety event tracking.
      </p>
      <span class="tag">Python</span>
      <span class="tag">FastAPI</span>
      <span class="tag">OpenTelemetry</span>
      <span class="tag">Grafana</span>
    </div>

    <div class="card project-card">
      <h3><a href="/projects/java-microservices">Java Microservices Platform</a></h3>
      <p class="small">
        Scalable microservices architecture with Spring Boot, Kafka, and PostgreSQL.  
        Focused on high throughput and resilience.
      </p>
      <span class="tag">Java</span>
      <span class="tag">Spring Boot</span>
      <span class="tag">Kafka</span>
      <span class="tag">PostgreSQL</span>
    </div>

    <div class="card project-card">
      <h3><a href="/projects/aws-serverless">AWS Serverless Data Pipeline</a></h3>
      <p class="small">
        Serverless ETL pipeline using AWS Lambda, S3, and DynamoDB.  
        Handles millions of events daily with cost efficiency.
      </p>
      <span class="tag">AWS</span>
      <span class="tag">Lambda</span>
      <span class="tag">S3</span>
      <span class="tag">DynamoDB</span>
    </div>

    <div class="card project-card">
      <h3><a href="/projects/react-dashboard">Interactive React Dashboard</a></h3>
      <p class="small">
        Real-time analytics dashboard with charts, filters, and smooth UI animations.  
        Built with React, Redux, and TailwindCSS.
      </p>
      <span class="tag">React</span>
      <span class="tag">Redux</span>
      <span class="tag">TailwindCSS</span>
      <span class="tag">Chart.js</span>
    </div>

  </div>

</section>

<script>
  // Simple client-side filtering for projects
  document.getElementById('filterInput').addEventListener('input', function () {
    const filter = this.value.toLowerCase();
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
      const text = card.innerText.toLowerCase();
      card.style.display = text.includes(filter) ? '' : 'none';
    });
  });
</script>
