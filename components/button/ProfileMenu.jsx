"use client";
import { useEffect, useRef } from "react";
import "../header/header.css";

export default function ProfileMenu({ onClose }) {
  const menuRef = useRef(null);

  // Detectar click fuera
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="dropdown-menu show" ref={menuRef}>
      <button className="logout-btn">
        <img src="/assets/svg/logout.svg" alt="logout" />
        Cerrar sesión
      </button>
    </div>
  );
}
