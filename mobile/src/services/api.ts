import axios from 'axios';
import { ipConfig } from './api.config';

const api = axios.create({
    baseURL: ipConfig.adress
});

export default api;