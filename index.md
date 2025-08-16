---
layout: default
title: Home
---

<style>
  body {
    font-family: Arial, sans-serif;
    transition: background-color 0.3s, color 0.3s;
    background-color: white;
    color: black;
  }
  body.dark {
    background-color: #121212;
    color: white;
  }
  .container {
    max-width: 900px;
    margin: auto;
    padding: 2rem;
  }
  h1, h2, h3 {
    transition: color 0.3s;
  }
  .theme-toggle {
    position: fixed;
    top: 1rem;
    right: 1rem;
    padding: 0.5rem 1rem;
    background: #007acc;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 6px;
    transition: background 0.3s;
  }
  .theme-toggle:hover {
    background: #005f99;
  }
  img.profile {
    max-width: 150px;
    border-radius: 50%;
    margin-top: 1rem;
  }
  .project {
    background: rgba(0,0,0,0.05);
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 6px;
    transition: background 0.3s;
  }
  body.dark .project {
    background: rgba(255,255,255,0.1);
  }
</style>

<div class="container">
  <h1>👋 Welcome to My Java Blog</h1>
  <p>
    I’m <strong>Sujeet</strong>, a <strong>Senior Java Developer</strong>.  
    Here, I share <b>Java tips</b>, <b>backend best practices</b>, and <b>real-world problem-solving</b>.
  </p>

<h2>📝 Latest Posts</h2>
  <ul>
    {% for post in site.posts %}
      <li>
        <a href="{{ post.url }}">{{ post.title }}</a> — 
        <em>{{ post.date | date: "%B %d, %Y" }}</em>
      </li>
    {% endfor %}
  </ul>

<h2>🚀 Projects</h2>
  <div class="project">
    <h3>Java Audit Service</h3>
    <p>Audit trail implementation with Kafka + Postgres.</p>
  </div>
  <div class="project">
    <h3>Spring Boot Microservices</h3>
    <p>End-to-end microservices with Redis, Solr, and AWS.</p>
  </div>
  <div class="project">
    <h3>LLM Observability</h3>
    <p>Monitoring & dashboards for AI/LLM systems.</p>
  </div>

<h2>👨‍💻 About Me</h2>
<img src="/assets/images/profile.jpg" alt="Profile" class="profile">
  <p>
    With <strong>10+ years in Java, Spring Boot, Microservices, and AWS</strong>,  
    I enjoy building scalable backend systems and mentoring developers.  
    Passionate about AI integration in enterprise apps.
  </p>

<h2>📬 Contact</h2>
  <p>
    🔗 <a href="https://github.com/sujeetkumar7">GitHub</a> |  
    💼 <a href="https://linkedin.com/in/sujeetprajapati">LinkedIn</a> |  
    ✉️ <a href="mailto:sujeet@example.com">sujeet@example.com</a>
  </p>
</div>
