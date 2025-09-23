"use client";

import { useRouter } from "next/navigation";

export default function LoginBtn() {
  const router = useRouter();

  const handleClick = (event) => {
    event.preventDefault();
    router.push("/dashboard");
  };

  return (
    <button className="loginBtn" type="submit" onClick={handleClick}>
      Entrar
    </button>
  );
}
