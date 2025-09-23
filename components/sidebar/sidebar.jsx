"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./sidebar.css";

export default function Sidebar({ isMenuOpen }) {
  const pathname = usePathname();

  return (
    <div
      className={`sidebar ${isMenuOpen ? "sidebar-toggle" : ""}`}
      id="sidebar"
    >
      <nav>
        <ul>
          <li>
            <Link
              href="/dashboard"
              className={pathname === "/dashboard" ? "selected" : ""}
            >
              <img src="/assets/svg/home.svg" alt="Home" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              href="/chat"
              className={pathname === "/chat" ? "selected" : ""}
            >
              <img src="/assets/svg/chat.svg" alt="Chat" />
              <span>Chat</span>
            </Link>
          </li>
          <li>
            <Link
              href="/podium"
              className={pathname === "/podium" ? "selected" : ""}
            >
              <img src="/assets/svg/cup.svg" alt="Podium" />
              <span>Puntuaciones</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
