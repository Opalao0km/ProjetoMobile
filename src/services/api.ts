import axios from "axios";

export const api = axios.create({
    baseURL: "https://backend-c1j4.onrender.com",
    headers: {
        Accept: 'application/json'
    }
})