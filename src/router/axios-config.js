import axios from 'axios'

const instance = axios.create({
    baseURL: "https://api.sandbox.paypal.com",
    timeout: 30 * 1000,
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
});

export default instance
