"use client";

import { useEffect, useState } from "react";
import NavOverlay from "./NavOverlay";

export default function HeroChrome() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const chrome = document.getElementById("heroChrome");
    if (!chrome) return;

    function onScroll() {
      if (window.scrollY > 80) {
        chrome!.classList.add("visible");
        chrome!.removeAttribute("aria-hidden");
      } else {
        chrome!.classList.remove("visible");
        chrome!.setAttribute("aria-hidden", "true");
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="hero-chrome" id="heroChrome" aria-hidden="true">
        <span className="firm-name">Sanjay Puri Architects</span>
        <button
          className="hamburger"
          aria-label="Open menu"
          onClick={() => setIsOpen(true)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {isOpen && <NavOverlay onClose={() => setIsOpen(false)} />}
    </>
  );
}
