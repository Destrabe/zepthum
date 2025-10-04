"use client";
import { useState } from "react";
import userService from "@/app/userService";
import "../header/header.css";
import Loading from "./loading";
import ClickOutside from "../logic/clickOutside";

export default function ProfileMenu({ onClose }) {
  const [loading, setLoading] = useState(false);

  const handleLogout = async (e) => {
    e.preventDefault();
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
      <ClickOutside onClose={onClose} className="dropdown-menu show">
        <button className="logout-btn" onClick={handleLogout}>
          <img src="/assets/svg/logout.svg" alt="logout" />
          Cerrar sesión
        </button>
      </ClickOutside>

      {loading && <Loading />}
    </>
  );
}
