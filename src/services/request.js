import axios from "axios";

const API_URL = "http://localhost:5000/cereri";

export const cerereRequest = async (cerereData) => {
    const response = await axios.post(`${API_URL}/create`, cerereData, {
        withCredentials: true
    });

    return response.data;
};