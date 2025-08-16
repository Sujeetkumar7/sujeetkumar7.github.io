---
title: Projects
layout: default
---

<p class="text-gray-600 mb-6">
Here you’ll find a collection of my professional and personal projects.  
Use the filter to quickly find projects by technology or name.
</p>

<input id="filterInput" class="search" placeholder="🔍 Filter projects by tech or name…" />

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

<script>
  // Simple client-side filtering for projects
  document.getElementById('filterInput').addEventListener('keyup', function () {
    let filter = this.value.toLowerCase();
    let cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
      let text = card.innerText.toLowerCase();
      card.style.display = text.includes(filter) ? '' : 'none';
    });
  });
</script>
