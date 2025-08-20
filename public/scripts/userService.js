const apiUrl = window.PUBLIC_API_URL;

window.userService = {
  //LOGIN

  login: async (email, password) => {
    console.log(apiUrl);
    try {
      const response = await axios.post(`${apiUrl}/usuarios/login`, {
        email,
        password,
      });
      const token = response.data.token;
      if (!token) throw new Error("No token received");
      setCookie("token", token);
      console.log("login correcto");
      window.location.href = "/dashboard";
    } catch (error) {
      console.log("login fallido");
      console.log("prueba");
    }
  },
  //REGISTRO
  register: async (username, email, password) => {
    try {
      const user = await fetch(`${apiUrl}/usuarios/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ username, email, password }),
      });
      console.log("registro correcto");
      window.location.href = "/login";
    } catch (error) {
      alert("error");
      console.log("registro fallido");
    }
  },

  logout: async () => {
    try {
      await fetch(`${apiUrl}/usuarios/logout`, {
        method: "GET",
        credentials: "include",
      });
      console.log("logout correcto");
      window.location.href = "/login";
    } catch (error) {
      console.log("error al hacer logout", error);
    }
  },
};
