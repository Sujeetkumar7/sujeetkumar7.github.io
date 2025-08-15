---
layout: post
title: "Spring Boot Best Practices for Production"
categories: spring boot java best-practices
---

Enable profiles, Actuator, graceful shutdown, centralized config, and structured logging.

```properties
server.shutdown=graceful
spring.lifecycle.timeout-per-shutdown-phase=30s
management.endpoints.web.exposure.include=health,info,metrics
```
