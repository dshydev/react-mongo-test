import axios from 'axios'

const baseUrl = 'http://localhost:3010/'
const createAxiosInstance = (options) => {
    const axiosInstance = axios.create({
        baseUrl,
        withCredentials: true,
        ...options,
    });

    return axiosInstance;
}

export default createAxiosInstance;
