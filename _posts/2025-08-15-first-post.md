---
layout: post
title: "First Post"
categories: java features
---

First Sample Post.

```java
public class SwitchExample {
    public static void main(String[] args) {
        String day = "MONDAY";
        String type = switch (day) {
            case "SATURDAY", "SUNDAY" -> "Weekend";
            default -> "Weekday";
        };
        System.out.println(type);
    }
}
```

**Why I like it:**
- Concise syntax
- Improved readability
- Better compile-time checks
