// API.js
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/v1';

const API = {
  signUpUser: async (userData) => {
    try {
      const response = await axios.post(`${API_URL}/register`, userData);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  signInUser: async (userData) => {
    try {
      const response = await axios.post(`${API_URL}/login`, userData); // Update '/login' with your actual login endpoint
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

export {API};

