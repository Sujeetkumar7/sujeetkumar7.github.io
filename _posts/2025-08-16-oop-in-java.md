---
layout: post
title: "Object-Oriented Programming (OOP) in Java – Classes, Objects, Inheritance, Polymorphism, Abstraction, and Encapsulation"
date: 2025-08-16
categories: [java-learning, java-best-practices]
---
Object-Oriented Programming (OOP) is the backbone of **modern Java development**, enabling modular, reusable, and maintainable code. Enterprises rely heavily on OOP principles to build **scalable and robust applications**, from microservices to complex backend systems.

In this post, we’ll cover:

1. Classes & Objects
2. Inheritance
3. Polymorphism
4. Abstraction
5. Encapsulation
6. Enterprise examples with modern Java features

---

## 1. Classes & Objects

**Class:** A blueprint for creating objects.
**Object:** An instance of a class with state (fields) and behavior (methods).

**Example – Enterprise: Employee Management**

```java
public class Employee {
    private String name;
    private int employeeId;
    private double salary;

    // Constructor
    public Employee(String name, int employeeId, double salary) {
        this.name = name;
        this.employeeId = employeeId;
        this.salary = salary;
    }

    // Getter and Setter
    public String getName() { return name; }
    public double getSalary() { return salary; }
    public void setSalary(double salary) { this.salary = salary; }

    public void displayInfo() {
        System.out.println("Employee: " + name + ", ID: " + employeeId + ", Salary: $" + salary);
    }

    public static void main(String[] args) {
        Employee emp = new Employee("Alice", 101, 75000);
        emp.displayInfo();
        emp.setSalary(80000);
        emp.displayInfo();
    }
}
```

*Use-case:* Representing real-world entities like employees, products, or transactions in enterprise applications.

---

## 2. Inheritance

**Inheritance** allows a class to **reuse fields and methods** of another class. It promotes code reuse and establishes **“is-a” relationships**.

**Example – Enterprise: Employee Hierarchy**

```java
class Employee {
    protected String name;
    protected int id;

    public Employee(String name, int id) {
        this.name = name;
        this.id = id;
    }

    public void work() {
        System.out.println(name + " is working.");
    }
}

// Subclass
class Manager extends Employee {
    public Manager(String name, int id) {
        super(name, id);
    }

    public void manageTeam() {
        System.out.println(name + " is managing the team.");
    }
}

public class Company {
    public static void main(String[] args) {
        Manager mgr = new Manager("Bob", 200);
        mgr.work();         // inherited
        mgr.manageTeam();   // subclass-specific
    }
}
```

*Use-case:* Modeling real-world hierarchies, e.g., Employee → Manager → Director.

---

## 3. Polymorphism

**Polymorphism** allows objects to take **multiple forms**. Two types:

* **Compile-time (Method Overloading)**
* **Runtime (Method Overriding)**

**Example – Runtime Polymorphism in Enterprise: Notification System**

```java
abstract class Notification {
    public abstract void send(String message);
}

class EmailNotification extends Notification {
    public void send(String message) {
        System.out.println("Email sent: " + message);
    }
}

class SMSNotification extends Notification {
    public void send(String message) {
        System.out.println("SMS sent: " + message);
    }
}

public class NotificationService {
    public static void main(String[] args) {
        Notification notification;

        notification = new EmailNotification();
        notification.send("Server down!");

        notification = new SMSNotification();
        notification.send("High CPU usage!");
    }
}
```

*Use-case:* Enterprise systems with multiple notification channels, payment methods, or document formats.

---

## 4. Abstraction

**Abstraction** hides implementation details and exposes **only essential functionality** using **abstract classes or interfaces**.

**Example – Enterprise: Payment Gateway**

```java
interface PaymentGateway {
    void pay(double amount);
}

class PayPal implements PaymentGateway {
    public void pay(double amount) {
        System.out.println("Paid $" + amount + " via PayPal");
    }
}

class CreditCard implements PaymentGateway {
    public void pay(double amount) {
        System.out.println("Paid $" + amount + " via Credit Card");
    }
}

public class PaymentProcessor {
    public static void main(String[] args) {
        PaymentGateway gateway = new PayPal();
        gateway.pay(150.0);

        gateway = new CreditCard();
        gateway.pay(200.0);
    }
}
```

*Use-case:* Abstracting implementation for flexible integration with multiple services or modules.

---

## 5. Encapsulation

**Encapsulation** restricts direct access to fields and **exposes controlled access** via getters/setters.

**Example – Enterprise: Secure Employee Salary Management**

```java
class Employee {
    private String name;
    private double salary; // private field

    public Employee(String name, double salary) {
        this.name = name;
        setSalary(salary);
    }

    public String getName() { return name; }
    
    public double getSalary() { return salary; }

    public void setSalary(double salary) {
        if (salary < 0) throw new IllegalArgumentException("Salary cannot be negative");
        this.salary = salary;
    }
}
```

*Use-case:* Prevent direct modification of sensitive data like salaries, passwords, or account balances.

---

## 6. Modern Java Features for OOP

* **Records** for immutable data objects:

```java
record EmployeeRecord(String name, int id, double salary) {}
```

* **Sealed classes** for controlled inheritance (Java 17+):

```java
sealed class Employee permits Manager, Developer {}
final class Manager extends Employee {}
final class Developer extends Employee {}
```

* **Pattern Matching** (Java 21 preview) for cleaner type checks.

---

## Key Takeaways

* **Classes & Objects** → model real-world entities.
* **Inheritance** → promotes code reuse and hierarchy modeling.
* **Polymorphism** → enables flexible and extendable systems.
* **Abstraction** → hides implementation details, improves modularity.
* **Encapsulation** → protects internal state and ensures controlled access.
* **Modern Java features** (records, sealed classes, pattern matching) enhance OOP in enterprise applications.