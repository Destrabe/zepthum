import { useState } from "react";

export default function loginValidation() {
  const [errors, setErrors] = useState({});

  const validate = ({ email, password }) => {
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Por favor ingrese un correo";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Por favor ingrese un correo válido";
    }

    if (!password.trim()) {
      newErrors.password = "Por favor ingrese una contraseña";
    }

    /*else if (password.length < 6) {
      newErrors.password = "La contraseña debe tener al menos 6 caracteres";
    }*/

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setTimeout(() => {
        setErrors({});
      }, 3000);
    }

    return Object.keys(newErrors).length === 0;
  };

  return { errors, validate };
}
