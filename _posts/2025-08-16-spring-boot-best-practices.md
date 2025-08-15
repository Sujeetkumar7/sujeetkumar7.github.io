---
layout: post
title: "Spring Boot Best Practices for Production"
date: 2025-08-16
categories: spring boot java best-practices
---

Spring Boot is amazing for rapid development, but running it in **production** requires some extra care.  
Here are my **top best practices** from real-world projects:

## 1. Use Profiles for Environment Configurations

```java
// application-dev.properties
spring.datasource.url=jdbc:postgresql://localhost:5432/mydb

// application-prod.properties
spring.datasource.url=jdbc:postgresql://prod-server:5432/mydb
```

Switch profiles easily:

```bash
java -jar app.jar --spring.profiles.active=prod
```

---

## 2. Enable Actuator Endpoints

Monitoring is critical in production.

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>
```

Configure:

```properties
management.endpoints.web.exposure.include=health,info,metrics
```

---

## 3. Use Centralized Configuration

Avoid hardcoding secrets. Use **Spring Cloud Config** or **AWS Parameter Store**.

---

## 4. Graceful Shutdown

Enable graceful shutdown to avoid cutting requests mid-process.

```properties
server.shutdown=graceful
spring.lifecycle.timeout-per-shutdown-phase=30s
```

---

## 5. Logging Best Practices

- Use JSON logging for better log parsing.
- Keep logs minimal in production.

```properties
logging.level.root=INFO
logging.file.name=app.log
```

---

**Final Tip:** Always test in a **prod-like staging environment** before deploying.  
It will save you from surprises! 🚀
