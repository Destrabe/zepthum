"use client";
import { useState } from "react";
import Header from "@/components/header/header";
import Sidebar from "@/components/sidebar/sidebar";
import "./mainGlobal.css";

export default function MainLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="app-layout">
      <Header toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <Sidebar isMenuOpen={isMenuOpen} />
      <main className="content">{children}</main>
    </div>
  );
}
