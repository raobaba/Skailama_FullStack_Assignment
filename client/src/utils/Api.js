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
      const response = await axios.post(`${API_URL}/login`, userData); 
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  getUserById: async (userId) => {
    try {
      const response = await axios.get(`${API_URL}/getById/${userId}`);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  updateUserDetails: async (userId, userData) => {
    try {
      const response = await axios.put(`${API_URL}/users/${userId}`, userData);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }  
};

export {API};

