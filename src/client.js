import axios from "axios";
import {  DEFAULT_BASE_URL } from "./constants.js"

export class Client{
    constructor(apiKey)
    {
        this.apiKey = apiKey;
        this.api = axios.create({
            baseURL: DEFAULT_BASE_URL,
            params:{ api_key : apiKey}
        });
    }

    async get(endpoint, queryParams={})
    {
        try {
            const response = await this.api.get(endpoint,{params:queryParams});
            return response.data
        } catch (error) {
            this._handleError(error)
        }
    }

    _handleError(error) {
        if (error.response) {
            const message = error.response.data?.message || error.response.statusText;
            throw new Error(`API Error ${error.response.status}: ${message}`);
        } else if (error.request) {
            throw new Error("Network Error: No response received from server. Please check your internet connection.");
        } else {
            throw new Error(`Request Setup Error: ${error.message}`);
        }
    }
}