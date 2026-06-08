import axios from "axios";

const API_URL = "http://localhost:5000/claim";

export const getClaimByToken = async (token) => {
  const response = await axios.get(`${API_URL}/${token}`);
  return response.data;
};