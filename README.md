# ZestPaymentSDK 🌐

![version](https://img.shields.io/badge/version-1.0.0-blue) ![npm](https://img.shields.io/badge/npm-%3E%3D5.5.0-orange) ![license](https://img.shields.io/badge/license-MIT-green)

An SDK for integrating with ZestPayment, providing seamless transaction management including initialization, verification, and various payment methods support.

## 🚀 Installation

```bash
npm install zest-payment-sdk
```

## 📖 Usage

### Initialization

First, import and initialize the SDK:

```javascript
const ZestPaymentSDK = require('zest-payment-sdk');
const sdk = new ZestPaymentSDK('YOUR_API_PUBLIC_KEY', 'YOUR_BASE_URL');
```

### 🛒 Initialize a Transaction

```javascript
(async () => {
    try {
        const result = await sdk.initializeTransaction('10000', 'NGN', 'user@example.com');
        console.log(result);
    } catch (error) {
        console.error("Error initializing transaction:", error);
    }
})();
```

### 🔍 Verify a Transaction

After obtaining a transaction reference, verify its status:

```javascript
(async () => {
    try {
        const verificationResult = await sdk.verifyTransaction('YOUR_TRANSACTION_REF');
        console.log(verificationResult);
    } catch (error) {
        console.error("Error verifying transaction:", error);
    }
})();
```

### 🏦 Generate a Temporary Virtual Account

```javascript
(async () => {
    try {
        const virtualAccount = await sdk.generateTemporaryVirtualAccount('YOUR_TRANSACTION_REF');
        console.log(virtualAccount);
    } catch (error) {
        console.error("Error generating virtual account:", error);
    }
})();
```

### 📌 Check Transfer Payment Status

```javascript
(async () => {
    try {
        const status = await sdk.getTransferPaymentStatus('YOUR_TRANSACTION_REF');
        console.log(status);
    } catch (error) {
        console.error("Error checking transfer payment status:", error);
    }
})();
```

### 📱 Get USSD Status

```javascript
(async () => {
    try {
        const ussdStatus = await sdk.getUSSDStatus('YOUR_USSD_REFERENCE');
        console.log(ussdStatus);
    } catch (error) {
        console.error("Error getting USSD status:", error);
    }
})();
```

## 📝 Notes

Replace placeholders like `'YOUR_API_PUBLIC_KEY'`, `'YOUR_BASE_URL'`, and `'YOUR_TRANSACTION_REF'` with your actual values.

---

🌟 Star the repository if you find it useful! Your support helps! 🌟
