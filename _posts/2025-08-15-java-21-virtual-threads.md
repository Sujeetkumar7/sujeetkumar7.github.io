---
layout: post
title: "Java 21: Virtual Threads in Real Services"
categories: java performance concurrency
---

Virtual threads drastically reduce the cost of concurrency.

```java
try (var executor = java.util.concurrent.Executors.newVirtualThreadPerTaskExecutor()) {
    IntStream.range(0, 10_000).forEach(i -> executor.submit(() -> {
        Thread.sleep(1000);
        return i;
    }));
}
```
**Takeaway:** You can serve more concurrent I/O-bound requests with fewer resources.
