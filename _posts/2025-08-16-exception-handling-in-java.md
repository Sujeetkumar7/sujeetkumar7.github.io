---
layout: post
title: "Exception Handling in Java – Checked vs Unchecked Exceptions, Try-Catch-Finally, and Custom Exceptions"
date: 2025-08-16
categories: [java-learning, java-best-practices]
---

Exception handling is a **critical part of building robust and resilient Java applications**, especially in enterprise systems where failure handling is as important as the main logic. Java provides a rich exception handling mechanism that allows developers to gracefully handle errors without crashing the application.

In this post, we’ll cover:

1. **Checked vs Unchecked Exceptions**
2. **Try-Catch-Finally**
3. **Custom Exceptions**
4. **Enterprise examples with modern Java best practices**

---

## 1. Checked vs Unchecked Exceptions

Java exceptions are categorized into **checked** and **unchecked** exceptions:

| Type                    | Description                                                                                       | Example                                            |
| ----------------------- | ------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| **Checked Exception**   | Must be either handled or declared in the method signature using `throws`. Typically recoverable. | `IOException`, `SQLException`                      |
| **Unchecked Exception** | Extends `RuntimeException`. Handling is optional. Usually indicates programming errors.           | `NullPointerException`, `IllegalArgumentException` |

**Example – Enterprise Scenario: File Processing**

```java
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

public class FileHandler {

    // Checked exception
    public void readFile(String filePath) throws IOException {
        String content = Files.readString(Path.of(filePath));
        System.out.println(content);
    }

    // Unchecked exception
    public void divide(int a, int b) {
        if (b == 0) throw new IllegalArgumentException("Divider cannot be zero");
        System.out.println(a / b);
    }

    public static void main(String[] args) {
        FileHandler handler = new FileHandler();
        try {
            handler.readFile("config.yaml");
        } catch (IOException e) {
            System.err.println("Error reading file: " + e.getMessage());
        }

        handler.divide(10, 0); // Throws unchecked exception
    }
}
```

*Use-case:* Handling external resource failures (files, databases, API calls) with checked exceptions, and validating input or logic errors with unchecked exceptions.

---

## 2. Try-Catch-Finally

The `try-catch-finally` block allows **capturing exceptions, handling them, and performing cleanup operations**.

**Syntax:**

```java
try {
    // risky code
} catch (SpecificException e) {
    // handle exception
} catch (Exception e) {
    // handle generic exception
} finally {
    // always executed
}
```

**Enterprise Example – Database Transaction Handling**

```java
public void processTransaction(Transaction tx) {
    try {
        tx.begin();
        tx.updateBalance();
        tx.commit();
    } catch (SQLException e) {
        tx.rollback(); // handle failure
        System.err.println("Transaction failed: " + e.getMessage());
    } finally {
        tx.close(); // always close connection
        System.out.println("Transaction processing ended");
    }
}
```

*Tip:* In modern Java, use **try-with-resources** for automatic resource management:

```java
try (var connection = Database.getConnection();
     var stmt = connection.createStatement()) {

    stmt.executeUpdate("UPDATE accounts SET balance=balance-100 WHERE id=1");
} catch (SQLException e) {
    System.err.println("Database error: " + e.getMessage());
}
```

This eliminates the need to manually close resources in `finally`.

---

## 3. Custom Exceptions

Custom exceptions allow enterprises to **define domain-specific error handling**, making code more expressive and maintainable.

**Example – Enterprise: Payment Processing**

```java
// Custom checked exception
class PaymentFailedException extends Exception {
    public PaymentFailedException(String message) {
        super(message);
    }
}

// Custom unchecked exception
class InvalidPaymentMethodException extends RuntimeException {
    public InvalidPaymentMethodException(String message) {
        super(message);
    }
}

public class PaymentService {

    public void processPayment(String method, double amount) throws PaymentFailedException {
        if (!method.equals("CREDIT_CARD") && !method.equals("PAYPAL")) {
            throw new InvalidPaymentMethodException("Unsupported payment method: " + method);
        }

        if (amount <= 0) {
            throw new PaymentFailedException("Payment amount must be greater than zero");
        }

        System.out.println("Payment of $" + amount + " processed via " + method);
    }

    public static void main(String[] args) {
        PaymentService service = new PaymentService();

        try {
            service.processPayment("UPI", 100); // Unchecked exception
        } catch (PaymentFailedException e) {
            System.err.println("Payment error: " + e.getMessage());
        }
    }
}
```

*Use-case:* Custom exceptions are invaluable in **microservices, banking, and payment systems**, where clear domain-specific error reporting is crucial.

---

## 4. Modern Java Best Practices for Exception Handling

* **Use `try-with-resources`** to manage IO, DB, and other closable resources.
* Prefer **unchecked exceptions** for programming errors and **checked exceptions** for recoverable failures.
* **Create meaningful custom exceptions** for domain-specific error handling.
* Avoid catching `Exception` unless absolutely necessary; be **specific**.
* **Leverage records** or pattern matching (Java 21) for structured exception messages if needed:

```java
record ErrorResponse(String code, String message) {}

try {
    riskyOperation();
} catch (IOException e) {
    var error = new ErrorResponse("IO_ERR", e.getMessage());
    logError(error);
}
```

---

## Key Takeaways

* **Checked exceptions** → anticipate and handle recoverable failures.
* **Unchecked exceptions** → programming errors or invalid input.
* **try-catch-finally** → handle errors and ensure cleanup.
* **Custom exceptions** → make enterprise code expressive and maintainable.
* Use **modern Java features** like try-with-resources, records, and pattern matching for more robust exception handling.