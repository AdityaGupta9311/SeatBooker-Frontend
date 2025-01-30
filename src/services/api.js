import axios from "axios";

const API_BASE_URL = "http://localhost:8080/auth";

export const registerUser = async (userData) => {
  return await axios.post(`${API_BASE_URL}/register`, userData);
};

export const loginUser = async (credentials) => {
  return await axios.post(`${API_BASE_URL}/login`, credentials);
};
