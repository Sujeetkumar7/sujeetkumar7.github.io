---
layout: default
title: Home
---

# Welcome to My Java Blog 👋

I’m Sujeet, a Senior Java Developer.  
Here, I share **Java tips, backend best practices, and real-world problem-solving**.

## Latest Posts
{% for post in site.posts %}
- [{{ post.title }}]({{ post.url }}) — *{{ post.date | date: "%B %d, %Y" }}*
{% endfor %}
