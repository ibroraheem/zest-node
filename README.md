## 🚀 ZestNode SDK Documentation

### 🌟 Introduction

`ZestNode` is a powerful SDK designed for Node.js developers looking to integrate with the Zest payment gateway. It's equipped with a suite of functionalities, making online transactions smooth and efficient.

---

### 📦 Installation

```bash
npm install zest-node
```

---

### 🎬 Getting Started

First, you'll need to import and initialize the SDK.

```javascript
const ZestNode = require('zest-node-sdk');

const zest = new ZestNode('YOUR_API_PUBLIC_KEY', 'YOUR_BASE_URL');
```

---

### 🛠️ Methods

Below is a quick overview of all the methods available in the `ZestNode` SDK:

#### 1. 🔐 `initializeTransaction(amount, currency, email)`

- Parameters:
  - `amount`: Transaction amount.
  - `currency`: Currency type (e.g., "NGN").
  - `email`: Customer's email address.

#### 2. ✅ `verifyTransaction(ref)`

- Parameters:
  - `ref`: Transaction reference.

... [And so on for the other methods]

---

### 🌐 Example

Here's a quick example of how you can use the SDK:

```javascript
(async () => {
    const transaction = await zest.initializeTransaction(1000, "NGN", "example@email.com");
    console.log(transaction);
})();
```

---

### ⚠️ Error Handling

Ensure you wrap your calls in try-catch blocks, as each method is asynchronous and could throw errors.

---

### 💡 Conclusion

`ZestNode` offers an efficient interface for the Zest payment gateway, facilitating developers in their application integrations. This documentation should guide you in leveraging the SDK effectively.

---

### 🎉 Current Version

**Version**: 1.0.0

---

### 💼 License

MIT

---

💖 Happy Coding! 💖

---

**Note**: Be sure to replace placeholders like `'YOUR_API_PUBLIC_KEY'` and `'YOUR_BASE_URL'` with actual values before using the SDK.
