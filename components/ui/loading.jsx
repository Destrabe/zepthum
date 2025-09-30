"use client";
import { useEffect, useState } from "react";
import "../UiStyles/loading.css";

export default function Loading({ duration = 1500, onFinish }) {
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
    <div className="loading-screen">
      <div className="loading-container">
        <div class="loading-animation">
          <div class="loading-box">
            <div class="WH color l1"></div>
            <div class="ball color"></div>
            <div class="WH color l2"></div>
          </div>
        </div>
        <div className="loading-text">
          <h2>Cargando...</h2>
          <p>Por favor espera un momento</p>
        </div>
      </div>
    </div>
  );
}
