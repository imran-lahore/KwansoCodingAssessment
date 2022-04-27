import axios from "axios";

const API_URL = "http://localhost:8000/";

class AuthService {
  login(email: string, password: string) {
    return axios.post(API_URL + "login", { email, password }).then((res) => {
      if (res.data.access_token) {
        localStorage.setItem("auth", JSON.stringify(res.data));
      }
      return res.data;
    });
  }
  logout() {
    localStorage.removeItem("auth");
  }
  register(name: string, email: string, password: string) {
    return axios.post(API_URL + "register", { name, email, password });
  }
  getCurrentUser() {
    const userStr = localStorage.getItem("auth");
    if (userStr) return JSON.parse(userStr);

    return null;
  }
}

export default new AuthService();
