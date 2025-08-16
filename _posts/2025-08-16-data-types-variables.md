---
layout: post
title: "Mastering Java Data Types & Variables: Primitive Types, Wrappers, and Type Casting"
date: 2025-08-16
categories: [java-learning, java-best-practices]
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

<div style="overflow-x:auto; margin: 1rem 0;">
<table style="width:100%; border-collapse: collapse; min-width: 400px;">
  <thead>
    <tr>
      <th style="border: 1px solid #ddd; padding: 8px; text-align:left;">Type</th>
      <th style="border: 1px solid #ddd; padding: 8px; text-align:left;">Size</th>
      <th style="border: 1px solid #ddd; padding: 8px; text-align:left;">Default Value</th>
      <th style="border: 1px solid #ddd; padding: 8px; text-align:left;">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;">byte</td>
      <td style="border: 1px solid #ddd; padding: 8px;">1 byte</td>
      <td style="border: 1px solid #ddd; padding: 8px;">0</td>
      <td style="border: 1px solid #ddd; padding: 8px;"><code>byte b = 10;</code></td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;">short</td>
      <td style="border: 1px solid #ddd; padding: 8px;">2 bytes</td>
      <td style="border: 1px solid #ddd; padding: 8px;">0</td>
      <td style="border: 1px solid #ddd; padding: 8px;"><code>short s = 100;</code></td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;">int</td>
      <td style="border: 1px solid #ddd; padding: 8px;">4 bytes</td>
      <td style="border: 1px solid #ddd; padding: 8px;">0</td>
      <td style="border: 1px solid #ddd; padding: 8px;"><code>int i = 1000;</code></td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;">long</td>
      <td style="border: 1px solid #ddd; padding: 8px;">8 bytes</td>
      <td style="border: 1px solid #ddd; padding: 8px;">0L</td>
      <td style="border: 1px solid #ddd; padding: 8px;"><code>long l = 10000L;</code></td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;">float</td>
      <td style="border: 1px solid #ddd; padding: 8px;">4 bytes</td>
      <td style="border: 1px solid #ddd; padding: 8px;">0.0f</td>
      <td style="border: 1px solid #ddd; padding: 8px;"><code>float f = 10.5f;</code></td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;">double</td>
      <td style="border: 1px solid #ddd; padding: 8px;">8 bytes</td>
      <td style="border: 1px solid #ddd; padding: 8px;">0.0d</td>
      <td style="border: 1px solid #ddd; padding: 8px;"><code>double d = 99.99;</code></td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;">char</td>
      <td style="border: 1px solid #ddd; padding: 8px;">2 bytes</td>
      <td style="border: 1px solid #ddd; padding: 8px;">'\u0000'</td>
      <td style="border: 1px solid #ddd; padding: 8px;"><code>char c = 'A';</code></td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;">boolean</td>
      <td style="border: 1px solid #ddd; padding: 8px;">1 bit</td>
      <td style="border: 1px solid #ddd; padding: 8px;">false</td>
      <td style="border: 1px solid #ddd; padding: 8px;"><code>boolean flag = true;</code></td>
    </tr>
  </tbody>
</table>
</div>

### Primitive Type Hierarchy (Mermaid Diagram)

```mermaid
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

<div style="overflow-x:auto; margin: 1rem 0;">
<table style="width:100%; border-collapse: collapse; min-width: 300px;">
<thead>
<tr>
<th style="border: 1px solid #ddd; padding: 8px; text-align:left;">Primitive</th>
<th style="border: 1px solid #ddd; padding: 8px; text-align:left;">Wrapper Class</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border: 1px solid #ddd; padding: 8px;">byte</td>
<td style="border: 1px solid #ddd; padding: 8px;">Byte</td>
</tr>
<tr>
<td style="border: 1px solid #ddd; padding: 8px;">short</td>
<td style="border: 1px solid #ddd; padding: 8px;">Short</td>
</tr>
<tr>
<td style="border: 1px solid #ddd; padding: 8px;">int</td>
<td style="border: 1px solid #ddd; padding: 8px;">Integer</td>
</tr>
<tr>
<td style="border: 1px solid #ddd; padding: 8px;">long</td>
<td style="border: 1px solid #ddd; padding: 8px;">Long</td>
</tr>
<tr>
<td style="border: 1px solid #ddd; padding: 8px;">float</td>
<td style="border: 1px solid #ddd; padding: 8px;">Float</td>
</tr>
<tr>
<td style="border: 1px solid #ddd; padding: 8px;">double</td>
<td style="border: 1px solid #ddd; padding: 8px;">Double</td>
</tr>
<tr>
<td style="border: 1px solid #ddd; padding: 8px;">char</td>
<td style="border: 1px solid #ddd; padding: 8px;">Character</td>
</tr>
<tr>
<td style="border: 1px solid #ddd; padding: 8px;">boolean</td>
<td style="border: 1px solid #ddd; padding: 8px;">Boolean</td>
</tr>
</tbody>
</table>
</div>

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

* Use **primitives** for performance, **wrappers** when objects are needed.
* Initialize variables and follow naming conventions.
* Use **implicit casting** where possible.
* Watch for nulls and precision issues


.

---

<style>
.tip {
  border-left: 6px solid #2196F3;
  padding: 12px;
  margin: 12px 0;
  border-radius: 5px;
}
</style>