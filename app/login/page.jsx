"use client";
import { useState } from "react";
import LoginBtn from "@/components/ui/LoginBtn";
import "./login.css";
import Loading from "@/components/ui/loading";
import loginValidation from "@/components/logic/loginValidation";

export default function LoginPage() {
  const [showLoading, setShowLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { errors, validate } = loginValidation();

  if (showLoading) {
    return <Loading duration={500} onFinish={() => setShowLoading(false)} />;
  }

  const handleValidate = () => validate({ email, password });

  return (
    <div className="split-container">
      <div className="left-side">
        <img src="/assets/images/iconKirby.webp" alt="Ilustraccion Login" />
      </div>

      <div className="right-side">
        <div className="containerLogin">
          <div className="main">
            {/* HEADER */}
            <div className="header">
              <div className="logo">
                <img
                  src="/assets/svg/logo_tem.svg"
                  className="logo-img"
                  alt="Logo"
                />
                <span className="logo-name">Zepthum</span>
              </div>
              <span className="welcome-text">
                Productividad impulsada por la competencia.
              </span>
              <span className="welcome-subtext">
                Gana puntos y lidera el ranking.
              </span>
            </div>

            {/* FORMULARIO */}
            <div className="form-section">
              <div className="form-container">
                <h1>Iniciar sesión</h1>
                <form id="login-form">
                  <div className={`input-group ${errors.email ? "error" : ""}`}>
                    <label htmlFor="correo">Correo</label>
                    <input
                      type="email"
                      id="correo"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      name="email"
                    />
                    {errors.email && (
                      <span className="error-message">{errors.email}</span>
                    )}
                  </div>

                  <div
                    className={`input-group ${errors.password ? "error" : ""}`}
                  >
                    <label htmlFor="password">Contraseña</label>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      name="password"
                    />
                    {errors.password && (
                      <span className="error-message">{errors.password}</span>
                    )}
                  </div>

                  <div className="olvidar-pass">
                    <a href="#">¿Olvidaste tu contraseña?</a>
                  </div>

                  {/* Botón recibe validación desde aquí */}
                  <LoginBtn
                    email={email}
                    password={password}
                    onValidate={handleValidate}
                  />
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
