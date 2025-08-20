const apiUrl = window.PUBLIC_API_URL;

window.userService = {
  //LOGIN

  login: async (email, password) => {
    console.log(apiUrl);
    try {
      const user = await fetch(`${apiUrl}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });
      console.log("login correcto");
      // window.location.href = "/dashboard";
    } catch (error) {
      console.log("login fallido");
      console.log("prueba");
    }
  },
  //REGISTRO
  register: async (username, email, password) => {
    try {
      const user = await fetch(`${apiUrl}/register`, {
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
      await fetch(`${apiUrl}/logout`, {
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
