---
layout: post
title: "Mastering Java Data Types & Variables: Primitive Types, Wrappers, and Type Casting"
date: 2025-08-16
categories: [java-best-practices]
---

# Java Data Types & Variables – Primitive Types, Wrapper Classes, and Type Casting

Java is a **strongly-typed language**, which means every variable has a type, and understanding these types is key to writing robust, efficient code.  
In this guide, we explore **primitive types**, **wrapper classes**, and **type casting**, complete with examples, tips, and visual explanations.

---

## 1️⃣ Java Variables: The Basics

A **variable** is a named memory location that stores a value.

```java
int age = 30;          
double salary = 45000.75; 
char grade = 'A';      
boolean isActive = true; 
````

<div class="tip">
 <strong>Tips:</strong>
<ul>
<li>Use descriptive variable names: <code>userAge</code>, <code>totalSalary</code>.</li>
<li>Initialize variables when declaring whenever possible.</li>
<li>Follow <strong>camelCase</strong> for variables and <strong>PascalCase</strong> for classes.</li>
</ul>
</div>

---

## 2️⃣ Primitive Data Types

Java has **8 primitive types**:

| Type    | Size    | Default Value | Example                |
| ------- | ------- | ------------- | ---------------------- |
| byte    | 1 byte  | 0             | `byte b = 10;`         |
| short   | 2 bytes | 0             | `short s = 100;`       |
| int     | 4 bytes | 0             | `int i = 1000;`        |
| long    | 8 bytes | 0L            | `long l = 10000L;`     |
| float   | 4 bytes | 0.0f          | `float f = 10.5f;`     |
| double  | 8 bytes | 0.0d          | `double d = 99.99;`    |
| char    | 2 bytes | '\u0000'      | `char c = 'A';`        |
| boolean | 1 bit   | false         | `boolean flag = true;` |

### Primitive Type Hierarchy (Mermaid Diagram)

```java
Byte --> Short --> Int --> Long --> Float --> Double
Char --> Int
Boolean --> Boolean
```

<div class="tip">
<strong>Best Practices:</strong>
<ul>
<li>Use the smallest data type to save memory.</li>
<li>Use <code>int</code> for arithmetic unless <code>long</code> is required.</li>
<li>Use <code>boolean</code> for flags.</li>
</ul>
</div>

---

## 3️⃣ Wrapper Classes

Primitive types have **object counterparts**:

| Primitive | Wrapper Class |
| --------- | ------------- |
| byte      | Byte          |
| short     | Short         |
| int       | Integer       |
| long      | Long          |
| float     | Float         |
| double    | Double        |
| char      | Character     |
| boolean   | Boolean       |

```java
int num = 100;
Integer wrapperNum = Integer.valueOf(num); // Boxing
int primitiveNum = wrapperNum.intValue(); // Unboxing

String str = "123";
int parsedNum = Integer.parseInt(str); // String -> int
```

<div class="tip">
 <strong>Why use wrappers?</strong>
<ul>
<li>Collections cannot store primitives (<code>ArrayList&lt;Integer&gt;</code> instead of <code>ArrayList&lt;int&gt;</code>).</li>
<li>Utility methods: parsing, comparison, conversion.</li>
<li>Works with generics and reflection.</li>
</ul>
</div>

---

## 4️⃣ Type Casting in Java

**Type casting** converts one type to another.

### a) Implicit Casting (Widening)

```java
int i = 100;
double d = i; // int -> double
System.out.println(d); // 100.0
```

### b) Explicit Casting (Narrowing)

```java
double d = 123.45;
int i = (int) d; // double -> int
System.out.println(i); // 123
```

### c) Primitives & Wrappers

```java
Integer wrapperInt = 50;
double d = wrapperInt; // auto-unboxing + widening
Integer anotherInt = (int) d; // narrowing + boxing
```

<div class="tip">
 <strong>Tips:</strong>
<ul>
<li>Prefer implicit casting for safety.</li>
<li>Avoid unnecessary explicit casting to prevent precision loss.</li>
<li>Handle potential <code>NumberFormatException</code> when converting strings.</li>
</ul>
</div>

---

## 5️⃣ Common Mistakes

* **Mixing types in arithmetic**

```java
int a = 10;
double b = 3.5;
double result = a + b; // result is double
```

* **Null wrappers**

```java
Integer num = null;
// int val = num; // NullPointerException
```

* **Precision issues**

```java
float f = 0.1f;
double d = 0.1;
System.out.println(f == d); // false
```

---

## 6️⃣ Example: Bringing It All Together

```java
public class DataTypeDemo {
    public static void main(String[] args) {
        int age = 28;
        double salary = 45000.75;

        // Type casting
        int roundedSalary = (int) salary;

        // Wrapper usage
        Integer ageWrapper = age; // Autoboxing
        int agePrimitive = ageWrapper; // Unboxing

        System.out.println("Age: " + agePrimitive);
        System.out.println("Salary: " + salary);
        System.out.println("Rounded Salary: " + roundedSalary);
    }
}
```

**Output:**

```
Age: 28
Salary: 45000.75
Rounded Salary: 45000
```

---

## 7️⃣ Key Takeaways

- Use **primitives** for performance, **wrappers** when objects are needed.
- Initialize variables and follow naming conventions. 
- Use **implicit casting** where possible. 
- Watch for nulls and precision issues.

---

<style>
.tip {
  border-left: 6px solid #2196F3;
  padding: 12px;
  margin: 12px 0;
  border-radius: 5px;
}
</style>
