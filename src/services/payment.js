import axios from "axios";

const API_URL = "http://localhost:5000/payment";

export const createCheckoutSession = async (token) => {
  const response = await axios.post(`${API_URL}/create-checkout-session`, {
    token,
  });

  return response.data;
};