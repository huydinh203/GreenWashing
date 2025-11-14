import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Thêm hiệu ứng khi cuộn
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">🌿 Greenwashing</div>

      <div
        className={`menu-toggle ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><a href="#stats">Báo cáo</a></li>
        <li><a href="#survey">Khảo sát</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
