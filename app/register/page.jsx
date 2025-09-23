import "./register.css";

function RegisterPage() {
  return (
    <div className="split-container">
      <div className="left-side">
        <div className="containerRegister">
          <div className="main">
            <div className="header">
              {/*<!--Logo -->*/}
              <div className="logo">
                <img
                  src="/assets/svg/logo_tem.svg"
                  className="logo-img"
                  alt="Logo"
                />
                <span className="logo-name">Zepthum</span>
              </div>
              {/*<!--Texto de bienvenida -->*/}
              <span className="welcome-text">
                Productividad impulsada por la competencia.
              </span>
              <span className="welcome-subtext">
                Gana puntos y lidera el ranking.
              </span>
            </div>
            {/*<!--Formulario -->*/}
            <div className="form-section">
              <div className="form-container">
                <h1>Crea una cuenta</h1>
                <form id="register-form">
                  <div className="input-group">
                    <label htmlFor="username">Usuario</label>
                    <input type="text" id="username" name="username" required />
                  </div>
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
                  <button className="registerBtn" id="submit" type="submit">
                    Crear Cuenta
                  </button>
                </form>
              </div>
              <div className="login">
                <p>¿Ya tienes Cuenta?</p>
                <a href="/login">¡Inicia sesion ahora!</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right-side">
        <img src="/assets/images/iconKirby.webp" alt="Ilustración login" />
      </div>
    </div>
  );
}

export default RegisterPage;
