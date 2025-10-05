"use client";

import { useState } from "react";
import userService from "@/app/userService";
import Loading from "./loading";

export default function LoginBtn({ email, password, onValidate }) {
  const [loading, setLoading] = useState(false);

  const handleClick = async (event) => {
    event.preventDefault();

    // Validar antes de login
    const isValid = onValidate();
    if (!isValid) return;

    setLoading(true);
    const success = await userService.login(email, password);
    setLoading(false);

    if (success) {
      console.log("✅ Redirigiendo al dashboard...");
    }
  };

  return (
    <>
      <button
        className="loginBtn"
        type="submit"
        onClick={handleClick}
        disabled={loading}
      >
        {loading ? "Cargando..." : "Entrar"}
      </button>
      {loading && <Loading />}
    </>
  );
}
