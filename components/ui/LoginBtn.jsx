"use client";

import { useState } from "react";
import userService from "@/app/userService";
import Loading from "./loading";

export default function LoginBtn({ email, password }) {
  const [loading, setLoading] = useState(false);

  const handleClick = async (event) => {
    event.preventDefault();

    const success = await userService.login(email, password);

    if (success) {
      setLoading(true);
    }
  };

  return (
    <>
      <button className="loginBtn" type="submit" onClick={handleClick}>
        Entrar
      </button>
      {loading && <Loading />}
    </>
  );
}
