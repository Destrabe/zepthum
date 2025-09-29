"use client";
import LoginBtn from "@/components/ui/LoginBtn";
import "./login.css";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="split-container">
      <div className="left-side">
        <img src="/assets/images/iconKirby.webp" alt="Ilustraccion Login" />
      </div>
      {/* principal*/}
      <div className="right-side">
        <div className="containerLogin">
          <div className="main">
            {/* header*/}
            <div className="header">
              <div className="logo">
                <img
                  src="/assets/svg/logo_tem.svg"
                  className="logo-img"
                  alt="Logo"
                />
              </div>
              <span className="welcome-text">
                Productividad impulsada por la competencia.
              </span>
              <span className="welcome-subtext">
                Gana puntos y lidera el ranking.
              </span>
            </div>
            {/* Formulario*/}
            <div className="form-section">
              <div className="form-container">
                <h1>Iniciar sesión</h1>
                <form id="login-form">
                  <div className="input-group">
                    <label htmlFor="correo">Correo</label>
                    <input
                      type="email"
                      id="correo"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      name="email"
                      required
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="password">Contraseña</label>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      name="password"
                      required
                    />
                  </div>
                  <div className="olvidar-pass">
                    <a href="#">¿Olvidaste tu contraseña?</a>
                  </div>
                  <LoginBtn email={email} password={password} />
                </form>
              </div>
              <div className="registrarse">
                <p>¿No tienes Cuenta?</p>
                <a href="/register">¡Regístrate ahora!</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
