import axios from 'axios';

// Corectarea variabilei API_URL
const API_URL = 'http://localhost:5000/auth';  // URL-ul corect pentru API-ul tău

// Funcția pentru înregistrarea unui utilizator
export const registerUser = async (email, password, username, telefon) => {
  try {
    // Corectarea utilizării API_URL cu backticks pentru string interpolation
    const response = await axios.post(`${API_URL}/reg`, {  
      email,
      password,
      nume: username,
      telefon
    }, {withCredentials: true});
    return response.data;  // Returnează răspunsul de la server
  } catch (error) {
    throw error;  // Aruncă eroarea pentru a fi gestionată în componentă
  }
};

export const logUser = async (email, password) => {
  try{
    const response = await axios.post(`${API_URL}/logi`, {
      email,
      password
    }, {withCredentials: true});
    return response.data;
  }catch (error){
    throw error;
  }
};

