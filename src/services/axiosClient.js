import axios from 'axios'
import queryString from 'query-string'
import apiConfig from './apiConfig'

const axiosClient = axios.create({
    baseURL: apiConfig?.baseUrl,
    headers: {
        'Content-Type': 'application/json'
    },
    params: {page: 1},
    paramsSerializer: params => queryString.stringify({ ...params, api_key: apiConfig?.api_key })
});

axiosClient.interceptors.request.use(async (config) => config);
axiosClient.interceptors.request.use(async (response) => {
    try {
        if (response && response?.data) {
            return response?.data;
        }
        return response;
    }
    catch (error) {
        throw error;
    }
});

export default axiosClient