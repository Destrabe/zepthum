"use client";
import { useEffect, useRef, useState } from "react";
import userService from "@/app/userService";
import "../header/header.css";
import Loading from "./loading";

export default function ProfileMenu({ onClose }) {
  const menuRef = useRef(null);
  const [loading, setLoading] = useState(false);

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

  const handleLogout = async (e) => {
    e.preventDefault();
    console.log("🔴 Botón logout presionado");
    setLoading(true);
    try {
      await userService.logout();
    } catch (error) {
      console.error("❌ Error during logout:", error);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="dropdown-menu show" ref={menuRef}>
        <button className="logout-btn" onClick={handleLogout}>
          <img src="/assets/svg/logout.svg" alt="logout" />
          Cerrar sesión
        </button>
      </div>

      {loading && <Loading />}
    </>
  );
}
