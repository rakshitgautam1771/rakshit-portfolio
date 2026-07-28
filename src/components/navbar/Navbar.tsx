import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";

import Button from "../button/Button";
import Container from "../container/Container";

import "./navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  // close on Escape key
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header>
      <Container>
        <nav>

          {/* Logo */}
          <a href="/" className="logo">
            Rakshit
          </a>

          {/* Desktop Navigation */}
          <ul className="nav-links">
            <li><a href="#work">Work</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          {/* Desktop Button */}
          <div className="desktop-btn">
            <Button><a href="#contact">Let's Talk</a></Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="menu-btn"
            onClick={() => setMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu size={30} />
          </button>

        </nav>
      </Container>

      {/* =========================
          Mobile Drawer (portaled to body
          so it isn't trapped by the
          header's backdrop-filter)
      ========================== */}

      {createPortal(
        <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>

          <div
            className="mobile-overlay"
            onClick={closeMenu}
          ></div>

          <aside className="mobile-drawer">

            <button
              className="close-btn"
              onClick={closeMenu}
              aria-label="Close Menu"
            >
              <X size={30} />
            </button>

            <a href="#work" onClick={closeMenu}>Work</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>

            <Button><a className="text" href="#contact">Let's Talk</a></Button>

          </aside>

        </div>,
        document.body
      )}

    </header>
  );
};

export default Navbar;