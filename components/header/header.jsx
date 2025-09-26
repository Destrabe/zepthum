import Link from "next/link";
import { useState } from "react";
import "./header.css";
import dynamic from "next/dynamic";

const ProfileMenu = dynamic(() => import("../button/ProfileMenu"), {
  ssr: false,
});

export default function Header({ toggleMenu, isMenuOpen }) {
  const [isOpen, setIsOpen] = useState(false);

  const arrowDown = "/assets/svg/arrow-down.svg";
  const arrowUp = "/assets/svg/arrow-up.svg";

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
          <img
            src="/assets/svg/notifications.svg"
            className="notifications"
            alt="notifications"
          />
        </Link>
        <div className="separator"></div>

        {/* Perfil */}
        <div className="profile-dropdown">
          <div className="profile-info">
            <span className="greeting">
              Hola, <strong>Marco Fabian</strong>
            </span>
            <img src="/assets/images/kirby.webp" alt="user" className="user" />
            <img
              src={isOpen ? arrowUp : arrowDown}
              alt="arrow"
              className="arrow-icon"
              onClick={() => setIsOpen((prev) => !prev)}
            />
          </div>

          {/* Mostrar menú solo si está abierto */}
          {isOpen && <ProfileMenu onClose={() => setIsOpen(false)} />}
        </div>
      </div>
    </header>
  );
}
