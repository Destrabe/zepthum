import axios from "axios";
import Cookies from "js-cookie";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const userService = {
  // LOGIN
  login: async (email, password) => {
    try {
      const response = await axios.post(`${apiUrl}/usuarios/login`, {
        email,
        password,
      });

      const token = response.data.token;
      if (!token) throw new Error("No token recibido");

      // Guardar token en cookies
      Cookies.set("token", token, { expires: 7, secure: true });

      console.log("✅ Login correcto");
      window.location.href = "/dashboard";
      return true;
    } catch (error) {
      console.error(
        "❌ Error en login:",
        error.response?.data || error.message
      );
      alert("Login fallido: " + (error.response?.data?.message || "Error"));
      return false;
    }
  },

  // REGISTRO
  register: async (username, email, password) => {
    try {
      await axios.post(`${apiUrl}/usuarios/register`, {
        username,
        email,
        password,
      });

      console.log("✅ Registro correcto");
      window.location.href = "/login";
    } catch (error) {
      console.error("❌ Error en registro:", error);
      alert("Registro fallido: " + (error.response?.data?.message || "Error"));
    }
  },

  // LOGOUT
  logout: async () => {
    Cookies.remove("token");
    window.location.href = "/login";
    //router.push("/login");
  },
};

export default userService;
