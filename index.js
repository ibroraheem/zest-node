const axios = require('axios');

class ZestPaymentSDK {
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
}


module.exports = ZestPaymentSDK;
