"use client";

import { useEffect, useRef } from "react";

export default function ClickOutside({ onClose, children, className }) {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        onClose?.();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div ref={wrapperRef} className={className}>
      {children}
    </div>
  );
}
