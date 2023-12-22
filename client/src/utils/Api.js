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
  },
createUpload: async (projectName, userId) => {
  try {
    const response = await axios.post(`${API_URL}/upload/${userId}`, { projectName });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
},
 createDetails :async (uploadId,fileId) =>{
  try {
    const response = await axios.post(`${API_URL}/details/${uploadId}/${fileId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
 },
 updateDescription :async (uploadId,fileId,detailId) =>{
  try {
    const response = await axios.post(`${API_URL}/update/${uploadId}/${fileId}/${detailId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
 },
 getAllUploads: async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/getAll/${userId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
},

getAllFilesByUploadId : async (uploadId) =>{
  try {
    const response = await axios.get(`${API_URL}/files/${uploadId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

};

export {API};

