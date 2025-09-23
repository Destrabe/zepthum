"use client";
import Link from "next/link";
import "./header.css";

export default function Header({ toggleMenu, isMenuOpen }) {
  return (
    <header>
      <div className="left">
        <div className="menu-container">
          <div
            className={`menu ${isMenuOpen ? "menu-toggle" : ""}`}
            onClick={toggleMenu}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="brand">
          <img src="/assets/svg/logo_tem.svg" alt="icon" className="logo" />
          <span className="name">Zepthum</span>
        </div>
      </div>

      <div className="right">
        <Link href="#" className="icons-header">
          <img src="/assets/svg/notifications.svg" alt="notifications" />
        </Link>
        <div className="separator"></div>
        <div className="profile-dropdown">
          <div className="profile-info" id="profileToggle">
            <span className="greeting">
              Hola, <strong>Marco Fabian</strong>
            </span>
            <img src="/assets/images/kirby.webp" alt="user" className="user" />
            <img
              src="/assets/svg/arrow-down.svg"
              alt="arrow"
              className="arrow-icon"
            />
          </div>

          <div className="dropdown-menu">
            <button className="logout-btn">
              <img src="/assets/svg/logout.svg" alt="logout" />
              Cerrar sesión
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
