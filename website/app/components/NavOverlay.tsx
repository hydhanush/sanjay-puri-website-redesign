"use client";

import Link from "next/link";
import "./nav-overlay.css";

interface NavOverlayProps {
  onClose: () => void;
}

const NAV_LINKS = [
  { label: "Home",       href: "/" },
  { label: "Projects",   href: "/projects" },
  { label: "About Us",   href: "/about" },
  { label: "Contact",    href: "/contact" },
];

export default function NavOverlay({ onClose }: NavOverlayProps) {
  return (
    <div className="nav-overlay" role="dialog" aria-modal="true" aria-label="Navigation menu">
      <button className="nav-overlay-close" onClick={onClose} aria-label="Close menu">
        <span />
        <span />
      </button>
      <nav className="nav-overlay-nav">
        {NAV_LINKS.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className="nav-overlay-link"
            onClick={onClose}
          >
            {label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
