import axios from "axios";

const API_URL = "http://localhost:8090/auth";

const register = (user) => {
  return axios.post(`${API_URL}/register`, user);
};

const login = (user) => {
  return axios.post(`${API_URL}/login`, user);
};

const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("username");
};

export default {
  register,
  login,
  logout,
};
