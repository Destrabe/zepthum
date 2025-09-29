"use client";

import { useState } from "react";
import userService from "@/app/userService"; // 👈 ajusta la ruta si está en otro lado
import "./register.css";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await userService.register(username, correo, password);
      alert("Cuenta creada con éxito 🚀");
      // Opcional: redirigir al login
      window.location.href = "/login";
    } catch (err) {
      console.error("Error en el registro:", err);
      alert("Hubo un error al registrar la cuenta ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="split-container">
      <div className="left-side">
        <div className="containerRegister">
          <div className="main">
            <div className="header">
              {/* Logo */}
              <div className="logo">
                <img
                  src="/assets/svg/logo_tem.svg"
                  className="logo-img"
                  alt="Logo"
                />
                <span className="logo-name">Zepthum</span>
              </div>
              {/* Texto de bienvenida */}
              <span className="welcome-text">
                Productividad impulsada por la competencia.
              </span>
              <span className="welcome-subtext">
                Gana puntos y lidera el ranking.
              </span>
            </div>

            {/* Formulario */}
            <div className="form-section">
              <div className="form-container">
                <h1>Crea una cuenta</h1>
                <form onSubmit={handleSubmit}>
                  <div className="input-group">
                    <label htmlFor="username">Usuario</label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      required
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="correo">Correo</label>
                    <input
                      type="email"
                      id="correo"
                      name="email"
                      required
                      value={correo}
                      onChange={(e) => setCorreo(e.target.value)}
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="password">Contraseña</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <button
                    className="registerBtn"
                    id="submit"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? "Creando..." : "Crear Cuenta"}
                  </button>
                </form>
              </div>
              <div className="login">
                <p>¿Ya tienes Cuenta?</p>
                <a href="/login">¡Inicia sesión ahora!</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Imagen lateral */}
      <div className="right-side">
        <img src="/assets/images/iconKirby.webp" alt="Ilustración login" />
      </div>
    </div>
  );
}

export default RegisterPage;
