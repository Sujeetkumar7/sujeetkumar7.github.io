---
layout: post
title: "Access Modifiers & Packages in Java – public, private, protected, default, and Package Structure"
date: 2025-08-16
categories: [java-learning, java-best-practices]
---
In Java, **access modifiers and packages** play a critical role in **structuring large-scale enterprise applications**. They help control visibility, enforce encapsulation, and maintain modularity across different modules or microservices.

This post will cover:

1. **Java Access Modifiers**
2. **Default Access (Package-Private)**
3. **Package Structure**
4. Enterprise examples and best practices

---

## 1. Java Access Modifiers

Java provides four access levels:

| Modifier    | Class | Package | Subclass | World |
| ----------- | ----- | ------- | -------- | ----- |
| `public`    | ✅     | ✅       | ✅        | ✅     |
| `protected` | ✅     | ✅       | ✅        | ❌     |
| `default`   | ✅     | ✅       | ❌        | ❌     |
| `private`   | ✅     | ❌       | ❌        | ❌     |

### 1.1 Public

* Visible **everywhere**, including other packages and modules.
* Use for APIs, services, and interfaces meant for external access.

```java
package com.enterprise.utils;

public class Logger {
    public static void log(String message) {
        System.out.println("[LOG]: " + message);
    }
}
```

*Use-case:* Logging utilities, API service classes, or shared constants.

---

### 1.2 Private

* Visible **only within the class**.
* Used for encapsulating internal state or implementation details.

```java
public class Employee {
    private double salary;

    public Employee(double salary) {
        this.salary = salary;
    }

    public double getSalary() { return salary; }
}
```

*Use-case:* Protect sensitive data like passwords, salaries, or internal counters.

---

### 1.3 Protected

* Visible **within the package** and **subclasses** (even in other packages).
* Useful for controlled extension in inheritance hierarchies.

```java
package com.enterprise.model;

public class Employee {
    protected String department;

    protected void setDepartment(String dept) {
        this.department = dept;
    }
}

package com.enterprise.hr;

import com.enterprise.model.Employee;

public class Manager extends Employee {
    public void assignDepartment(String dept) {
        setDepartment(dept); // accessible because protected
    }
}
```

*Use-case:* Base classes in frameworks, allowing controlled customization.

---

### 1.4 Default (Package-Private)

* **No modifier** → visible **only within the same package**.
* Used for internal utilities that should not be exposed outside a package.

```java
package com.enterprise.utils;

class Validator {
    static boolean isValidEmail(String email) {
        return email.contains("@");
    }
}
```

*Use-case:* Internal validation or helper classes in enterprise modules.

---

## 2. Package Structure in Enterprise Applications

Packages organize Java classes **logically and modularly**, avoiding naming conflicts and improving maintainability.

**Enterprise Example – Modular Application Structure:**

```
com.enterprise
│
├── model
│   ├── Employee.java
│   └── Department.java
│
├── service
│   ├── EmployeeService.java
│   └── NotificationService.java
│
├── utils
│   └── Logger.java
│
└── controller
    ├── EmployeeController.java
    └── AuthController.java
```

* `model` → data classes and entities
* `service` → business logic
* `utils` → helper classes
* `controller` → API endpoints or request handling

**Using `module-info.java` (Java 9+) for strong encapsulation:**

```java
module enterprise.app {
    exports com.enterprise.controller;
    exports com.enterprise.service;
    // utils and model remain internal
}
```

*Benefit:* Explicitly exposes only intended packages for external modules.

---

## 3. Enterprise Best Practices

1. **Restrict access** as much as possible (`private` > `protected` > `public`) to enforce encapsulation.
2. **Use packages** to logically group classes and manage dependencies.
3. **Leverage modules (Java 9+)** to hide internal implementation details and expose only APIs.
4. **Protected + inheritance** allows controlled extensibility without exposing internals globally.
5. Keep helper classes and utilities **package-private** unless they need external access.

---

## 4. Example – Secure Employee Management Module

```java
package com.enterprise.model;

public class Employee {
    private String name;
    private double salary; // private: sensitive

    protected Employee(String name, double salary) {
        this.name = name;
        this.salary = salary;
    }

    protected double getSalary() { return salary; }
}

package com.enterprise.service;

import com.enterprise.model.Employee;

public class EmployeeService {

    public void printSalary(Employee emp) {
        // Can access protected getter because it's in the same module/package
        System.out.println("Salary: $" + emp.getSalary());
    }
}
```

*Benefit:* Sensitive data (`salary`) is protected, access is controlled, and only authorized service classes can use it.

---

### Key Takeaways

* Access modifiers define **visibility and encapsulation**, crucial for enterprise-grade security and maintainability.
* Packages **organize code logically** and prevent conflicts in large codebases.
* Use **module system** to expose only APIs while hiding internal implementation.
* Default access + private fields + protected inheritance = secure and extensible design.