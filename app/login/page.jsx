import LoginBtn from "@/components/button/LoginBtn";
import "./login.css";

export default function LoginPage() {
  return (
    <div className="split-container">
      <div className="left-side">
        <img src="/assets/images/iconKirby.webp" alt="Ilustraccion Login" />
      </div>
      {/* principal*/}
      <div className="right-side">
        <div className="container">
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
                    <input type="email" id="correo" name="email" required />
                  </div>
                  <div className="input-group">
                    <label htmlFor="password">Contraseña</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      required
                    />
                  </div>
                  <div className="olvidar-pass">
                    <a href="#">¿Olvidaste tu contraseña?</a>
                  </div>
                  <LoginBtn />
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
