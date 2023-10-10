const axios = require('axios');

class ZestNode {
    constructor(apiPublicKey, baseUrl) {
        this.apiPublicKey = apiPublicKey;
        this.baseUrl = baseUrl;
    }

    async initializeTransaction(amount, currency, email) {
        let data = JSON.stringify({
            amount,
            currency,
            email
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${this.baseUrl}/api/v1/transaction-initialization`,
            headers: {
                'Api-Public-Key': this.apiPublicKey,
                'Content-Type': 'application/json'
            },
            data: data
        };

        try {
            const response = await axios.request(config);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
    async verifyTransaction(ref) {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${this.baseUrl}/transaction-verification?ref=${ref}`,
            headers: {
                'Api-Public-Key': this.apiPublicKey
            }
        };

        try {
            const response = await axios.request(config);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
    async generateTemporaryVirtualAccount(transactionRef) {
        let data = JSON.stringify({
            "vasRequestType": "GENERATE_TEMPORARY_VIRTUAL_ACCOUNT",
            "transactionRef": transactionRef
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${this.baseUrl}/api/v1/web-engine/process/virtual-account-request`,
            headers: {
                'Api-Public-Key': this.apiPublicKey,
                'Content-Type': 'application/json'
            },
            data: data
        };

        try {
            const response = await axios.request(config);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
    async getTransferPaymentStatus(transactionRef) {
        let data = JSON.stringify({
            "vasRequestType": "TRANSFER_PAYMENT_STATUS",
            "transactionRef": transactionRef
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${this.baseUrl}/api/v1/web-engine/process/virtual-account-request`,
            headers: {
                'Api-Public-Key': this.apiPublicKey,
                'Content-Type': 'application/json'
            },
            data: data
        };

        try {
            const response = await axios.request(config);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
    async generateUSSDCode(reference) {
        const data = JSON.stringify({
            "ussdRequestType": "USSD_CODE_GENERATION",
            "reference": reference
        });

        const config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${this.baseUrl}/api/v1/web-engine/process/ussd-request`,
            headers: {
                'Api-Public-Key': this.apiPublicKey,
                'Content-Type': 'application/json'
            },
            data: data
        };

        try {
            const response = await axios.request(config);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
    async getUSSDStatus(reference) {
        let data = JSON.stringify({
            "ussdRequestType": "USSD_STATUS_QUERY",
            "reference": reference
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${this.baseUrl}/api/v1/web-engine/process/ussd-request`,
            headers: {
                'Api-Public-Key': this.apiPublicKey,
                'Content-Type': 'application/json'
            },
            data: data
        };

        try {
            const response = await axios.request(config);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
    async generateQR(merchantTransactionReference) {
        const data = JSON.stringify({
            "qrRequestType": "GENERATE_QR",
            "merchantTransactionReference": merchantTransactionReference
        });

        const config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${this.baseUrl}/qr-request`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        try {
            const response = await axios.request(config);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
    async createZestAsNQRMerchant() {
        const config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${this.baseUrl}/api/v1/web-engine/process/create-zest-as-nqr-merchant`,
            headers: {}
        };

        try {
            const response = await axios.request(config);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async generateDynamicNQR(merchantTransactionReference) {
        const data = JSON.stringify({
            "qrRequestType": "GENERATE_DYNAMIC_NQR",
            "merchantTransactionReference": merchantTransactionReference
        });

        const config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${this.baseUrl}/api/v1/web-engine/process/qr-request`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        try {
            const response = await axios.request(config);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async checkNQRStatus(transactionReference) {
        const data = JSON.stringify({
            "qrRequestType": "NQR_STATUS",
            "transactionReference": transactionReference
        });

        const config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${this.baseUrl}/api/v1/web-engine/process/qr-request`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        try {
            const response = await axios.request(config);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
    async generatePaymentLink(amountInMinor, customerEmail, details) {
        const data = JSON.stringify({
            amountInMinor,
            customerEmail,
            details
        });

        const config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${this.baseUrl}/root/api/v1/merchant-invoice/process/generate-payment-link`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.authToken}`
            },
            data: data
        };

        try {
            const response = await axios.request(config);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async createZestMerchant() {
        const config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${this.baseUrl}/api/v1/web-engine/process/create-zest-as-nqr-merchant`,
            headers: {}
        };

        try {
            const response = await axios.request(config);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
    async retrievePaymentInfo(paymentCode) {
        const config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${this.baseUrl}/root/api/v1/merchant-invoice/process/retrieve-payment-info?paymentCode=${paymentCode}`,
            headers: {
                'Authorization': `Bearer ${this.authToken}`
            }
        };

        try {
            const response = await axios.request(config);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
    async fetchAllPaymentLinks(pageNumber = 0, pageSize = 15) {
        const config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${this.baseUrl}/root/api/v1/merchant-invoice/process/fetch-all-payment-link?pageNumber=${pageNumber}&pageSize=${pageSize}`,
            headers: {
                'Authorization': `Bearer ${this.authToken}`
            }
        };

        try {
            const response = await axios.request(config);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
    async initiateCardPayment(email, transactionRef, currency, authData) {
        const data = JSON.stringify({
            "cardRequestType": "INITIATE_CARD_PAYMENT",
            email,
            transactionRef,
            currency,
            authData
        });

        const config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${this.baseUrl}card-request`,
            headers: {
                'Content-Type': 'application/json'
            },
            data
        };

        try {
            const response = await axios.request(config);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
    async validateCardOTP(otp, transactionRef) {
        const data = JSON.stringify({
            "cardRequestType": "VALIDATE_CARD_OTP",
            otp,
            transactionRef
        });

        const config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${this.baseUrl}card-request`,
            headers: {
                'Content-Type': 'application/json'
            },
            data
        };

        try {
            const response = await axios.request(config);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
    async getCardPaymentStatus(transactionRef) {
        const data = JSON.stringify({
            "cardRequestType": "CARD_PAYMENT_STATUS",
            transactionRef
        });

        const config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${this.baseUrl}card-request`,
            headers: {
                'Content-Type': 'application/json'
            },
            data
        };

        try {
            const response = await axios.request(config);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

}


module.exports = ZestNode;
