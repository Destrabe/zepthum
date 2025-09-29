"use client";
import { useEffect, useState } from "react";

export default function Loading({ duration = 500, onFinish }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onFinish?.();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onFinish]);

  if (!visible) return null;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        position: "fixed",
        top: 0,
        left: 0,
        background: "rgba(3, 213, 255, 1)",
        zIndex: 9999,
      }}
    >
      <section style={{ textAlign: "center", padding: "2rem", color: "#fff" }}>
        <h2>Cargando...</h2>
        <p>Por favor espera un momento ⏳</p>
      </section>
    </div>
  );
}
