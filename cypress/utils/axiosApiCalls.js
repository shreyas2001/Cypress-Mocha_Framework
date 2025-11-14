import axios from 'axios';

class AxiosApiCalls {

    static get(url, headers = {}) {
        return axios.get(url, { headers });
    }

    static post(url, data, headers = {}) {
        return axios.post(url, data, { headers });
    }

    static put(url, data, headers = {}) {
        return axios.put(url, data, { headers });
    }

    static delete(url, headers = {}) {
        return axios.delete(url, { headers });
    }
}

export default AxiosApiCalls;